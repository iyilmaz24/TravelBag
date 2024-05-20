import Button from "./Button";
import { FormEvent, useRef, useState } from "react";

type AddItemFormProps = {
  setItems: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; packed: boolean }[]>
  >;
};

export default function AddItemForm({ setItems }: AddItemFormProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input) {
      inputRef.current?.focus();
      return;
    }
    const newItem = {
      id: new Date().getTime(),
      text: input,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        autoFocus
      />
      <Button text={"Add to List"} secondary={false}></Button>
    </form>
  );
}
