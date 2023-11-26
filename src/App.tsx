import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Dismissing from "./component/DismissingAlert";

const App = () => {
  const cities = ["Brasil", "São Paulo", "Salvador"];
  const [test, setTest] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const handleSelectItem = (item: string) => {
    setTest(item);
    console.log(test);
  };

  const handleShowAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <>
      <Alert>
        Hello <b>World</b>
      </Alert>
      {cities.length === 0 && <p>No content</p>}
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => console.log("clicked")}>Danger</Button>
      {showAlert && (
        <Dismissing onClick={() => setShowAlert(!showAlert)}>
          My Alert
        </Dismissing>
      )}
      <Button onClick={handleShowAlert} type="danger">
        {showAlert ? "ON" : "OFF"}
      </Button>
    </>
  );
};

export default App;
