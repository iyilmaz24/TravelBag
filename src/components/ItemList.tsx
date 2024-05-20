/* eslint-disable @typescript-eslint/no-explicit-any */
import { Item } from "../lib/constants";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "name" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const items: Item[] = useItemsStore((state: any) => state.items);
  const deleteItem = useItemsStore((state: any) => state.deleteItem);
  const toggleItem = useItemsStore((state: any) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems: Item[] = useMemo(
    () =>
      [...items].sort((a: Item, b: Item): number => {
        if (sortBy === "packed") {
          return Number(b.packed) - Number(a.packed);
        }
        if (sortBy === "unpacked") {
          return Number(a.packed) - Number(b.packed);
        }
        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option?.value || "default")}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      )}

      {sortedItems.map((item) => {
        return (
          <ListItem
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          ></ListItem>
        );
      })}
    </ul>
  );
}

type ListItemProps = {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};
function ListItem({ item, onDeleteItem, onToggleItem }: ListItemProps) {
  return (
    <li key={item.id} className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.text}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
