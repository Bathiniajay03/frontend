import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctorService from '../services/doctorService';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await doctorService.getDoctorById(id);
        setDoctor(res.data || res);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load doctor');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <div className="text-center py-12">Loading doctor...</div>;
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>;
  if (!doctor) return <div className="text-center py-12">Doctor not found.</div>;

  return (
    <div className="max-w-4xl mx-auto card">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={doctor.profileImage}
          alt={doctor.fullName}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">Dr. {doctor.fullName}</h2>
          <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
          <p className="text-gray-600 mb-4">{doctor.department}</p>

          <p className="text-gray-700 mb-4">{doctor.bio}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <strong>Education:</strong>
              <div>{doctor.education?.degree || '—'}</div>
              <div className="text-sm text-gray-600">{doctor.education?.university || ''} {doctor.education?.year ? `• ${doctor.education.year}` : ''}</div>
            </div>
            <div>
              <strong>Experience:</strong>
              <div>{doctor.yearsOfExperience || '—'} years</div>
              <div className="text-sm text-gray-600">Fees: {doctor.fees ? `₹${doctor.fees}` : '—'}</div>
            </div>
            <div>
              <strong>License:</strong>
              <div>{doctor.licenseNumber || '—'}</div>
            </div>
            <div>
              <strong>Contact:</strong>
              <div className="text-sm text-gray-600">{doctor.phone || '—'}</div>
              <div className="text-sm text-gray-600">{doctor.email || '—'}</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(`/appointment?doctorId=${doctor._id || doctor.id}`)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Book Appointment
            </button>
            <button
              onClick={() => navigate('/doctors')}
              className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md"
            >
              Back to Doctors
            </button>
          </div>

          {doctor.bio && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-gray-700">{doctor.bio}</p>
            </div>
          )}

          {doctor.researchInterests && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Research Interests</h3>
              <p className="text-gray-700">{doctor.researchInterests}</p>
            </div>
          )}

          {doctor.publications && doctor.publications.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Publications</h3>
              <ul className="list-disc list-inside text-gray-700">
                {doctor.publications.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
