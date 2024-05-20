import Logo from "./Logo";
import Counter from "./Counter";

type HeaderProps = {
  totalItemsCount: number;
  packedItemsCount: number;
};

export default function Header({
  totalItemsCount,
  packedItemsCount,
}: HeaderProps) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItemsCount} packedItems={packedItemsCount} />
    </header>
  );
}
