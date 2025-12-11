import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-4">Services</h1>

      <ul className="text-lg space-y-2 mb-6">
        <li>• Web Development</li>
        <li>• SEO</li>
      </ul>

      <Link href="/order">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Order
        </button>
      </Link>

    </main>
  );
}
