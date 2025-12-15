type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-xl
        bg-gradient-to-r from-blue-600 to-indigo-600
        px-4 py-2
        text-sm font-semibold text-white
        shadow-md
        transition
        hover:scale-105 hover:shadow-lg
        active:scale-95
      "
    >
      {label}
    </button>
  );
}
