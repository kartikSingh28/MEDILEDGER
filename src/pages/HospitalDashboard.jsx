import React from 'react';
import { FolderOpen, FileText, CheckCircle } from 'lucide-react';

export default function HospitalDashboard() {
  const grantedDocuments = [
    {
      type: 'Patient Report',
      patientName: 'manas yamal',
      date: '23 Sep 2025',
      status: 'Granted'
    },
    {
      type: 'Medical History',
      patientName: 'kartik',
      date: '20 Sep 2025',
      status: 'Granted'
    },
    {
      type: 'Lab Results',
      patientName: 'chico',
      date: '18 Sep 2025',
      status: 'Granted'
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 overflow-x-hidden min-h-screen">
      <style>{`
        @keyframes floating-chain {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-50px) rotate(10deg) translateX(20px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0.1;
          }
        }

        .chain-element {
          position: absolute;
          width: 80px;
          height: 80px;
          background: rgba(200, 200, 200, 0.1);
          border-radius: 50%;
          filter: blur(20px);
          animation: floating-chain 20s infinite ease-in-out;
        }

        .chain-element:nth-child(1) {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          width: 100px;
          height: 100px;
        }

        .chain-element:nth-child(2) {
          top: 30%;
          left: 80%;
          animation-delay: 2s;
        }

        .chain-element:nth-child(3) {
          top: 60%;
          left: 20%;
          animation-delay: 4s;
          width: 120px;
          height: 120px;
        }

        .chain-element:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 6s;
        }

        .chain-element:nth-child(5) {
          top: 50%;
          left: 50%;
          animation-delay: 8s;
          width: 90px;
          height: 90px;
        }
      `}</style>
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
        <div className="chain-element"></div>
      </div>
      
      {/* Header and Logo */}
      <header className="relative z-20 w-full flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MediLedger</div>
        <button className="rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          Home
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="relative z-10 flex flex-col items-center pt-12 pb-12 max-w-4xl text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Hospital Dashboard
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          View and manage all granted patient document requests
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8 mx-auto">
        {grantedDocuments.map((doc, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="py-8 px-6 flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-100">
                {doc.type} - <span className="text-gray-400 font-normal">{doc.patientName}</span>
              </h3>
              <p className="text-sm text-gray-500">Date: {doc.date}</p>
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Status: {doc.status}</span>
              </div>
              <button className="mt-4 w-full rounded-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition">
                View Document
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
