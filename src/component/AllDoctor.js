import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const AllDoctor = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchSpecialist, setSearchSpecialist] = useState('');

  useEffect(() => {
    let filtered = data;

    if (searchDoctor) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchDoctor.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter(doctor =>
        doctor.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchSpecialist) {
      filtered = filtered.filter(doctor =>
        doctor.degree.toLowerCase().includes(searchSpecialist.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchDoctor, searchLocation, searchGender, searchSpecialist, data]);


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
        setData(data)
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


  return (
    <div>
      <input
        type='text'
        className='border focus:outline-none p-1 rounded-lg w-2/5'
        placeholder='Search Doctor'
        value={searchDoctor}
        onChange={e => setSearchDoctor(e.target.value)}
      />
      <div className='flex justify-evenly p-4 lg:p-0 mt-10 mb-10 flex-col lg:flex-row space-y-5 md:space-y-0'>
        <div className='lg:w-full space-y-6 overflow-hidden overflow-y-scroll h-[600px] no-scrollbar '>
          {filteredData.map((el) => (
            <div key={el.id} className='flex bg-white items-center justify-between border p-4 rounded-lg'>
              <div className='flex items-center'>
                <div>
                  <img src='/login.png' alt='Loading...' className='md:w-72 md:h-72' />
                </div>
                <div className=' mx-auto text-start  py-3 justify-between flex flex-col bg-white'>
                  <div className=' textxl md:text-2xl text-gray-600 font-bold'>{el.name}</div>
                  <div className='text-lg text-green-700'><MdOutlineVerified /></div>
                  <div >{el.service}</div>
                  <div className="text-[#007569]  text-sm font-bold">{el.specialty}</div>
                  <p className="text-yellow-500 text-xl ">★★★★★</p>
                  <div className=' flex gap-2 '>
                    <FaRegHeart className='border-[0.5px] border-gray-600 rounded-sm p-1 text-xl' /><span> Add to favourites</span>
                  </div>
                </div>
              </div>
              <div className='space-y-2 mx-2'>

                <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' /> {el.availableDays}</div>
                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{el.feedbackCount} Feedbacks</div>
                <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now</div>
                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{el.location}</div>



                <Link to={`/doctor/profile/${el.id}`}>
                  <button className='border border-[#007569] text-sm md:text-md text-[#007569] px-1 md:py-2 py-1 rounded-md'>View Profile</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctor;
