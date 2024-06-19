import {storage} from "../firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import React from 'react'
import { useState } from 'react';



const SettingPersonal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [language, setLanguage] = useState("")
  const [profilepic, setProfilepic] = useState("")


  
  const uploadimage = async(e) =>{
    const id = localStorage.getItem("userId");
    const imageRef1 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef1, e).then(() => {
            getDownloadURL(imageRef1).then((url) => {
                setProfilepic(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }



  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(
        "https://doctors-backend-ztcl.onrender.com/updatesettings/660be57c3b9e529a2236f462",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gender: gender, language: language, bio: bio, Phoneno: Phoneno, firstname: firstname, lastname: lastname,profilepic:profilepic }),
        }
      );

      if (data.ok) {
        alert("added successfully")
      }
      else {
        alert("Try Again and reload the page")
      }

    } catch (error) {
      alert("Try Again and reload the page")
    }
  }



  // const handleProfilePicChange = (e) => {
  //   const file = e.target.files[0]; // Get the first file from the input
  //   setProfilepic(file); // Set the file as the profile picture
  // }

  return (
    <div className='bg-white p-4 w-full space-y-2 rounded-lg shadow-lg'>
      <div className='flex items-center flex-col md:flex-row justify-between'>
        <h1 className='text-[24px] md:text-[28px] font-semibold'>Personal Details</h1>

        <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
          Dashboard {">"} Security <span className='text-[#007569]'>{'>'}Personal Details </span>
        </div>
      </div>

      <div className=''>
        <div className='bg-[#F7F7F7] flex  flex-col   p-3 space-y-3 '>
          <p className='w-fit'>Your Details</p>
 <select
            placeholder='Enter Gender'
            className='p-2 focus:outline-none rounded-xl text-gray-500'
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Gender</option>

            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='other'>Other</option>
          </select>

          <input type='text'
            placeholder='First name'
            name='name'
            value={firstname} className='p-2 focus:outline-none rounded-xl'
            onChange={(e) => setFirstname(e.target.value)} />
          <input placeholder='Last Name'
            type='text'
            name='name'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)} className='p-2 focus:outline-none rounded-xl' />

          <input placeholder='Personal Mobile Number' value={Phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            className='p-2 focus:outline-none rounded-xl' />


          <textarea rows="4" cols="50" value={bio} onChange={(e) => setBio(e.target.value)} placeholder='About Me' className='p-2 focus:outline-none rounded-xl'></textarea>

         
          <select
            placeholder='Enter Language'
            className='p-2 focus:outline-none rounded-xl text-gray-500'
            onChange={(e) => setLanguage(e.target.value)} 
          >
            <option value=''>select language</option>

            <option value='English'>English</option>
            <option value='hindi'>hindi</option>
            <option value='spanish'>spanish</option>
            <option value='other'>other</option>
          </select>
           



          <div className='w-full'>

            <label className='block pb-2 font-semibold'>Profile Picture</label>
            <div className='border-[2px]  py-[6px] rounded-md border-dashed border-[#949494]'>
              <input
                placeholder='Drop file here to upload'
                type='file'
                name='photo'
                // onChange={handleProfilePicChange}
                className='hidden'
                id='fileInput'
                onChange={
                  (e) => {
                      if (e.target.files[0]) {
                          uploadimage(e.target.files[0])
                      }
                  }
                }
              />
              <div className='flex flex-row'>
                <label
                  htmlFor='fileInput'
                  className='border-[2px] rounded-md px-2 py-0 text-xs w-fit p-1 text-white bg-[#276A7B] hover:bg-[#25515c] cursor-pointer flex justify-center items-center'
                >
                  Select File
                </label>
                <p className='text-[#949494] pl-1 '>Drop files here to upload</p>
              </div>
            </div>
          </div>

          <p className=' flex justify-end mt-3'>
            <button className='bg-[#007569] px-3 py-1 rounded-lg text-white'
              onClick={handlePersonalInfoSubmit}>
              Save Changes
            </button>
          </p>
        </div>
      </div>

    </div>
  )
}

export default SettingPersonal

