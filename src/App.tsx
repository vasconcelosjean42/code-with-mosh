import axios from "axios";
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
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err: { message: string }) => setError(err.message));
  }, []);

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </>
  );
};

export default App;
