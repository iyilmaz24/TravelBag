type CounterProps = {
  totalItems: number;
  packedItems: number;
};

export default function Counter({ totalItems, packedItems }: CounterProps) {
  return (
    <div>
      <b>{packedItems}</b> / {totalItems} items packed
    </div>
  );
}
