import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List of {heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
