type ButtonProps = {
  text: string;
  secondary: boolean;
  eventHandler?: () => void;
};

export default function Button({ text, secondary, eventHandler }: ButtonProps) {
  return (
    <button
      className={`btn ${secondary ? "btn--secondary" : ""}`}
      onClick={eventHandler}
    >
      {text}
    </button>
  );
}
