import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password ❌");
      return;
    }

    // Redirect based on user's role
    if (user.role === "patient") {
      navigate("/patient-dashboard");
    } else if (user.role === "hospital_staff") {
      navigate("/hospital-board");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 p-4 md:p-8">
      <div className="relative z-10 w-full max-w-md mx-auto p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Login to MediLedger
        </h2>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/20 text-red-300 border border-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label className="block text-gray-400 text-left mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 text-left mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition transform"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
