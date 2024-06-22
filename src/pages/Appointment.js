import React from 'react'
import Footer from '../component/Footer';
import SidePanel from '../component/SidePanel';
import AllUser from '../component/BookingAppointmentTable';
import Navbar from '../component/Navbar';
const Appointment = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
      <Navbar/>
    <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
      <div className=' hidden md:inline-flex'>
        <SidePanel />
      </div>
      <div className='lg:w-3/5 w-full'>
        <AllUser/>
      </div>
    </section>

    <Footer />
  </div>
  )
}

export default Appointment