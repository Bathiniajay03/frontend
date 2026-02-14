import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import doctorService from '../services/doctorService';
import mockDoctors from '../data/mockDoctors';
import { FaStethoscope, FaGraduationCap, FaAward, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await doctorService.getAllDoctors();
        // backend returns { success, count, data }
        const fetched = response?.data || [];
        setDoctors(fetched);

        // Extract unique specializations
        const uniqueSpecializations = [...new Set(fetched.map(doc => doc.specialization))];
        setSpecializations(uniqueSpecializations);
      } catch (err) {
        // fallback to mock data if API fails
        setDoctors(mockDoctors);
        setSpecializations([...new Set(mockDoctors.map(doc => doc.specialization))]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-xl text-gray-600">Loading doctors...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Experts</h1>
        <p className="text-xl text-gray-600 mb-6">Meet our board-certified physicians and specialists</p>
        
        {/* Specialization Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedSpec('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedSpec === '' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Specialties
          </button>
          {specializations.slice(0, 5).map((spec, index) => (
            <button
              key={index}
              onClick={() => setSelectedSpec(spec)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedSpec === spec ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {((doctors.length ? doctors : mockDoctors).filter(d => !selectedSpec || d.specialization === selectedSpec)).map(doctor => (
          <div key={doctor._id || doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Doctor Image */}
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img
                  src={doctor.profileImage}
                  alt={doctor.fullName}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-teal-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Available
                </div>
              </div>
            
            {/* Doctor Info */}
              <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Dr. {doctor.fullName}
              </h3>
              <p className="text-blue-600 text-center font-medium mb-2">
                {doctor.specialization}
              </p>
              <p className="text-gray-600 text-center text-sm mb-3">
                {doctor.department}
              </p>

              <p className="text-gray-600 text-sm text-center mb-4">{doctor.bio}</p>
              
              {/* Doctor Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <FaGraduationCap className="mr-2 text-blue-500" />
                  <span>{doctor.education?.degree || 'MD'}</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <FaAward className="mr-2 text-yellow-500" />
                  <span>{doctor.yearsOfExperience}+ years experience</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  <span>{doctor.licenseNumber}</span>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="flex justify-center space-x-3 mb-4">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                  <FaPhone className="text-sm" />
                </button>
                <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
                  <FaEnvelope className="text-sm" />
                </button>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/appointment?doctorId=${doctor._id || doctor.id}`)}
                  className="flex-1 btn-primary"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => navigate(`/doctors/${doctor._id || doctor.id}`)}
                  className="flex-1 btn-secondary"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {doctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-xl">No doctors available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Doctors;