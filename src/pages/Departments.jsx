import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaBone, FaBaby, FaUserMd, FaSyringe, FaMicroscope, FaTooth, FaEye, FaLungs, FaFemale, FaWheelchair } from 'react-icons/fa';

const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and preventive services for cardiovascular conditions",
      icon: <FaHeartbeat className="text-4xl text-red-500" />,
      head: "Dr. Sarah Johnson",
      doctors: 12,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Cardiac Catheterization", "Echocardiography", "Stress Testing", "Pacemaker Implantation"]
    },
    {
      name: "Neurology",
      description: "Advanced neurological care for brain, spinal cord, and nervous system disorders including stroke treatment",
      icon: <FaBrain className="text-4xl text-blue-500" />,
      head: "Dr. Michael Chen",
      doctors: 8,
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Stroke Care", "EEG", "MRI", "Neurosurgery Consultation"]
    },
    {
      name: "Orthopedics",
      description: "Expert care for musculoskeletal conditions including joint replacement, sports medicine, and trauma care",
      icon: <FaBone className="text-4xl text-green-500" />,
      head: "Dr. Robert Williams",
      doctors: 10,
      image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Joint Replacement", "Arthroscopy", "Sports Medicine", "Physical Therapy"]
    },
    {
      name: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with family-centered approach to healthcare",
      icon: <FaBaby className="text-4xl text-pink-500" />,
      head: "Dr. Emily Rodriguez",
      doctors: 15,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Well Child Visits", "Vaccinations", "Developmental Screening", "Pediatric Emergency"]
    },
    {
      name: "General Medicine",
      description: "Primary healthcare services for adults with comprehensive medical care and chronic disease management",
      icon: <FaUserMd className="text-4xl text-purple-500" />,
      head: "Dr. James Wilson",
      doctors: 20,
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      services: ["Preventive Care", "Chronic Disease Management", "Health Screening", "Second Opinions"]
    },
    {
      name: "Surgery",
      description: "Advanced surgical procedures with state-of-the-art operating rooms and post-operative care",
      icon: <FaSyringe className="text-4xl text-indigo-500" />,
      head: "Dr. Lisa Thompson",
      doctors: 18,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["General Surgery", "Minimally Invasive", "Robotic Surgery", "Post-Op Care"]
    },
    {
      name: "Radiology",
      description: "Diagnostic imaging services with advanced technology for accurate medical diagnosis and treatment planning",
      icon: <FaMicroscope className="text-4xl text-teal-500" />,
      head: "Dr. David Kim",
      doctors: 6,
      image: "https://images.unsplash.com/photo-1581093458413-6c8b1e0ae0b7?auto=format&fit=crop&w=800&q=80",
      services: ["MRI", "CT Scans", "X-Ray", "Ultrasound", "Mammography"]
    },
    {
      name: "Dentistry",
      description: "Comprehensive dental care including preventive, restorative, and cosmetic dentistry services",
      icon: <FaTooth className="text-4xl text-yellow-500" />,
      head: "Dr. Maria Garcia",
      doctors: 5,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      services: ["Dental Checkups", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hospital Departments</h1>
        <p className="text-xl text-gray-600">World-class medical care across all specialties</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Department Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={dept.image} 
                alt={dept.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Department Info */}
            <div className="p-6">
              <div className="flex justify-center mb-4">
                {dept.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {dept.name}
              </h3>
              
              <p className="text-gray-600 text-center mb-4 text-sm">
                {dept.description}
              </p>
              
              {/* Department Head */}
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800 font-medium">Department Head</p>
                <p className="text-sm text-gray-700">{dept.head}</p>
                <p className="text-xs text-gray-500">{dept.doctors} Specialist Doctors</p>
              </div>
              
              {/* Services */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-800 mb-2">Key Services:</h4>
                <div className="flex flex-wrap gap-1">
                  {dept.services.slice(0, 3).map((service, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link 
                  to="/appointment" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Book Appointment
                </Link>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Services Banner */}
      <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
        <div className="flex items-center justify-center mb-4">
          <FaWheelchair className="text-4xl mr-3" />
          <h2 className="text-3xl font-bold">24/7 Emergency Services</h2>
        </div>
        <p className="text-xl mb-6">Round-the-clock emergency care with specialized trauma team</p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Availability</div>
          </div>
          <div>
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm">Specialists</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5 min</div>
            <div className="text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;