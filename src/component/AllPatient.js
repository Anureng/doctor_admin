import React, { useEffect, useState } from 'react'

const AllPatient = () => {
    const [data, setData] = useState([]);
    
      const [filteredData, setFilteredData] = useState(data);
      const [searchDoctor, setSearchDoctor] = useState('');
      const [searchLocation, setSearchLocation] = useState('');
      const [searchGender, setSearchGender] = useState('');
      const [searchSpecialist, setSearchSpecialist] = useState('');


      
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
        setData(data)
        console.log(data)
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
    
      useEffect(() => {
        let filtered = data;
    
        if (searchDoctor) {
          filtered = filtered.filter(doctor =>
            doctor.firstname.toLowerCase().includes(searchDoctor.toLowerCase())
          );
        }
    
        if (searchLocation) {
          filtered = filtered.filter(doctor =>
            doctor.location.toLowerCase().includes(searchLocation.toLowerCase())
          );
        }
    
        // if (searchSpecialist) {
        //   filtered = filtered.filter(doctor =>
        //     doctor.degree.toLowerCase().includes(searchSpecialist.toLowerCase())
        //   );
        // }
    
        setFilteredData(filtered);
      }, [searchDoctor, searchLocation, searchGender, searchSpecialist, data]);
    
  return (
    <div>

<input
            type='text'
            className='border focus:outline-none p-1 rounded-lg w-2/5'
            placeholder='Search Doctor'
            value={searchDoctor}
            onChange={e => setSearchDoctor(e.target.value)}
          />
      <div className='flex justify-evenly p-4 lg:p-0 mt-10 mb-10 flex-col lg:flex-row space-y-5 md:space-y-0'>
        <div className='lg:w-full space-y-6 overflow-hidden overflow-y-scroll h-[40rem] no-scrollbar '>
          {filteredData.filter((e)=>(
                      e.type=="patient"
                    )).map((el) => (
            <div key={el.id} className='flex bg-white items-center justify-between border p-4 rounded-lg'>
              <div className='flex items-center'>
                <div>
                  <img src={el.profilepic} alt='Loading...' className='md:w-72 md:h-72' />
                </div>
                <div className='w-fit'>
                  <p>{el.firstname} {el.lastname}</p>
                  <p>{el.email}</p>
                  <p>{el.address}</p>
                  <p>{el.location}</p>
                </div>
              </div>
              <div className='space-y-2'>
                <p>Gender : {el.gender}</p>
                <p>Dob : {el.dob}</p>
                <p>Phone no :{el.Phoneno}</p>
                <p>Address :{el.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllPatient
