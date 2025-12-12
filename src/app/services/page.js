import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build responsive and modern websites with cutting-edge technologies",
      icon: "💻",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility and reach your target audience",
      icon: "🔍",
    },
  ];

  return (
    <main className="min-h-screen p-6 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/order">
            <button className="group relative px-10 py-4 font-bold text-lg text-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <span className="relative flex items-center gap-2">
                Place Your Order
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
