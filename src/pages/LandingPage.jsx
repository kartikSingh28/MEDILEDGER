import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white/70 backdrop-blur-md sticky top-0">
        <motion.h1
          className="text-2xl font-bold text-cyan-600"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          MediLedger
        </motion.h1>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-cyan-600 font-medium hover:bg-cyan-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-28">
        {/* Left Text */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Secure <span className="text-cyan-600">Blockchain</span>-powered{" "}
            <span className="text-cyan-600">Patient Data</span> Management
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Empowering hospitals and patients with transparent, decentralized, and secure data sharing.
          </p>
          <div className="mt-8 flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-500 transition"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Visual Placeholder */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-cyan-600 text-xl font-semibold">
              Kartik
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
