import Button from "./Button";

interface ButtonGroupProps {
  onRemoveAllItems: () => void;
  onResetToInitial: () => void;
  onMarkAllAsComplete: () => void;
  onMarkAllAsIncomplete: () => void;
}

export default function ButtonGroup(props: ButtonGroupProps) {
  return (
    <section className="button-group">
      <Button
        text={"Mark all as complete"}
        secondary={true}
        onClick={props.onMarkAllAsComplete}
      ></Button>
      <Button
        text={"Mark all as incomplete"}
        secondary={true}
        onClick={props.onMarkAllAsIncomplete}
      ></Button>
      <Button
        text={"Reset to initial"}
        secondary={true}
        onClick={props.onResetToInitial}
      ></Button>
      <Button
        text={"Remove all items"}
        secondary={true}
        onClick={props.onRemoveAllItems}
      ></Button>
    </section>
  );
}
