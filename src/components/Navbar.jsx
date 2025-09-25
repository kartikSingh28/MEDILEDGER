import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => navigate(path);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        {/* Logo */}
        <div
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          MediLedger
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => handleNavigation("/login")}
            className="px-5 py-2 rounded-lg text-cyan-300 font-medium hover:bg-cyan-500/20 transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation("/signup")}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow hover:shadow-cyan-400/30 hover:scale-105 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
