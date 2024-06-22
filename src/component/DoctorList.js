import React, { useState ,useEffect} from 'react';
import Footer from '../component/Footer';
import SidePanel from '../component/SidePanel';
import Navbar from '../component/Navbar';
import { CiSearch } from "react-icons/ci";

const DoctorList = () => {
  const [users, setusers] = useState([]);

  const [search, setSearch] = useState("");

  const filterByData = users.filter(user =>
    user.firstname.toLowerCase().includes(search.toLowerCase())
  );


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
                      <th className='py-2'>Location</th>
                      <th className='py-2'>Specialist</th>
                      <th className='py-2'>Fee</th>
                      <th className='py-2'>Language</th>
                      <th className='py-2'>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterByData.filter((e)=>(
                      e.type=="doctor"
                    )).map(user => (
                      <tr key={user.id} className='text-center border-b'>
                        <td className='py-2'>
                          <img src={user.profilepic} alt={user.name} className='rounded-full w-10 h-10 mx-auto' />
                        </td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.firstname}{user.lastname}</td>
                        <td className={`p-0  px-2 whitespace-nowrap ${user.gender === "Male" ? "bg-[#ADD2FF] rounded-xl text-[#1C6DD0]" : "bg-pink-400 rounded-xl text-pink-800"}`}>{user.gender}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.location}</td>
                          <td className='py-2 px-2 whitespace-nowrap'>{user.services.specialities}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.fees}</td>
                        <td className={`py-2 px-2 rounded-xl whitespace-nowrap`}>{user.language}</td>
                        <td className='py-2 px-2 whitespace-nowrap'>{user.Phoneno}</td>
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
