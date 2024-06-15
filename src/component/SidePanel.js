import React, { useState, useCallback } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiSolidFirstAid } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoTriangleRight } from "react-icons/go";

const SidePanel = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const shouldOpenSection = useCallback((basePath) => {
        return location.pathname.startsWith(basePath);
    }, [location.pathname]);

    const [isDoctorOpen, setIsDoctorOpen] = useState(shouldOpenSection('/doctor'));
    const [isPatientOpen, setIsPatientOpen] = useState(shouldOpenSection('/patient'));

    const handleNavigation = (path) => {
        navigate(path);
    };

    const getActiveStyle = (path) => {
        return location.pathname === path ? 'bg-[#0075691A] rounded-md' : 'bg-white';
    };

    const getActiveStyleSub = (path) => {
        return location.pathname === path ? 'bg-[#0075691A] text-[#007569] rounded-md' : 'bg-white';
    };

    return (
        <div className='flex flex-col px-10 shadow-lg pb-10 shadow-gray-700 rounded-xl bg-white gap-3'>
            <div className='pt-5 mb-5 pb-3 border-b-[2px] border-black px-10 mx-auto'>
                <img className='h-[200px] w-[200px] mx-auto overflow-hidden rounded-full bg-[#017A884D]' alt='doctor' src='/doctor1.png' />
                <p className='font-bold mt-5 text-2xl text-center'>Dr Zeena</p>
                <p className='text-black mt-2 text-center font-bold text-lg'>ADMIN</p>
            </div>
            <div className='text-[#3A3A3A] flex flex-col gap-3 leading-[39px] mx-auto text-2xl font-semibold text-start'>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/dashboard')}`} onClick={() => handleNavigation('/dashboard')}>
                    <RiDashboardFill />Dashboard
                </div>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/appointment')}`} onClick={() => handleNavigation('/appointment')}>
                    <FaCalendar />Appointment
                </div>
                <div className='flex flex-col'>
                    <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/doctor')}`} onClick={() => setIsDoctorOpen(!isDoctorOpen)}>
                        <FaUserMd />
                        Doctor
                        {isDoctorOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isDoctorOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/doctor/list')}`} onClick={() => handleNavigation('/doctor/list')}><GoTriangleRight className='text-sm ' />Doctor List</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/doctor/profile')}`} onClick={() => handleNavigation('/doctor/profile')}> <GoTriangleRight className='text-sm ' />Doctor Profile</div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/patient')}`} onClick={() => setIsPatientOpen(!isPatientOpen)}>
                        <FaUsers />
                        Patient
                        {isPatientOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                    {isPatientOpen && (
                        <div className='flex flex-col gap-2 ml-10 text-xl'>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/patient/plist')}`} onClick={() => handleNavigation('/patient/plist')}><GoTriangleRight className='text-sm ' />Patient List</div>
                            <div className={`cursor-pointer flex items-center gap-2 px-4 w-full text-lg ${getActiveStyleSub('/patient/pprofile')}`} onClick={() => handleNavigation('/patient/pprofile')}> <GoTriangleRight className='text-sm ' />Patient Profile</div>
                        </div>
                    )}
                </div>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/review')}`} onClick={() => handleNavigation('/review')}>
                    <BiSolidFirstAid />Review
                </div>
                <div className={`flex gap-3 items-center px-4 w-full cursor-pointer ${getActiveStyle('/details')}`} onClick={() => handleNavigation('/details')}>
                    <IoSettings />Personal Details
                </div>
            </div>
        </div>
    );
}

export default SidePanel;
