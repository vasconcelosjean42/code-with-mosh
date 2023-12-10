import { useState } from "react";
import { itemProps } from "../../App";

interface Props {
  items: itemProps[];
  handleDelete: (index: number) => void;
}

const List = ({ items, handleDelete }: Props) => {
  const [categorie, setCategorie] = useState("All");
  return (
    <div>
      <div className="mb-3">
        <select
          name="category"
          id="category"
          className="form-select"
          defaultValue="All"
          value={categorie}
        >
          <option value="All">All categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      {}
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{item.description}</td>
                <td>${item.amount}.00</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>$5.00</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
