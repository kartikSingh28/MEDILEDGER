import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import PatientDashboard from "../src/pages/PatientDashBoard";
import HospitalBoard from "../src/pages/HospitalDashboard"; // create this if missing

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Landing page will come first at "/" */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboards */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/hospital-board" element={<HospitalBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
