import { useState } from "react";

const ListaDeCompras: React.FC = () => {
  type Item = {
    id: number;
    name: string;
  };

  const [items, setItems] = useState<Item[]>([]);
  const [formValue, setFormValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem: Item = {
      id: items.length + 1,
      name: formValue,
    };
    setItems([...items, newItem]);
    setFormValue("");
  };

  return (
    <div>
      <h2>Lista de compras</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="Insira um item na lista"
            value={formValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValue(e.target.value)
            }
          />
        </div>
        <div>
          <input type="submit" value="Adicionar" />
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ListaDeCompras;
