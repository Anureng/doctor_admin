import React from 'react'
import SidePanel from "../component/SidePanel"
import { FaUserInjured } from 'react-icons/fa';
import { BsCalendar2DateFill } from "react-icons/bs";
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import { LuStethoscope } from "react-icons/lu";
import { FaCoins } from "react-icons/fa6";
import BookingAppointmentTable from '../component/BookingAppointmentTable';
import DoctorListTable from '../component/DoctorListTable';



function DashboardMain() {
  return (
    <>
      <div className='bg-[#0075691A] min-h-screen flex flex-col'>
        <NavBar />
        <section className='flex flex-row  pb-10 gap-12 pt-10 w-[90%] mx-auto'>
          <div className='md:w-[35%] lg:w-[30%] hidden md:inline-flex'>
            <SidePanel />
          </div>
          <div className='lg:w-[70%]  w-full flex flex-col gap-20 '>


            <div className='grid grid-cols-1 md:grid-cols-2 justify-between   md:gap-10  w-full lg:w-[85%] '>
              <div className='bg-[#CE70FA] shadow-md shadow-white lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
                <div className='flex gap-5 p-1 px-auto justify-between'>
                  <p><BsCalendar2DateFill className='  shadow-md shadow-gray-500 bg-white rounded-lg text-6xl text-[#CE70FA] p-2' /></p>
                  <p className=' text-white  font-bold text-[37px]'>213</p>
                </div>
                <p className='lg:text-[25px] text-xl  pt-5 leading-6 font-bold text-white  text-start'>Total Appointments</p>
              </div>
              <div className='bg-[#FA7070] shadow-md shadow-white lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
                <div className='flex gap-5 p-1 px-auto justify-between'>
                  <p><FaUserInjured className='  shadow-md shadow-gray-500 bg-white rounded-lg text-6xl text-[#FA7070] p-2' /></p>
                  <p className=' text-white  font-bold text-[37px]'>1350</p>
                </div>
                <p className='lg:text-[25px] text-xl  pt-5 leading-6 font-bold text-white  text-start'>Total Patient</p>
              </div>
              <div className='bg-[#FADC70] shadow-md shadow-white lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
                <div className='flex gap-5 p-1 px-auto justify-between'>
                  <p><LuStethoscope className='  shadow-md shadow-gray-500 bg-white rounded-lg text-6xl text-[#FADC70] p-2' /></p>
                  <p className=' text-white  font-bold text-[37px]'>28</p>
                </div>
                <p className='lg:text-[25px] text-xl  pt-5 leading-6 font-bold text-white  text-start'>Total Doctor</p>
              </div>
              <div className='bg-[#70A7FA] shadow-md shadow-white lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
                <div className='flex gap-5 p-1 px-auto justify-between'>
                  <p><FaCoins className='  shadow-md shadow-gray-500 bg-white rounded-lg text-6xl text-[#70A7FA] p-2' /></p>
                  <p className=' text-white  font-bold text-[37px]'>₹13</p>
                </div>
                <p className='lg:text-[25px] text-xl  pt-5 leading-6 font-bold text-white  text-start'>Hospital Earnings</p>
              </div>
            </div>


            <div className='flex lg:flex-row flex-col gap-2 w-full' >
              <BookingAppointmentTable className=" w-[60%] "/>
              <DoctorListTable className=" w-[40%]"/>
              </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default DashboardMain