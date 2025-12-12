"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-75 animate-pulse"></div>
          <Image
            src="/images/react.svg"
            alt="My Logo"
            className="w-32 h-32 rounded-full shadow-2xl mb-4 relative border-4 border-gray-800"
            width={128}
            height={128}
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to Our Website
        </h1>

        <p className="text-gray-400 mb-8 text-lg max-w-lg leading-relaxed">
          This is a beautifully crafted responsive site built with Next.js and
          Tailwind CSS. Explore our services and place your order today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/services">
            <button className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <span className="relative flex items-center gap-2">
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
