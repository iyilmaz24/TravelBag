import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

type SidebarProps = {
  setItems: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; packed: boolean }[]>
  >;
};

export default function Sidebar({ setItems }: SidebarProps) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}></AddItemForm>

      <ButtonGroup></ButtonGroup>
    </div>
  );
}
