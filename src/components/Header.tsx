/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "../stores/itemsStore";
import { Item } from "../lib/constants";

export default function Header() {
  const items: Item[] = useItemsStore((state: any) => state.items);
  const packedItems: number = items.filter((item: Item) => item.packed).length;

  return (
    <header>
      <Logo />
      <Counter totalItems={items.length} packedItems={packedItems} />
    </header>
  );
}
