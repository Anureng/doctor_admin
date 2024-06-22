// BookingAppointmentTable.js
import React from 'react';
import { useEffect,useState } from 'react';



const BookingAppointmentTable = () => {
const [data,setdata] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/getallbookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setdata(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {

    fetchData();
  }, []);


  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl text-start bg-white rounded-t-xl py-3 px-4 font-bold ">Booking Appointment</h1>
      <table className="min-w-full rounded-xl bg-white ">
        <thead>
          <tr className='font-bold bg-[#F7F7F7]  rounded-xl text-black'>
            <th className="px-4 py-2">Patient Name</th>
            <th className="px-4 py-2">Assigned Doctor</th>
            <th className="px-4 py-2">Fee</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Diseases</th>
          </tr>
        </thead>
        <tbody className='rounded-lg'>
          {data.map((appointment) => (
            <tr key={appointment.id} className="text-center border-t ">
              {/* <td className="px-4 py-2">
                <img
                  src={appointment.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td> */}
              <td className="px-4 py-2">{appointment.name}</td>
              <td className="px-4 py-2">{appointment.doct}</td>
              <td className="px-4 py-2">{appointment.fee}</td>
              <td className="px-4 py-2">{appointment.date}</td>
              <td className="px-4 py-2">{appointment.Currentproblem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingAppointmentTable;

