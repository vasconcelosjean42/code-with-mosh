import { useEffect, useState } from "react";
import apiClient, { CanceledError, AxiosError } from "./services/api-client";
import {
  User,
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "./services/user-service";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: users.length + 1,
      name: "Jean Vasconcelos",
    };
    setUsers((prevState) => [...prevState, newUser]);
    createUser(newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const editUser = (user: User) => {
    const originalUsers = [...users];
    const newUser = { ...user, name: "Jean Vasconcelos" };
    setUsers(users.map((u) => (u.id === user.id ? newUser : u)));
    updateUser(user.id, newUser).catch((err: AxiosError) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const removeUser = (id: number) => {
    const originalUsers = [...users];
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
    deleteUser(id).catch((err: AxiosError) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add user
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger mb-3 mx-1"
                onClick={() => removeUser(user.id)}
              >
                delete
              </button>
              <button
                className="btn btn-outline-warning mb-3"
                onClick={() => editUser(user)}
              >
                edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
