"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Redirect to home page after popup closes
  useEffect(() => {
    if (submitted) {
      const redirectTimer = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }
  }, [submitted, router]);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Phone number must be digits only
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setForm({ ...form, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate name
    if (!form.name.trim()) {
      newErrors.name = "Name is required!";
    }

    // Validate phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required!";
    } else if (form.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits!";
    }

    // Validate email - MUST BE REQUIRED AND VALID FORMAT
    if (!form.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address!";
    }

    setErrors(newErrors);

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("orderForm", JSON.stringify(form));
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "" });
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center p-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Success Popup Modal */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Modal */}
          <div className="relative animate-bounce bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-8 max-w-sm mx-4 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center animate-scale-up">
                <span className="text-4xl text-green-500">✓</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Submit Success
            </h2>
            <p className="text-green-100 mb-6">
              Your order has been submitted successfully!
            </p>
            <p className="text-green-50 text-sm">
              Thank you for your business. We will contact you soon.
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm"
        >
          <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Order Form
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Fill in your details below
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center font-medium">
              ✓ Order submitted successfully!
            </div>
          )}

          {/* Name */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-200">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 transition-all duration-300 focus:outline-none text-white placeholder-gray-500 ${
                errors.name
                  ? "border-red-500 focus:border-red-600 focus:shadow-lg focus:shadow-red-500/20"
                  : "border-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">• {errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-200">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              inputMode="numeric"
              className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 transition-all duration-300 focus:outline-none text-white placeholder-gray-500 ${
                errors.phone
                  ? "border-red-500 focus:border-red-600 focus:shadow-lg focus:shadow-red-500/20"
                  : "border-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
              }`}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-2">• {errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-200">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 transition-all duration-300 focus:outline-none text-white placeholder-gray-500 ${
                errors.email
                  ? "border-red-500 focus:border-red-600 focus:shadow-lg focus:shadow-red-500/20"
                  : "border-gray-600 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">• {errors.email}</p>
            )}
            {!errors.email && form.email && validateEmail(form.email) && (
              <p className="text-green-400 text-sm mt-2">✓ Email looks good!</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-8 group relative font-bold text-lg py-3 rounded-lg text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              Submit Order
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}
