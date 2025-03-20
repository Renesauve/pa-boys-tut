"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Products", href: "#" },
  { name: "Benefits", href: "#" },
  { name: "Treats", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://i.imgur.com/ThACsJ2.jpeg",
    "https://imgur.com/mts98QA.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-charcoal-800">
      {/* Full-screen Gradient Box */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000000] to-[#3c3c3c] opacity-100 w-full h-full"></div>

      {/* Hero Section */}
      <header className="absolute inset-0 z-10 flex justify-between items-center p-6 lg:px-8">
        <div className="flex flex-1"></div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white p-2.5"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="fixed inset-y-0 right-0 w-2/3 bg-charcoal-800 p-6">
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="block py-2 text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative pt-24 pb-16 text-white z-10">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-6">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-5xl font-semibold text-orange-500 sm:text-6xl">
              Welcome to Healthy Cat Food!
            </h2>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl">
              Get the best nutrition for your cats delivered to your doorstep.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-500"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="inline-block ml-4 bg-charcoal-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-charcoal-600"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 mt-[50px] lg:mt-0 relative w-full h-[400px] overflow-hidden border-4 border-gray-800 rounded-lg">
            <img
              src={images[0]}
              alt="Healthy Cat Food"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                imageIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
            <img
              src={images[1]}
              alt="Healthy Cat Food"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                imageIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
