import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const AllUser = () => {
  const users = [
    {
      profile: 'https://s3-alpha-sig.figma.com/img/274e/e88b/4ba090887500f714810fb576dab7b349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXbicaYYTqjImhhZitaEUSFz88uxNFAyCyBicqP-7q-6hBngnD1WJpbvBAOGkPmH-jiykmjLiAlBzJw8iIo9L3Okv7WB8ZhF3YR3UZOcedBRAh0SDNCSAchglqnqchTsOKdiKERGW7AEb7b16Brq1rXQQfTTIxpewaYbUSNHH-ZxYer0j-fr9J3Z7TOwMPgpmbXGG0ovb9uNQOpqwWYnqCdm5nXjR6WNycJrlkQhgJNCKuh8kt1AFqkHXGPccdEU4uiQYBvywgUHmdD3bUZu9OzikRUSKgKkTB8KTt~AoFCHpFscew4rJ7P9YWPWDxfybDe9mQyIuEuV5DOMoqkmOw__',
      name: 'John Doe',
      time: '10:30 AM',
      date: '2024-06-10',
      diseases: 'Diabetes',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      gender:"male"
    },
    {
      profile: 'https://s3-alpha-sig.figma.com/img/274e/e88b/4ba090887500f714810fb576dab7b349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXbicaYYTqjImhhZitaEUSFz88uxNFAyCyBicqP-7q-6hBngnD1WJpbvBAOGkPmH-jiykmjLiAlBzJw8iIo9L3Okv7WB8ZhF3YR3UZOcedBRAh0SDNCSAchglqnqchTsOKdiKERGW7AEb7b16Brq1rXQQfTTIxpewaYbUSNHH-ZxYer0j-fr9J3Z7TOwMPgpmbXGG0ovb9uNQOpqwWYnqCdm5nXjR6WNycJrlkQhgJNCKuh8kt1AFqkHXGPccdEU4uiQYBvywgUHmdD3bUZu9OzikRUSKgKkTB8KTt~AoFCHpFscew4rJ7P9YWPWDxfybDe9mQyIuEuV5DOMoqkmOw__',
      name: 'Jane Smith',
      time: '11:00 AM',
      date: '2024-06-10',
      diseases: 'Hypertension',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      gender:"male"
    },
    {
      profile: 'https://s3-alpha-sig.figma.com/img/274e/e88b/4ba090887500f714810fb576dab7b349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXbicaYYTqjImhhZitaEUSFz88uxNFAyCyBicqP-7q-6hBngnD1WJpbvBAOGkPmH-jiykmjLiAlBzJw8iIo9L3Okv7WB8ZhF3YR3UZOcedBRAh0SDNCSAchglqnqchTsOKdiKERGW7AEb7b16Brq1rXQQfTTIxpewaYbUSNHH-ZxYer0j-fr9J3Z7TOwMPgpmbXGG0ovb9uNQOpqwWYnqCdm5nXjR6WNycJrlkQhgJNCKuh8kt1AFqkHXGPccdEU4uiQYBvywgUHmdD3bUZu9OzikRUSKgKkTB8KTt~AoFCHpFscew4rJ7P9YWPWDxfybDe9mQyIuEuV5DOMoqkmOw__',
      name: 'Alice Johnson',
      time: '11:30 AM',
      date: '2024-06-10',
      diseases: 'Asthma',
      email: 'alice.johnson@example.com',
      phone: '555-666-7777',
      gender:"Female"
    },
    
    {
      profile: 'https://s3-alpha-sig.figma.com/img/274e/e88b/4ba090887500f714810fb576dab7b349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXbicaYYTqjImhhZitaEUSFz88uxNFAyCyBicqP-7q-6hBngnD1WJpbvBAOGkPmH-jiykmjLiAlBzJw8iIo9L3Okv7WB8ZhF3YR3UZOcedBRAh0SDNCSAchglqnqchTsOKdiKERGW7AEb7b16Brq1rXQQfTTIxpewaYbUSNHH-ZxYer0j-fr9J3Z7TOwMPgpmbXGG0ovb9uNQOpqwWYnqCdm5nXjR6WNycJrlkQhgJNCKuh8kt1AFqkHXGPccdEU4uiQYBvywgUHmdD3bUZu9OzikRUSKgKkTB8KTt~AoFCHpFscew4rJ7P9YWPWDxfybDe9mQyIuEuV5DOMoqkmOw__',
      name: 'Bob Brown',
      time: '12:00 PM',
      date: '2024-06-10',
      diseases: 'Allergies',
      email: 'bob.brown@example.com',
      phone: '444-555-6666',
      gender:"Female"
    },
    {
      profile: 'https://s3-alpha-sig.figma.com/img/274e/e88b/4ba090887500f714810fb576dab7b349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXbicaYYTqjImhhZitaEUSFz88uxNFAyCyBicqP-7q-6hBngnD1WJpbvBAOGkPmH-jiykmjLiAlBzJw8iIo9L3Okv7WB8ZhF3YR3UZOcedBRAh0SDNCSAchglqnqchTsOKdiKERGW7AEb7b16Brq1rXQQfTTIxpewaYbUSNHH-ZxYer0j-fr9J3Z7TOwMPgpmbXGG0ovb9uNQOpqwWYnqCdm5nXjR6WNycJrlkQhgJNCKuh8kt1AFqkHXGPccdEU4uiQYBvywgUHmdD3bUZu9OzikRUSKgKkTB8KTt~AoFCHpFscew4rJ7P9YWPWDxfybDe9mQyIuEuV5DOMoqkmOw__',
      name: 'Charlie Davis',
      time: '12:30 PM',
      date: '2024-06-10',
      diseases: 'Arthritis',
      email: 'charlie.davis@example.com',
      phone: '333-444-5555',
      gender:"Female"
    },
  ];

  const [search, setSearch] = useState("");

  const filterByData = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-white w-full rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row items-center justify-between p-4'>
        <p className='text-3xl mb-2 md:mb-0'>Appointments</p>
        <div className='flex items-center text-sm md:text-base'>
          <p>Dashboard</p>
          <FaAngleRight className='text-blue-600 mx-2' />
          <p>Appointments</p>
        </div>
      </div>

      <div className='flex items-center justify-center mb-4'>
        <div className='flex items-center rounded-xl p-2 border bg-[#F7F7F7] space-x-2 w-full max-w-md'>
          <CiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search By Patient Name'
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className='w-full'>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Profile</th>
              <th className="p-2">Name</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Time</th>
              <th className="p-2">Date</th>
              <th className="p-2">Diseases</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filterByData.map((user, index) => (
              <tr key={index} className="border-b">
                <td className='flex items-center justify-center p-2'>
                  <img src={user.profile} className='w-10 h-10 rounded-full' alt='Profile' />
                </td>
                <td className='p-2'>{user.name}</td>
                <td className='p-2'>{user.gender}</td>
                <td className='p-2'>{user.time}</td>
                <td className='p-2'>{user.date}</td>
                <td className='p-2'>{user.diseases}</td>
                <td className='p-2'>{user.email}</td>
                <td className='p-2'>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUser;
