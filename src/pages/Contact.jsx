import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">#3-1-267, Christian Colony, Behind Dist. Govt. Hospital,<br/>
                  Near Nehru Statue, Karimnagar(505001), Telangana</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">8930 104 108, 9703 133 132</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">✉️</span>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@ajayhospital.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Working Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: 10:00 AM - 2:00 PM</p>
              <p className="font-medium text-red-600">Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;