import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type SidebarProps = {
  handleAddItem: (input: string) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsIncomplete: () => void;
};

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}></AddItemForm>

      <ButtonGroup
        onRemoveAllItems={handleRemoveAllItems}
        onResetToInitial={handleResetToInitial}
        onMarkAllAsComplete={handleMarkAllAsComplete}
        onMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      ></ButtonGroup>
    </div>
  );
}
