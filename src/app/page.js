"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">

      {/* Logo */}
      <Image
        src="/images/react.svg"
        alt="My Logo"
        className="w-28 h-28 rounded-full shadow-md mb-4"
        width={112}
        height={112}

      />

      <h1 className="text-3xl font-bold mb-2">
        Welcome to our Website
      </h1>

      <p className="text-gray-600 mb-6">
        This is a responsive demo site built with Next.js and Tailwind CSS.
      </p>

      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Services</h2>

        <Link href="/services">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Lift
          </button>
        </Link>
      </div>
    </main>
  );
}
