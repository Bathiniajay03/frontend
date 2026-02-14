import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">About Ajay Hospital</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Since three decades, Ajay Hospital has been providing quality healthcare for the people in their diverse medical needs. 
            People trust us because of the strong relationships we've built with them over the years.
          </p>
          
          <p className="text-gray-700 mb-6">
            Under astute leadership and strong management, Ajay Hospital has evolved as a centre of excellence in medicine, 
            providing the highest quality standards of medical treatment to all sections of the society. Our work has always been guided by the 
            needs of patients and delivered by our perfectly combined revolutionary technology, best medical expertise, and advanced procedures.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To provide compassionate, high-quality healthcare services that meet the diverse needs of our community, 
            while maintaining the highest standards of medical excellence and patient safety.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            To be the leading healthcare provider in the region, recognized for our innovative approaches, 
            exceptional patient care, and commitment to advancing medical knowledge and practice.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-700">Years of Excellence</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700">Expert Doctors</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
              <div className="text-gray-700">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;