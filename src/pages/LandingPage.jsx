import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/mediledger.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Prevent horizontal scroll
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full mx-auto overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 shadow-md bg-white/80 backdrop-blur-md z-50 w-full">
        <div
          className="text-3xl font-extrabold text-cyan-600 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          MediLedger
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleNavigation("/login")}
            className="px-4 py-2 rounded-lg text-cyan-600 font-medium hover:bg-cyan-100 transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation("/signup")}
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition transform hover:scale-105 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full px-6 pt-32 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 overflow-x-hidden">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Secure <span className="text-cyan-600">Blockchain</span>-powered{" "}
            <span className="text-cyan-600">Patient Data</span> Management
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Empowering hospitals and patients with transparent, decentralized,
            and secure data sharing.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => handleNavigation("/signup")}
              className="px-8 py-4 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => handleNavigation("/login")}
              className="px-8 py-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 hover:scale-105 hover:shadow-md transition"
            >
              Login
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
            <img
              src={heroImage}
              alt="Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm w-full px-6">
        <div className="text-center mb-12 w-full">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-cyan-600">MediLedger</span>?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare data management with our
            cutting-edge blockchain technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              icon: "🔒",
              title: "Ultra Secure",
              description:
                "Military-grade encryption with blockchain immutability",
            },
            {
              icon: "🌐",
              title: "Decentralized",
              description:
                "No single point of failure, distributed across the network",
            },
            {
              icon: "⚡",
              title: "Lightning Fast",
              description:
                "Instant access to patient data when you need it most",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
