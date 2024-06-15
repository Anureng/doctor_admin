import React from 'react'
import SidePanel from "../component/SidePanel"
import { FaUserInjured } from 'react-icons/fa';
import { BsCalendar2DateFill } from "react-icons/bs";
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

function DashboardMain() {
  return (
    <>
    <NavBar/>
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
        <section className='flex flex-row  pb-10 gap-12 pt-10 w-[80%] mx-auto'>
        <div className='md:w-[35%] lg:w-[30%] hidden md:inline-flex'>
          <SidePanel />
        </div>
        <div className='lg:w-[60%] w-full flex flex-col gap-20'>
          <div className='flex flex-col md:flex-row justify-between  gap-3 w-full'>
            <div className='bg-[#FA7070] lg:p-5 p-3 md:p-1 rounded-lg'>
              <div className='flex gap-5'>
                <p><FaUserInjured className=' bg-white rounded-lg text-6xl text-[#FA7070] p-2' /></p>
                <div className='lg:text-[32px] text-xl leading-7 font-bold text-white flex flex-col text-start' >  <p >Total</p>
                  <p> Appointments</p>
                </div>
              </div>
              <div className='flex gap-10 leading-7 pt-5 font-bold text-white text-start'>
                <p className='text-xl'>5% higher than last week</p>
                <p className=' text-[32px]'>20</p>
              </div>
            </div>

            <div className='bg-[#A1C398] lg:p-5 p-3 md:p-1   mt-10 md:mt-0 rounded-lg'>
              <div className='flex gap-5'>
                <p><BsCalendar2DateFill className='  bg-white rounded-lg text-6xl text-[#A1C398] p-2' /></p>
                <div className='lg:text-[32px] text-xl  leading-7 font-bold text-white flex flex-col text-start' >  <p>Completed </p>
                  <p> Appointments</p>
                </div>
              </div>
              <div className='flex gap-10 leading-7 pt-5 font-bold text-white text-start'>
                <p className='text-xl'>5% higher than last week</p>
                <p className=' text-[32px]'>20</p>
              </div>
            </div>
          </div>
          <div >hello</div>
        </div>
      </section>

    </div>
    <Footer/>
    </>
  )
}

export default DashboardMain