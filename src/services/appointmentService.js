import api from './api';

const appointmentService = {
  // Get all appointments
  getAllAppointments: async () => {
    const response = await api.get('/appointments');
    return response.data;
  },

  // Get appointment by ID
  getAppointmentById: async (id) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  },

  // Create new appointment
  createAppointment: async (appointmentData) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },

  // Update appointment
  updateAppointment: async (id, appointmentData) => {
    const response = await api.put(`/appointments/${id}`, appointmentData);
    return response.data;
  },

  // Delete appointment
  deleteAppointment: async (id) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  },

  // Get appointments by patient
  getAppointmentsByPatient: async (patientId) => {
    const response = await api.get(`/appointments/patient/${patientId}`);
    return response.data;
  },

  // Get appointments by doctor
  getAppointmentsByDoctor: async (doctorId) => {
    const response = await api.get(`/appointments/doctor/${doctorId}`);
    return response.data;
  },

  // Get appointments by date
  getAppointmentsByDate: async (date) => {
    const response = await api.get(`/appointments/date/${date}`);
    return response.data;
  }
};

export default appointmentService;