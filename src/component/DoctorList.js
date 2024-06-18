


// import React, { useState } from 'react';
// import Footer from '../component/Footer';
// import SidePanel from '../component/SidePanel';
// import Navbar from '../component/Navbar';
// import { CiSearch } from "react-icons/ci";

// const DoctorList = () => {
//   const users = [
//     {
//       id: 1,
//       name: "Dr. Smith",
//       gender: "Male",
//       dateJoined: "2020-01-15",
//       degree: "Dentist",
//       schedule: "4 Appointments",
//       status: "Available",
//       contact: "123-456-7890",
//       picture: "https://via.placeholder.com/50"
//     },
//     {
//       id: 2,
//       name: "Dr. Jane Doe",
//       gender: "Female",
//       dateJoined: "2018-05-23",
//       degree: "Orthopedic",
//       schedule: "5 Appointments",
//       status: "Available",
//       contact: "234-567-8901",
//       picture: "https://via.placeholder.com/50"
//     },
//     {
//       id: 3,
//       name: "Dr. John Roe",
//       gender: "Male",
//       dateJoined: "2019-07-11",
//       degree: "Cardiologist",
//       schedule: "3 Appointments",
//       status: "Not Available",
//       contact: "345-678-9012",
//       picture: "https://via.placeholder.com/50"
//     },
//     {
//       id: 4,
//       name: "Dr. Emily Clark",
//       gender: "Female",
//       dateJoined: "2021-03-14",
//       degree: "Pediatrician",
//       schedule: "4 Appointments",
//       status: "Available",
//       contact: "456-789-0123",
//       picture: "https://via.placeholder.com/50"
//     },
//   ];

//   const [search, setSearch] = useState("");

//   const filterByData = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className='bg-[#0075691A] min-h-screen flex flex-col'>
//       <Navbar />
//       <section className='flex flex-row flex-grow w-full p-4 justify-evenly mx-auto'>
//         <div className='hidden md:inline-flex'>
//           <SidePanel />
//         </div>

//         <div className='lg:w-3/5 w-full'>
//           <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg'>
//             <div className='flex flex-col w-full mb-4'>
//               <div className='flex items-center flex-col md:flex-row justify-between'>
//                 <h1 className='text-[24px] md:text-[28px] font-semibold'>Doctors</h1>
//                 <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
//                   Dashboard {">"} Doctors <span className='text-[#007569]'>{'>'}Doctors List </span>
//                 </div>
//               </div>

//               <div className='flex items-center rounded-xl mb-10 p-2 border bg-[#F7F7F7] space-x-2 w-[80%] mx-auto'>
//                 <CiSearch />
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder='Search Here'
//                   className="bg-transparent focus:outline-none w-full"
//                 />
//               </div>

//               <div className="overflow-x-auto">
//                 <table className='min-w-full bg-white'>
//                   <thead>
//                     <tr className='bg-gray-100 '>
//                       <th className='py-2'>#</th>
//                       <th className='py-2'>Name</th>
//                       <th className='py-2'>Gender</th>
//                       <th className='py-2'>Date Joined</th>
//                       <th className='py-2'>Specialist</th>
//                       <th className='py-2'>Schedule</th>
//                       <th className='py-2'>Status</th>
//                       <th className='py-2'>Contact</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filterByData.map(user => (
//                       <tr key={user.id} className='text-center py-2 border-b'>
//                         <td className='py-2'>
//                           <img src={user.picture} alt={user.name} className='rounded-full w-10 h-10 mx-auto' />
//                         </td>
//                         <td className='py-2' >{user.name}</td>
//                         <td className={`p-0 ${user.gender === "Male" ? "bg-[#ADD2FF] rounded-xl text-[#1C6DD0] " : " bg-pink-400 rounded-xl text-pink-800"}` }>{user.gender}</td>
//                         <td className='py-2'>{user.dateJoined}</td>
//                         <td className='py-2'>{user.degree}</td>
//                         <td className='py-2'>{user.schedule}</td>
//                         <td className={`py-2  rounded-xl ${user.status === "Available" ? "bg-[#9CFFB2] text-[#007112] " : "bg-red-200"}`}>{user.status}</td>
//                         <td className='py-2'>{user.contact}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default DoctorList;


import React, { useState } from 'react';
import Footer from '../component/Footer';
import SidePanel from '../component/SidePanel';
import Navbar from '../component/Navbar';
import { CiSearch } from "react-icons/ci";

const DoctorList = () => {
  const users = [
    {
      id: 1,
      name: "Dr. Smith",
      gender: "Male",
      dateJoined: "2020-01-15",
      degree: "Dentist",
      schedule: "4 Appointments",
      status: "Available",
      contact: "123-456-7890",
      picture: "https://via.placeholder.com/50"
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      gender: "Female",
      dateJoined: "2018-05-23",
      degree: "Orthopedic",
      schedule: "5 Appointments",
      status: "Available",
      contact: "234-567-8901",
      picture: "https://via.placeholder.com/50"
    },
    {
      id: 3,
      name: "Dr. John Roe",
      gender: "Male",
      dateJoined: "2019-07-11",
      degree: "Cardiologist",
      schedule: "3 Appointments",
      status: "Not Available",
      contact: "345-678-9012",
      picture: "https://via.placeholder.com/50"
    },
    {
      id: 4,
      name: "Dr. Emily Clark",
      gender: "Female",
      dateJoined: "2021-03-14",
      degree: "Pediatrician",
      schedule: "4 Appointments",
      status: "Available",
      contact: "456-789-0123",
      picture: "https://via.placeholder.com/50"
    },
  ];

  const [search, setSearch] = useState("");

  const filterByData = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
      <Navbar />
      <section className='flex flex-row flex-grow w-full p-4 justify-evenly mx-auto'>
        <div className='hidden md:inline-flex'>
          <SidePanel />
        </div>

        <div className='lg:w-3/5 w-full'>
          <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg'>
            <div className='flex flex-col w-full mb-4'>
              <div className='flex items-center flex-col md:flex-row justify-between'>
                <h1 className='text-[24px] md:text-[28px] font-semibold'>Doctors</h1>
                <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
                  Dashboard {">"} Doctors <span className='text-[#007569]'>{'>'}Doctors List </span>
                </div>
              </div>

              <div className='flex items-center rounded-xl mb-10 p-2 border bg-[#F7F7F7] space-x-2 w-[80%] mx-auto'>
                <CiSearch />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search Here'
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>

              <div className="overflow-x-auto">
                <table className='min-w-full bg-white'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='py-2'>#</th>
                      <th className='py-2'>Name</th>
                      <th className='py-2'>Gender</th>
                      <th className='py-2'>Date Joined</th>
                      <th className='py-2'>Specialist</th>
                      <th className='py-2'>Schedule</th>
                      <th className='py-2'>Status</th>
                      <th className='py-2'>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterByData.map(user => (
                      <tr key={user.id} className='text-center border-b'>
                        <td className='py-2'>
                          <img src={user.picture} alt={user.name} className='rounded-full w-10 h-10 mx-auto' />
                        </td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.name}</td>
                        <td className={`p-0  px-2 whitespace-nowrap ${user.gender === "Male" ? "bg-[#ADD2FF] rounded-xl text-[#1C6DD0]" : "bg-pink-400 rounded-xl text-pink-800"}`}>{user.gender}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.dateJoined}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.degree}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.schedule}</td>
                        <td className={`py-2 px-2 rounded-xl whitespace-nowrap ${user.status === "Available" ? "bg-[#9CFFB2] text-[#007112]" : "bg-red-200"}`}>{user.status}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DoctorList;
