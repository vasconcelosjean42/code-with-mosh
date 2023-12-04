import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Dismissing from "./component/DismissingAlert";
import Like from "./component/Like/Like";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "Jonh",
    address: {
      city: "San Francisoco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <>
      {customer.address.zipCode}
      <button onClick={handleClick}>Mudar nome</button>
    </>
  );
};

export default App;
