import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="
        flex min-h-screen items-center justify-center
        bg-gradient-to-br from-blue-600 to-indigo-700
      "
    >
      <div
        className="
          rounded-2xl
          bg-white
          px-8 py-6
          text-center
          shadow-xl
        "
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Sales Analytics
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          Visualize yearly sales performance with interactive charts
        </p>

        <Link
          href="/dashboard"
          className="
            inline-block
            rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            px-6 py-3
            text-white font-semibold
            transition
            hover:scale-105 hover:shadow-lg
          "
        >
          Go to Dashboard →
        </Link>
      </div>
    </main>
  );
}
