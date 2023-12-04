import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Dismissing from "./component/DismissingAlert";
import Like from "./component/Like/Like";

const App = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.filter((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <>
      {customer.address.zipCode}
      <button onClick={handleClick}>Mudar nome</button>
    </>
  );
};

export default App;
