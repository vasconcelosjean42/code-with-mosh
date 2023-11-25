import ListGroup from "./component/ListGroup";

const App = () => {
  let items = ["Brazil", "Maranhão", "São Paulo", "Rio de Janeiro", "Salvador"];
  let heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
