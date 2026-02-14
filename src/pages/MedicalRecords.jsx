import React, { useState, useEffect } from 'react';
import { FaFileMedical, FaHeartbeat, FaPrescription, FaCalendarCheck, FaDownload, FaPrint, FaSearch } from 'react-icons/fa';

const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  
  // Mock data
  const appointments = [
    {
      id: 1,
      date: '2024-01-15',
      time: '10:30 AM',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      reason: 'Annual Heart Checkup',
      status: 'Completed'
    },
    {
      id: 2,
      date: '2024-01-10',
      time: '2:00 PM',
      doctor: 'Dr. Michael Chen',
      department: 'Neurology',
      reason: 'Migraine Consultation',
      status: 'Completed'
    }
  ];

  const prescriptions = [
    {
      id: 1,
      date: '2024-01-15',
      doctor: 'Dr. Sarah Johnson',
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', duration: '30 days' },
        { name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', duration: 'Ongoing' }
      ],
      diagnosis: 'Hypertension',
      followUp: '2024-02-15'
    }
  ];

  const medicalHistory = [
    {
      id: 1,
      date: '2023-12-01',
      condition: 'Hypertension',
      diagnosedBy: 'Dr. James Wilson',
      treatment: 'Lifestyle changes and medication',
      status: 'Active'
    },
    {
      id: 2,
      date: '2023-11-15',
      condition: 'Migraine',
      diagnosedBy: 'Dr. Michael Chen',
      treatment: 'Prescribed medication and stress management',
      status: 'Resolved'
    }
  ];

  const handleDownload = (type) => {
    // Mock download functionality
    alert(`Downloading ${type} records...`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Medical Records</h1>
        <p className="text-gray-600">Access your complete medical history and records</p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'appointments', label: 'Appointments', icon: <FaCalendarCheck /> },
            { id: 'prescriptions', label: 'Prescriptions', icon: <FaPrescription /> },
            { id: 'history', label: 'Medical History', icon: <FaFileMedical /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mb-6">
        <button 
          onClick={() => handleDownload('all')}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaDownload />
          <span>Download All</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          <FaPrint />
          <span>Print</span>
        </button>
      </div>

      {/* Appointments Tab */}
      {activeTab === 'appointments' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Appointment History</h2>
          
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{appointment.doctor}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {appointment.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{appointment.reason}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{appointment.date} at {appointment.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prescriptions Tab */}
      {activeTab === 'prescriptions' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Prescription Records</h2>
          
          <div className="space-y-6">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Prescribed by {prescription.doctor}</h3>
                    <p className="text-gray-600 text-sm">{prescription.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Active
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Diagnosis: {prescription.diagnosis}</h4>
                  {prescription.followUp && (
                    <p className="text-sm text-gray-600">Follow-up: {prescription.followUp}</p>
                  )}
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Medications:</h4>
                  <div className="space-y-3">
                    {prescription.medications.map((med, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-800">{med.name}</div>
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mt-1">
                          <span>Dosage: {med.dosage}</span>
                          <span>Frequency: {med.frequency}</span>
                          <span>Duration: {med.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Medical History Tab */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Medical History</h2>
          
          <div className="space-y-4">
            {medicalHistory.map((record) => (
              <div key={record.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{record.condition}</h3>
                    <p className="text-gray-600 mb-2">Diagnosed by {record.diagnosedBy}</p>
                    <p className="text-gray-700 text-sm mb-2">Treatment: {record.treatment}</p>
                    <p className="text-sm text-gray-500">Diagnosed on: {record.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      record.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {record.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{appointments.length}</div>
          <div className="text-sm text-gray-600">Total Appointments</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{prescriptions.length}</div>
          <div className="text-sm text-gray-600">Active Prescriptions</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">{medicalHistory.length}</div>
          <div className="text-sm text-gray-600">Medical Conditions</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-sm text-gray-600">Access Available</div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;