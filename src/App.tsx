import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const App = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);

        setUsers(res.data);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      ...users[1],
      id: users.length + 1,
      name: "Jean Vasconcelos",
    };
    setUsers((prevState) => [...prevState, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/xusers/", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (id: number) => {
    const originalUsers = [...users];
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .catch((err: AxiosError) => {
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
            <button
              className="btn btn-outline-danger mb-3"
              onClick={() => deleteUser(user.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
