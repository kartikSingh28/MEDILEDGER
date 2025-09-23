import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [roleOpen, setRoleOpen] = useState(false);
  const navigate = useNavigate();

  const roles = [
    { value: "patient", label: "Patient" },
    { value: "hospital_staff", label: "Hospital Staff" },
  ];

  const toggleRoleDropdown = () => setRoleOpen(!roleOpen);

  const selectRole = (value) => {
    setRole(value);
    setRoleOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    if (!role) {
      alert("Please select a role ❌");
      return;
    }

    // ✅ Simulate successful signup
    alert(`Welcome ${role === "patient" ? "Patient" : "Hospital Staff"} 🎉\nEmail: ${email}`);

    // ✅ Redirect to Hospital Board
    navigate("/hospital-board");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <form onSubmit={handleSignup} className="flex flex-col gap-6 text-gray-900">
          <h2 className="text-3xl font-extrabold text-cyan-600 text-center">
            Create Your MediLedger Account
          </h2>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Role</label>
            <button
              type="button"
              onClick={toggleRoleDropdown}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white flex justify-between items-center focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              <span>{role ? roles.find((r) => r.value === role)?.label : "Select your role"}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  roleOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {roleOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-auto">
                {roles.map(({ value, label }) => (
                  <li
                    key={value}
                    onClick={() => selectRole(value)}
                    className="px-4 py-2 cursor-pointer hover:bg-cyan-100"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
