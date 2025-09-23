import { useEffect } from "react";

export default function PatientDashboard() {
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
      {/* Dashboard Header */}
      <header className="px-6 py-6 bg-white/80 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-cyan-600">Patient Dashboard</h1>
        <p className="text-gray-600">Welcome back! Manage your documents here.</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Upload Documents */}
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-bold text-gray-900 mb-3">📤 Upload Documents</h2>
            <p className="text-gray-600 mb-4">
              Send your health records to hospitals and doctors securely.
            </p>
            <button className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition">
              Upload Now
            </button>
          </div>

          {/* Shared Records */}
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-bold text-gray-900 mb-3">📂 Shared Records</h2>
            <p className="text-gray-600 mb-4">
              View and manage the records you’ve shared with hospitals.
            </p>
            <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
              View Records
            </button>
          </div>

          {/* Requests from Doctors */}
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-xl font-bold text-gray-900 mb-3">📩 Access Requests</h2>
            <p className="text-gray-600 mb-4">
              Doctors and hospitals requesting access to your medical data.
            </p>
            <button className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-500 transition">
              Review Requests
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
