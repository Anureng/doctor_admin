

import React, { useState ,useEffect} from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import SidePanel from '../component/SidePanel';
import { CiSearch } from "react-icons/ci";

function Review() {
  const [reviewsData, setreviewsData] = useState([]);
  const [activeTab, setActiveTab] = useState('all review');

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://doctors-backend-ztcl.onrender.com/getallfeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setreviewsData(data)
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

  const filteredReviews = reviewsData.filter(review => review.status === activeTab);

  return (
    <div className='bg-[#0075691A] min-h-screen flex flex-col'>
      <Navbar />
      <section className='flex flex-row flex-grow w-full p-4 justify-evenly mx-auto'>
        <div className='hidden md:inline-flex'>
          <SidePanel />
        </div>
        <div className='lg:w-[70%] w-full '>
          <section className='bg-white rounded-lg pb-2 shadow-lg shadow-gray-400'>
            <div className='flex items-center flex-col px-3 py-2 md:flex-row justify-between'>
              <h1 className='text-[24px] md:text-[28px] font-semibold'>Reviews</h1>
              <div className='text-sm font-semibold text-center md:text-right mt-2 md:mt-0'>
                Dashboard<span className='text-[#007569]'>{'>'}Reviews </span>
              </div>
            </div>

            <div className='flex items-center justify-center mb-4'>
              <div className='flex items-center mb-4 rounded-xl p-2 border bg-[#F7F7F7] space-x-2 w-[80%] '>
                <CiSearch />
                <input
                  placeholder='Search By Patient Name'
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <div className='flex flex-row justify-between md:w-[40%] md:text-lg text-sm'>
                <button
                  className={`px-4 w-full py-2 font-semibold ${activeTab === 'all review' ? 'text-[#007569] border-b-2 border-[#007569]' : 'text-black border-b-2 border-[#BABABA]'}`}
                  onClick={() => setActiveTab('all review')}
                >
                  All review
                </button>
                {/* <button
                  className={`px-4 w-full py-2 font-semibold ${activeTab === 'published' ? 'text-[#007569] border-b-2 border-[#007569]' : 'text-black border-b-2 border-[#BABABA]'}`}
                  onClick={() => setActiveTab('published')}
                >
                  Published
                </button> */}
                {/* <button
                  className={`px-4 w-full py-2 font-semibold ${activeTab === 'deleted' ? 'text-[#007569] border-b-2 border-[#007569]' : 'text-black border-b-2 border-[#BABABA]'}`}
                  onClick={() => setActiveTab('deleted')}
                >
                  Deleted
                </button> */}
              </div>
              {/* <button className='py-[2px] px-[2px] ml-2 mr-2 text-[#007569] text-sm border-2 border-[#007569]'>NEWEST</button> */}
            </div>

            <div className='rounded-lg bg-[#F7F7F7] border mx-5 border-[#BEBEBE] mt-5  pb-2 mb-5'>
              {filteredReviews.map((review, index) => (
                <div key={index} className="p-4 flex gap-3">
                  <div className='flex items-center'>
                    <div className='lg:h-[160px] lg:w-[200px] md:h-[170px] md:w-[170px] h-[50px] w-[50px] p-2 mx-auto'>
                      <img className='lg:h-[160px] lg:w-[200px] md:h-[170px] md:w-[170px] h-[50px] w-[50px] overflow-hidden bg-[#017A884D]' src={review.image} alt='doctor' />
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex gap-2'>
                        {/* <h2 className='text-[#007569] md:text-xl font-bold leading-9 text-sm'>{review.name}</h2> */}
                        <p className="text-[#F89603] text-xl ">{"★".repeat(review.rating)}</p>
                      </div>
                      <p className='md:text-[16px] text-start text-semibold leading-[28.21px] text-sm'>{review.feedback}</p>
                      <p className='text-start mt-2 text-xs text-gray-600 font-semibold'>{review.recommend}</p>
                    </div>
                  </div>

                  {/* <div className='item-center flex my-auto flex-col gap-2 border-l-2 pl-2'>
                    <p className='text-sm text-gray-400 font-bold'>Disease</p>
                    <p className='text-[#007569] md:text-xl font-semibold leading-9 text-sm'>{review.disease}</p>
                  </div> */}

                  {/* <div className='flex gap-3 h-fit my-auto items-center'>
                    <button className='text-sm border-2 border-[#C90000] items-center text-[#C90000] py-1 px-1'>DELETE</button>
                    <button className='text-sm border-2 border-[#007569] items-center text-[#007569] py-1 px-1'>PUBLISH</button>
                  </div> */}
                </div>
              ))}
            </div>

          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Review;
