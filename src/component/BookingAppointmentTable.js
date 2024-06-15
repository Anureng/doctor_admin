// BookingAppointmentTable.js
import React from 'react';

const data = [
  {
    id: 1,
    profilePic: 'https://via.placeholder.com/40', // Replace with actual image URLs
    patientName: 'Ralph Edwards',
    assignedDoctor: 'Dr Claire',
    date: '2024/06/20',
    diseases: 'Fever',
  },
  {
    id: 2,
    profilePic: 'https://via.placeholder.com/40',
    patientName: 'Esther Howard',
    assignedDoctor: 'Dr. Johnson',
    date: '2024/06/21',
    diseases: 'Cavity',
  },
  {
    id: 3,
    profilePic: 'https://via.placeholder.com/40',
    patientName: 'Esther Howard',
    assignedDoctor: 'Dr. Johnson',
    date: '2024/06/21',
    diseases: 'Cavity',
  },
  {
    id: 4,
    profilePic: 'https://via.placeholder.com/40',
    patientName: 'Esther Howard',
    assignedDoctor: 'Dr. Johnson',
    date: '2024/06/21',
    diseases: 'Cavity',
  },
  {
    id: 5,
    profilePic: 'https://via.placeholder.com/40',
    patientName: 'Esther Howard',
    assignedDoctor: 'Dr. Johnson',
    date: '2024/06/21',
    diseases: 'Cavity',
  },
  // Add more data as needed
];

const BookingAppointmentTable = () => {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl text-start bg-white rounded-t-xl py-3 px-4 font-bold ">Booking Appointment</h1>
      <table className="min-w-full rounded-xl bg-white ">
        <thead>
          <tr className='font-bold bg-[#F7F7F7]  rounded-xl text-black'>
            <th className="px-4 py-2">Profile</th>
            <th className="px-4 py-2">Patient Name</th>
            <th className="px-4 py-2">Assigned Doctor</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Diseases</th>
          </tr>
        </thead>
        <tbody className='rounded-lg'>
          {data.map((appointment) => (
            <tr key={appointment.id} className="text-center border-t ">
              <td className="px-4 py-2">
                <img
                  src={appointment.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td className="px-4 py-2">{appointment.patientName}</td>
              <td className="px-4 py-2">{appointment.assignedDoctor}</td>
              <td className="px-4 py-2">{appointment.date}</td>
              <td className="px-4 py-2">{appointment.diseases}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingAppointmentTable;

