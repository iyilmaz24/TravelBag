type itemsListProps = {
  items: {
    id: number;
    text: string;
    packed: boolean;
  }[];
};

export default function ItemList({ items }: itemsListProps) {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem item={item}></ListItem>;
      })}
    </ul>
  );
}

type ListItemProps = {
  item: {
    id: number;
    text: string;
    packed: boolean;
  };
};

function ListItem({ item }: ListItemProps) {
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
