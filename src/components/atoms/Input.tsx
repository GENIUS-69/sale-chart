type InputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Min Sales"
      className="
        w-40
        rounded-lg
        border border-gray-300
        px-3 py-2
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-blue-500
      "
    />
  );
}
