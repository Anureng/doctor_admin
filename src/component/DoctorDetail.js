import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Footer from './Footer';
import SidePanel from './SidePanel';
import Navbar from './Navbar';


function DoctorDetail() {
    const { id } = useParams();
    const [doctors, setdoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);


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
            setdoctors(data)
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
    

    // useEffect(() => {
    //     const doctor = doctors.find(doc => doc._id === id);
    //     setSelectedDoctor(doctor);
    // }, [id]);



    // if (!selectedDoctor) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>



            <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
                <Navbar />
                <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
                    <div className=' hidden md:inline-flex'>
                        <SidePanel />
                    </div>
                    {doctors.filter((e)=>(
                      e.type=="doctor"
                    )).filter((e)=>(
                        e._id==id
                      )).map(selectedDoctor => (
                    <div className='lg:w-3/5 flex flex-col w-full'>

                        <section className='lg:flex lg:flex-row  lg:mx-auto md:mx-10 grid grid-cols-1 bg-white p-4 gap-2 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'>
                            <div className='lg:w-[25%]  p-2 mx-auto bg-white'>
                                <img className='h-[220px] w-[220px]  rounded-md overflow-hidden  bg-[#017A884D]' src={selectedDoctor.profilepic} alt='doctor' />
                            </div>

                            <div className='md:w-[20%] mx-auto text-start  py-3 justify-between flex flex-col bg-white'>
                                <div className='text-2xl text-gray-600 font-bold'>{selectedDoctor.firstname} {selectedDoctor.lastname}</div>
                                <div className='text-lg text-green-700'><MdOutlineVerified /></div>
                                <div className="text-[#007569]  text-sm font-bold">{selectedDoctor.services.specialities}</div>
                                <p className="text-yellow-500 text-xl ">★★★★★</p>
                                <div className=' flex gap-2 '>
                                    <span>{selectedDoctor.language}</span>
                                </div>
                            </div>

                            <div className='md:w-[30%] mx-auto flex flex-col pb-4 justify-between bg-white'>
                                <div className='flex gap-3 mx-auto flex-col'>
                                    <div className='flex gap-2'>
                                        <FaUserAlt className='border-[0.5px]  text-[#A300EF] border-[#00000040] rounded-sm p-1 text-2xl ' />
                                        <span className='text-xl  text-gray-700'>{selectedDoctor.email}</span>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <BiSolidShoppingBag className='border-[0.5px]  text-[#00A31A] border-[#00000040] rounded-sm  text-2xl ' />
                                        <span className='text-xl  text-gray-700'>{selectedDoctor.exp.name}</span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6]  rounded-l-lg border-[#BABABA]"> Clinic
                                        <p className=' px-3'>{selectedDoctor.clinic}</p>
                                    </button>
                                    <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6]  rounded-r-lg border-[#BABABA]">Location
                                        <p className=' px-3'>{selectedDoctor.location}</p>
                                    </button>
                                </div>
                            </div>

                            <div className='md:w-[25%] mx-auto flex  gap-4 flex-col bg-white'>
                                <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' /> {selectedDoctor.fees}</div>
                                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{selectedDoctor.Phoneno}</div>
                                <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now</div>
                                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{selectedDoctor.location}</div>

                            </div>

                        </section>

                        <section className=' bg-white rounded-lg mt-3 border border-gray-400 '>
                        <div className="p-4 text-start  rounded-lg">
                            <h2 className="text-xl  pb-10 font-bold">About {selectedDoctor.firstname} {selectedDoctor.lastname}</h2>
                            <p>{selectedDoctor.description}</p>
                        </div>
                        
                        </section>
                    </div>
                    ))}
                </section>
                <Footer />
            </div>


        </>
    );
}

export default DoctorDetail;
