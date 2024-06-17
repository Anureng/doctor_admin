import React from 'react'
import Footer from '../component/Footer';
import SidePanel from '../component/SidePanel';
import AllUser from '../component/AllUser';
import Navbar from '../component/Navbar';
import PatientListData from './PatientListData';
const PatientList = () => {
  return (
    <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
    <Navbar/>
  <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
    <div className=' hidden md:inline-flex'>
      <SidePanel />
    </div>
    <div className='lg:w-3/5 w-full'>
      <PatientListData/>
    </div>
  </section>

  <Footer />
</div>
  )
}

export default PatientList