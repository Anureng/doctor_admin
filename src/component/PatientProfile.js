import React from 'react'
import Footer from './Footer';
import SidePanel from './SidePanel';
import Navbar from './Navbar';
import AllPatient from './AllPatient';

const PatientProfile = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
    <Navbar/>
  <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
    <div className=' hidden md:inline-flex'>
      <SidePanel />
    </div>
    <div className='lg:w-3/5 w-full'>
      <AllPatient/>
    </div>
  </section>

  <Footer />
</div>
  )
}

export default PatientProfile