import { FormEvent, useState } from "react";
import Form from "./component/expense-tracker/Form";
import List from "./component/expense-tracker/List";

export interface itemProps {
  description: string;
  amount: number;
  category: string;
}

const App = () => {
  const [item, setItem] = useState<itemProps[]>([
    {
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  const onSubmit = (data: itemProps) => {
    const newItem = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };
    setItem((prevState) => [...prevState, newItem]);
  };

  const handleDelete = (index: number) => {
    setItem((prevState) => [...prevState].filter((item, i) => i !== index));
  };

  return (
    <>
      <Form onSubmit={onSubmit}></Form>
      <List items={item} handleDelete={handleDelete}></List>
    </>
  );
};

export default App;
