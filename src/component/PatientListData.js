import React, { useState ,useEffect} from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const PatientListData = () => {
  const [users, setusers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setusers(data)
        console.log(data)
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
    
      const [search, setSearch] = useState("");
    
      const filterByData = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    
  return (
    <div className='bg-white w-full rounded-lg shadow-lg'>
    <div className='flex flex-col md:flex-row items-center justify-between p-4'>
      <p className='text-3xl mb-2 md:mb-0'>Appointments</p>
      <div className='flex items-center text-sm md:text-base'>
        <p>Dashboard</p>
        <FaAngleRight className='text-blue-600 mx-2' />
        <p>Appointments</p>
      </div>
    </div>

    <div className='flex items-center justify-center mb-4'>
      <div className='flex items-center rounded-xl p-2 border bg-[#F7F7F7] space-x-2 w-full max-w-md'>
        <CiSearch />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search By Patient Name'
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className='w-full'>
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Profile</th>
            <th className="p-2">Name</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Diseases</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Status</th>
            <th className="p-2">Blood</th>
          </tr>
        </thead>
        <tbody>
          {filterByData.map((user, index) => (
            <tr key={index} className="border-b">
              <td className='flex items-center justify-center p-2'>
                <img src={user.profile} className='w-10 h-10 rounded-full' alt='Profile' />
              </td>
              <td className='p-2'>{user.name}</td>
              <td className='p-2'>{user.gender}</td>
              <td className='p-2'>{user.diseases}</td>
              <td className='p-2'>{user.email}</td>
              <td className='p-2'>{user.phone}</td>
              <td className='p-2'>{user.Status}</td>
              <td className='p-2'>{user.Blood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default PatientListData
