import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import SettingPersonal from '../component/SettingPersonal'
import SidePanel from '../component/SidePanel'

function PersonalDetails() {
  return (
     <div className='bg-[#0075691A] min-h-screen  flex flex-col'>
    <Navbar/>
  <section className='flex flex-row flex-grow w-full p-4 border  justify-evenly mx-auto'>
    <div className=' hidden md:inline-flex'>
      <SidePanel />
    </div>
    <div className='lg:w-3/5 w-full'>
    <SettingPersonal/>
    </div>
  </section>

  <Footer />
</div>
  )
}

export default PersonalDetails