import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import appointmentService from '../services/appointmentService';
import patientService from '../services/patientService';
import doctorService from '../services/doctorService';

const Appointment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    priority: 'Medium'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [patientsRes, doctorsRes] = await Promise.all([
          patientService.getAllPatients(),
          doctorService.getAllDoctors()
        ]);
        setPatients(patientsRes.data);
        setDoctors(doctorsRes.data);
        // if a doctorId is present in URL, try to preselect
        const params = new URLSearchParams(window.location.search);
        const doctorId = params.get('doctorId');
        if (doctorId) {
          try {
            const got = await doctorService.getDoctorById(doctorId);
            const doc = got.data;
            if (doc) {
              setFormData(prev => ({ ...prev, doctor: doc._id || doc.id }));
              // ensure doctor appears in select list
              setDoctors(prev => {
                const exists = prev.find(d => d._id === (doc._id || doc.id));
                if (exists) return prev;
                return [doc, ...prev];
              });
            }
          } catch (e) {
            // ignore if fetch fails
          }
        }
      } catch (err) {
        setError('Failed to load data');
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await appointmentService.createAppointment(formData);
      alert('Appointment booked successfully!');
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Appointment</h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Select Patient *</label>
              <select
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Choose a patient</option>
                {patients.map(patient => (
                  <option key={patient._id} value={patient._id}>
                    {patient.fullName} - {patient.email}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Select Doctor *</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor._id} value={doctor._id}>
                    Dr. {doctor.fullName} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Appointment Date *</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">Appointment Time *</label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Reason for Appointment *</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              className="form-input"
              placeholder="Please describe the reason for your appointment..."
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-1"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Need to register as a patient first?</h3>
          <button
            onClick={() => navigate('/register-patient')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Register Patient →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;