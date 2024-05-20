import { Item } from "../lib/constants";

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem item={item}></ListItem>;
      })}
    </ul>
  );
}

function ListItem({ item }: { item: Item }) {
  return (
    <li key={item.id} className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.text}
      </label>
      <button>❌</button>
    </li>
  );
}
