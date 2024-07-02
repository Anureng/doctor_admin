import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const SignUpData = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [rpassword , setrPassword] = useState("")
  const [location , setlocation] = useState("")
  const [type , settype] = useState("")
  const [firstname , setfirstname] = useState("")
  const [lastname , setlastname] = useState("")
  const [varified , setvarified] = useState(false)
  const [otpsent , setotpsent] = useState(false)
  const [otp , setotp] = useState("")


  const sentotp = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/sendotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email}),
        }
      );

      if (response.ok) {
        alert("otp sent check your mail")
          setotpsent(true)
      } else {
        alert("something went wrong...please check credential");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const varifyotp = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/verifyotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email,otp}),
        }
      );

      if (response.ok) {
        alert("verified")
    setvarified(true)
    setotpsent(false)
      } else {
        alert("something went wrong...please check credential");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };



  const handleRegister = async(e) => {
    e.preventDefault();
    if(password!==rpassword){
      alert("password and retype password is not matching")
    }
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password ,location,firstname,lastname,type}),
        }
      );

      if (response.ok) {
        alert("Successfull Register")
navigate('/login')
      } else {
        alert("something went wrong...please check credential");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-20 p-4 min-h-screen '>

      <img src="./login.png" alt='Loading...' className='' />
      
      <div className='bg-white shadow-lg shadow-blue-500/50 rounded p-6 w-full max-w-md'>

        <p className='text-center text-xl font-semibold mb-6'>Welcome</p>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='first-name'>First Name</label>
          <input 
            id='first-name'
            type='text' 
            value={firstname}
            onChange={(e)=>setfirstname(e.target.value)}
            placeholder='Enter Your First Name'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='last-name'>Last Name</label>
          <input 
            id='last-name'
            type='text' 
            value={lastname}
            onChange={(e)=>setlastname(e.target.value)}
            placeholder='Enter Last Name'
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        <div className='mb-4 flex flex-row gap-8'>
        <div>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='email'>Email</label>
          <input 
            id='email'
            type='email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        {
        (!otpsent ?
<button onClick={sentotp} className='w-28 h-11 mt-8 bg-[#007569] text-white  rounded '>
    Send otp
  </button> :
  <button onClick={varifyotp} className='w-28 h-11 mt-8 bg-[#007569] text-white  rounded '>
  Verify otp
</button>
        )}
        </div>

        {
        (otpsent && (
          <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='location'>Otp</label>
          <input 
            id='location'
            type='text' 
            placeholder='Enter Otp'
            value={otp}
            onChange={(e)=>setotp(e.target.value)}
            className='w-full px-3 py-2 border rounded'
          />
        </div>
        ))
       }

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='password'>Password</label>
          <input 
            id='password'
            type='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter Password'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='retype-password'>ReType Password</label>
          <input 
            id='retype-password'
            type='password' 
            value={rpassword}
            onChange={(e)=>setrPassword(e.target.value)}
            placeholder='ReType Password'
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 w-fit mb-2' htmlFor='location'>Location</label>
          <input 
            id='location'
            type='text' 
            placeholder='Enter Location'
            value={location}
            onChange={(e)=>setlocation(e.target.value)}
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-6 flex items-center'>
          <p className='mr-4'>Start as:</p>
          <div className='flex space-x-6'>
            <div className='flex items-center'>
              <input type="radio" id="patient" name="role" value="patient" className='mr-2' 
              onChange={(e)=>{
                if(e.target.checked){
                  settype("patient")
                }
                else{
                  settype("doctor")
                }
              }}
              />
              <label htmlFor="patient">Patient</label>
            </div>
            <div className='flex items-center'>
              <input type="radio" id="doctor" name="role" value="doctor" className='mr-2' onChange={(e)=>{
                if(e.target.checked){
                  settype("doctor")
                }
                else{
                  settype("patient")
                 
                }
              }}/>
              <label htmlFor="doctor">Doctor</label>
            </div>
          </div>
        </div>
{
  (varified && (
    <button onClick={handleRegister} className='w-full bg-[#007569] text-white py-2 rounded '>
    Signup
  </button>
  ))
}

        <div className='mt-2 flex items-center justify-center space-x-2'>
          <p>Already have an account?</p>
          <p className='text-[#12D6FF] cursor-pointer'>
            <Link to="/login">
            Login Now
            </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpData;
