import React from 'react';
import { Link } from 'react-router-dom';
import { FaAmbulance, FaSyringe, FaMicroscope, FaPills, FaWheelchair, FaHeartbeat, FaBrain, FaBone, FaBaby, FaXRay } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Emergency & Trauma Care",
      description: "24/7 emergency services with immediate medical attention, trauma care, and critical care support",
      icon: <FaAmbulance className="text-4xl text-red-500" />,
      department: "Emergency Department",
      features: ["24/7 Availability", "Trauma Care", "Critical Care"]
    },
    {
      title: "Advanced Surgery",
      description: "Minimally invasive and robotic surgical procedures with state-of-the-art operating theaters",
      icon: <FaSyringe className="text-4xl text-blue-500" />,
      department: "Surgical Department",
      features: ["Robotic Surgery", "Minimally Invasive", "Post-Op Care"]
    },
    {
      title: "Diagnostic Imaging",
      description: "Comprehensive diagnostic services including MRI, CT scans, ultrasound, and digital X-ray",
      icon: <FaXRay className="text-4xl text-purple-500" />,
      department: "Radiology Department",
      features: ["MRI & CT Scans", "Digital X-Ray", "Ultrasound"]
    },
    {
      title: "Laboratory Medicine",
      description: "Complete pathology and laboratory testing services with rapid results",
      icon: <FaMicroscope className="text-4xl text-green-500" />,
      department: "Pathology Department",
      features: ["Blood Tests", "Biopsy Analysis", "Rapid Results"]
    },
    {
      title: "Pharmacy Services",
      description: "Full-service pharmacy with medication counseling and home delivery options",
      icon: <FaPills className="text-4xl text-orange-500" />,
      department: "Pharmacy Department",
      features: ["24/7 Service", "Home Delivery", "Medication Review"]
    },
    {
      title: "Rehabilitation Therapy",
      description: "Comprehensive physical, occupational, and speech therapy services",
      icon: <FaWheelchair className="text-4xl text-teal-500" />,
      department: "Rehabilitation Center",
      features: ["Physical Therapy", "Occupational Therapy", "Speech Therapy"]
    },
    {
      title: "Cardiac Care",
      description: "Advanced cardiac diagnostics, interventions, and preventive cardiology services",
      icon: <FaHeartbeat className="text-4xl text-red-600" />,
      department: "Cardiology Department",
      features: ["Cardiac Cath Lab", "Echocardiography", "Preventive Care"]
    },
    {
      title: "Neurological Services",
      description: "Comprehensive neurological care including stroke treatment and neurosurgery",
      icon: <FaBrain className="text-4xl text-indigo-500" />,
      department: "Neurology Department",
      features: ["Stroke Care", "Neurosurgery", "EEG Services"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">Comprehensive healthcare services for all your medical needs</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-center">{service.description}</p>
            <div className="text-sm text-blue-600 font-medium text-center mb-3">{service.department}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {service.features.map((feature, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/appointment" className="btn-primary inline-block">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Services;