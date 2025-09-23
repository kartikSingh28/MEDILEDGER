import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent horizontal scroll
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const documents = [
    { id: 1, title: "Patient Report - manas yamal", date: "23 Sep 2025", status: "Granted" },
    { id: 2, title: "Medical History - kartik", date: "20 Sep 2025", status: "Granted" },
    { id: 3, title: "Lab Results - chico", date: "18 Sep 2025", status: "Granted" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full mx-auto overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 shadow-md bg-white/80 backdrop-blur-md z-50 w-full">
        <div
          className="text-3xl font-extrabold text-cyan-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MediLedger
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg text-cyan-600 font-medium hover:bg-cyan-100 transition transform hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition transform hover:scale-105 shadow-md"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="flex flex-col flex-1 pt-24 px-6 lg:px-16 pb-12">
        <h1 className="text-4xl font-extrabold text-cyan-600 mb-8 text-center">
          Hospital Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-12">
          View and manage all granted patient document requests
        </p>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Date: {doc.date}</p>
              <p
                className={`text-sm font-medium ${
                  doc.status === "Granted" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                Status: {doc.status}
              </p>
              <button
                onClick={() => alert(`Opening document: ${doc.title}`)}
                className="mt-4 w-full py-2 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
              >
                View Document
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
