import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 20px;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : null)};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-0);
  return (
    <>
      <h1>List of {heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <List className="list-group">
        {items.map((item, i) => (
          <ListItem
            active={i === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
