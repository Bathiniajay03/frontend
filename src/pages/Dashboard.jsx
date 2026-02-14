import React, { useState, useEffect } from 'react';
import appointmentService from '../services/appointmentService';
import patientService from '../services/patientService';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appointmentsRes, patientsRes] = await Promise.all([
          appointmentService.getAllAppointments(),
          patientService.getAllPatients()
        ]);
        setAppointments(appointmentsRes.data);
        setPatients(patientsRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-xl text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  const upcomingAppointments = appointments.filter(app => 
    new Date(app.appointmentDate) >= new Date()
  ).slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Patients</p>
              <p className="text-2xl font-bold text-gray-800">{patients.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Appointments</p>
              <p className="text-2xl font-bold text-gray-800">{appointments.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">⏰</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-800">{upcomingAppointments.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Appointments</h2>
        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map(appointment => (
              <div key={appointment._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {appointment.patient?.fullName || 'Unknown Patient'}
                    </h3>
                    <p className="text-gray-600">
                      Dr. {appointment.doctor?.fullName || 'Unknown Doctor'} - {appointment.doctor?.specialization}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(appointment.appointmentDate).toLocaleDateString()} at {appointment.appointmentTime}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                    appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Reason:</strong> {appointment.reason}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-8">No upcoming appointments</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;