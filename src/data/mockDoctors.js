const mockDoctors = [
  {
    _id: 'd1',
    fullName: 'Aisha Khan',
    firstName: 'Aisha',
    lastName: 'Khan',
    email: 'aisha.khan@ajayhospital.com',
    phone: '90011 22334',
    specialization: 'Cardiology',
    department: 'Cardiology',
    licenseNumber: 'LIC-CR-001',
    education: { degree: 'MD', university: 'AIIMS', year: 2009 },
    yearsOfExperience: 15,
    bio: 'Dr. Aisha Khan is a leading cardiologist specializing in interventional cardiology and heart failure management.',
    fees: 800,
    profileImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80'
  },
  {
    _id: 'd2',
    fullName: 'Rajiv Menon',
    firstName: 'Rajiv',
    lastName: 'Menon',
    email: 'rajiv.menon@ajayhospital.com',
    phone: '90022 33445',
    specialization: 'Neurology',
    department: 'Neurology',
    licenseNumber: 'LIC-NE-002',
    education: { degree: 'DM', university: 'CMC Vellore', year: 2010 },
    yearsOfExperience: 12,
    bio: 'Neurology expert with a focus on stroke care and neurorehabilitation.',
    fees: 900,
    profileImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
  },
  {
    _id: 'd3',
    fullName: 'Dr. Meera Patel',
    firstName: 'Meera',
    lastName: 'Patel',
    email: 'meera.patel@ajayhospital.com',
    phone: '90033 44556',
    specialization: 'Orthopedics',
    department: 'Orthopedics',
    licenseNumber: 'LIC-OR-003',
    education: { degree: 'MS', university: 'KIMS', year: 2008 },
    yearsOfExperience: 18,
    bio: 'Specialist in joint replacement and sports injuries with excellent surgical outcomes.',
    fees: 700,
    profileImage: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80'
  }
];

export default mockDoctors;
