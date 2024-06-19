// DoctorListTable.js
import React,{useState,useEffect} from 'react';



const DoctorListTable = () => {
  const [doctorData, setdoctorData] = useState("");

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
        setdoctorData(data)
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

  return (
    <div className="overflow-x-auto">
              <h1 className="text-xl text-start bg-white rounded-t-xl py-3 px-4 font-bold ">Doctors List</h1>
      <table className="min-w-full rounded-xl  bg-white border border-gray-200">
        <thead>
          <tr className=' bg-[#F7F7F7]'>
            <th className="px-4 py-2">Profile</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {doctorData.map((doctor) => (
            <tr key={doctor.id} className="text-center border-t">
              <td className="px-4 py-2">
                <img
                  src={doctor.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td className="px-4 py-2">{doctor.name}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    doctor.status === 'Present'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {doctor.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorListTable;
