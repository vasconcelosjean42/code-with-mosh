import Heart from "bootstrap-icons/icons/heart.svg";
import HeartFill from "bootstrap-icons/icons/heart-fill.svg";
import { useState } from "react";

interface Props {
  onLike: () => void;
}

const Like = ({ onLike }: Props) => {
  const [isLike, setLike] = useState(false);
  return (
    <>
      <h1>Like</h1>
      <img
        src={isLike ? HeartFill : Heart}
        onClick={() => {
          setLike(true);
          onLike();
        }}
      />
    </>
  );
};

export default Like;
