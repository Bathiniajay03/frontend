import api from './api';

const doctorService = {
  // Get all doctors
  getAllDoctors: async () => {
    const response = await api.get('/doctors');
    return response.data;
  },

  // Get doctor by ID
  getDoctorById: async (id) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },

  // Create new doctor
  createDoctor: async (doctorData) => {
    const response = await api.post('/doctors', doctorData);
    return response.data;
  },

  // Update doctor
  updateDoctor: async (id, doctorData) => {
    const response = await api.put(`/doctors/${id}`, doctorData);
    return response.data;
  },

  // Delete doctor (soft delete)
  deleteDoctor: async (id) => {
    const response = await api.delete(`/doctors/${id}`);
    return response.data;
  },

  // Search doctors
  searchDoctors: async (query) => {
    const response = await api.get(`/doctors/search/${query}`);
    return response.data;
  },

  // Get doctors by specialization
  getDoctorsBySpecialization: async (specialization) => {
    const response = await api.get(`/doctors/specialization/${specialization}`);
    return response.data;
  }
};

export default doctorService;