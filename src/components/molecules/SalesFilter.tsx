import Input from "../atoms/Input";

type SalesFilterProps = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function SalesFilter({
  threshold,
  setThreshold,
}: SalesFilterProps) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-xl
        bg-white
        px-4 py-3
        shadow
      "
    >
      <span className="text-sm font-medium text-gray-700">
        Minimum Sales
      </span>

      <Input value={threshold} onChange={setThreshold} />
    </div>
  );
}