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
      .then((res) => setUsers(res.data))
      .catch((err: { message: string }) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
    // const getData = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/xusers"
    //     );
    //     console.log(res);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };
    // getData();
  }, []);

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {isLoading && <div className="spinner-border"></div>}
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </>
  );
};

export default App;
