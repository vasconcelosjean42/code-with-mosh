import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup/ListGroup";
import Dismissing from "./component/DismissingAlert";
import Like from "./component/Like/Like";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jean",
    },
  });

  const handleClick = () => {
    setGame({ ...game });
  };

  return (
    <>
      {game.player.name}
      <button onClick={handleClick}>Mudar nome</button>
    </>
  );
};

export default App;
