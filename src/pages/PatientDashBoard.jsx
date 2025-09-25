import { Upload, FolderOpen, FileText } from "lucide-react";

export default function PatientDashboard() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center p-4 md:p-8 overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
      </div>

      {/* Dashboard Header */}
      <div className="relative z-10 text-center pt-16 pb-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Patient Dashboard
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Manage your health records, access requests, and shared documents — all in one secure place.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* Upload Documents Card */}
        <div className="rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
          <div className="text-center py-12 px-6 flex flex-col items-center gap-4">
            <Upload className="w-12 h-12 text-cyan-400" />
            <h3 className="text-xl font-bold">Upload Documents</h3>
            <p className="text-gray-400 text-sm">
              Securely upload and share your medical records with doctors and hospitals.
            </p>
            <button className="mt-4 rounded-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition">
              Upload Now
            </button>
          </div>
        </div>

        {/* Shared Records Card */}
        <div className="rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
          <div className="text-center py-12 px-6 flex flex-col items-center gap-4">
            <FolderOpen className="w-12 h-12 text-blue-400" />
            <h3 className="text-xl font-bold">Shared Records</h3>
            <p className="text-gray-400 text-sm">
              Review and manage the health records you’ve already shared.
            </p>
            <button className="mt-4 rounded-full px-6 py-2 border border-blue-400 text-blue-400 font-semibold hover:bg-white/10 hover:text-white transition">
              View Records
            </button>
          </div>
        </div>

        {/* Access Requests Card */}
        <div className="rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
          <div className="text-center py-12 px-6 flex flex-col items-center gap-4">
            <FileText className="w-12 h-12 text-cyan-400" />
            <h3 className="text-xl font-bold">Access Requests</h3>
            <p className="text-gray-400 text-sm">
              Approve or deny access requests from doctors and hospitals.
            </p>
            <button className="mt-4 rounded-full px-6 py-2 border border-cyan-400 text-cyan-400 font-semibold hover:bg-white/10 hover:text-white transition">
              Review Requests
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}