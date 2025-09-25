import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Note: Particles imports are no longer needed, so they are commented out.
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
import heroImage from "../assets/mediledger.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => navigate(path);

  // The particlesInit function is removed because it is no longer used.
  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 overflow-x-hidden min-h-screen">
      {/* The Particles component has been replaced with the animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        {/* Add more for a denser effect */}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full pt-28 md:pt-36 pb-28 px-4 md:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            {/* Accent Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto lg:mx-0 mb-8"></div>

            {/* Logo Text */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MediLedger
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200">
              Secure <span className="text-cyan-400">Blockchain</span> Powered{" "}
              <span className="text-blue-400">Patient Data</span> Management
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto lg:mx-0">
              Empowering hospitals and patients with transparent, decentralized,
              and ultra-secure data sharing.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start gap-5 flex-wrap">
              <button
                onClick={() => handleNavigation("/signup")}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.04] transition"
              >
                🚀 Get Started
              </button>
              <button
                onClick={() => handleNavigation("/login")}
                className="px-8 py-4 rounded-lg border border-gray-600 bg-transparent text-gray-300 font-semibold hover:bg-gray-800/50 hover:scale-[1.04] transition"
              >
                🔑 Login
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Blockchain Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 pb-28 px-4 md:px-12 lg:px-20 w-full">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          {/* Accent Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MediLedger
            </span>
            ?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the future of healthcare data management with
            next-generation blockchain technology.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "🔒",
              title: "Ultra Secure",
              description:
                "Military-grade encryption with blockchain immutability.",
            },
            {
              icon: "🌐",
              title: "Decentralized",
              description:
                "No single point of failure, fully distributed across the network.",
            },
            {
              icon: "⚡",
              title: "Lightning Fast",
              description:
                "Instant and reliable access to patient data when you need it most.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 transition hover:-translate-y-1"
            >
              <div className="text-6xl mb-5">{feature.icon}</div>
              <h4 className="text-2xl font-semibold mb-3 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}