type ButtonProps = {
  text: string;
  secondary: boolean;
  onClick?: () => void;
};

export default function Button({ text, secondary, onClick }: ButtonProps) {
  return (
    <button
      className={`btn ${secondary ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
