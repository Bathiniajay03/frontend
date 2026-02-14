import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUserMd, FaHospital, FaPhone, FaAmbulance, FaStethoscope, FaHeartbeat, FaMicroscope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            24/7 Multispecialty Care at Ajay Hospital
          </p>
          <Link 
            to="/appointment" 
            className="inline-block bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Medical Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeartbeat className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Cardiology</h3>
            <p className="text-gray-600 mb-3">Advanced heart care with cutting-edge technology and expert cardiologists.</p>
            <div className="text-sm text-red-600 font-medium">24/7 Cardiac Care Unit</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStethoscope className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Neurology</h3>
            <p className="text-gray-600 mb-3">Comprehensive neurological care for brain and nervous system disorders.</p>
            <div className="text-sm text-blue-600 font-medium">Neuroscience Center</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUserMd className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Orthopedics</h3>
            <p className="text-gray-600 mb-3">Expert care for bone, joint, and muscle conditions with modern treatment.</p>
            <div className="text-sm text-green-600 font-medium">Joint Replacement Center</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMicroscope className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Critical Care</h3>
            <p className="text-gray-600 mb-3">24/7 intensive care unit with advanced life support systems.</p>
            <div className="text-sm text-purple-600 font-medium">ICU & Emergency</div>
          </div>
        </div>

        {/* Additional Departments */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
            <FaAmbulance className="text-3xl text-red-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Emergency</h4>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
            <FaHospital className="text-3xl text-blue-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Surgery</h4>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
            <FaUserMd className="text-3xl text-green-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Pediatrics</h4>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
            <FaCalendarCheck className="text-3xl text-purple-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Radiology</h4>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Ajay Hospital</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Since three decades, Ajay Hospital has been providing quality healthcare for the people in their diverse medical needs. 
                People trust us because of the strong relationships we've built with them over the years.
              </p>
              <p className="text-gray-700 mb-6">
                Under astute leadership and strong management, Ajay Hospital has evolved as a centre of excellence in medicine, 
                providing the highest quality standards of medical treatment to all sections of the society.
              </p>
              <Link 
                to="/about" 
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Modern Hospital" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical Equipment" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience world-class healthcare with our expert medical team and state-of-the-art facilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/appointment" className="btn-primary">
            Book Appointment
          </Link>
          <Link to="/register-patient" className="btn-secondary">
            Register as Patient
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;