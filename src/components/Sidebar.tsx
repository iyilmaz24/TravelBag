/* eslint-disable @typescript-eslint/no-explicit-any */
import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type addItemType = (input: string) => void;

export default function Sidebar() {
  const addItem: addItemType = useItemsStore((state: any) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem}></AddItemForm>

      <ButtonGroup />
    </div>
  );
}
