import Button from "../atoms/Button";

type ChartSwitcherProps = {
  setType: (type: "bar" | "line" | "pie") => void;
};

export default function ChartSwitcher({ setType }: ChartSwitcherProps) {
  return (
    <div
      className="
        flex gap-2
        rounded-xl
        bg-white
        px-4 py-3
        shadow
      "
    >
      <Button label="Bar" onClick={() => setType("bar")} />
      <Button label="Line" onClick={() => setType("line")} />
      <Button label="Pie" onClick={() => setType("pie")} />
    </div>
  );
}
