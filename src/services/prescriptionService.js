import api from './api';

const prescriptionService = {
  // Get all prescriptions
  getAllPrescriptions: async () => {
    const response = await api.get('/prescriptions');
    return response.data;
  },

  // Get prescription by ID
  getPrescriptionById: async (id) => {
    const response = await api.get(`/prescriptions/${id}`);
    return response.data;
  },

  // Create new prescription
  createPrescription: async (prescriptionData) => {
    const response = await api.post('/prescriptions', prescriptionData);
    return response.data;
  },

  // Update prescription
  updatePrescription: async (id, prescriptionData) => {
    const response = await api.put(`/prescriptions/${id}`, prescriptionData);
    return response.data;
  },

  // Delete prescription (soft delete)
  deletePrescription: async (id) => {
    const response = await api.delete(`/prescriptions/${id}`);
    return response.data;
  },

  // Get prescriptions by patient
  getPrescriptionsByPatient: async (patientId) => {
    const response = await api.get(`/prescriptions/patient/${patientId}`);
    return response.data;
  },

  // Get prescriptions by doctor
  getPrescriptionsByDoctor: async (doctorId) => {
    const response = await api.get(`/prescriptions/doctor/${doctorId}`);
    return response.data;
  },

  // Get active prescriptions
  getActivePrescriptions: async () => {
    const response = await api.get('/prescriptions/active');
    return response.data;
  }
};

export default prescriptionService;