/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore(
    (state: any) => state.markAllAsComplete
  );
  const markAllAsIncomplete = useItemsStore(
    (state: any) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state: any) => state.resetToInitial);
  const removeAllItems = useItemsStore((state: any) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button
        text={"Mark all as packed"}
        secondary={true}
        onClick={markAllAsComplete}
      ></Button>
      <Button
        text={"Mark all as unpacked"}
        secondary={true}
        onClick={markAllAsIncomplete}
      ></Button>
      <Button
        text={"Reset to initial"}
        secondary={true}
        onClick={resetToInitial}
      ></Button>
      <Button
        text={"Remove all items"}
        secondary={true}
        onClick={removeAllItems}
      ></Button>
    </section>
  );
}
