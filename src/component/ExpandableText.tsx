import { useState } from "react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isMore, setIsMore] = useState(false);
  const handleShowAllText = () => {
    setIsMore((prevState) => !prevState);
  };
  return (
    <div>
      {isMore ? children : children?.toString().slice(0, maxChars)}...
      <button onClick={handleShowAllText}>{isMore ? "more" : "less"}</button>
    </div>
  );
};

export default ExpandableText;
