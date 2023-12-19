import { FormEvent, useState } from "react";
import Form from "./component/expense-tracker/Form";
import List from "./component/expense-tracker/List";

export interface itemProps {
  description: string;
  amount: number;
  category: string;
}

const App = () => {
  const [item, setItem] = useState<itemProps[]>();

  const onSubmit = (data: itemProps) => {
    const newItem = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };
    setItem((prevState) => (prevState ? [...prevState, newItem] : [newItem]));
  };

  const handleDelete = (index: number) => {
    setItem((prevState) => {
      if (prevState) return [...prevState].filter((item, i) => i !== index);
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit}></Form>
      {item ? <List items={item} onDelete={handleDelete}></List> : null}
    </>
  );
};

export default App;
