import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10  text-center'>
        <h1 className='text-4xl mb-5 md:mb-[-30px] md:text-5xl font-semibold text-white'>Luxury Cars on Rent</h1>

        <form className='mt-0 mb-0 min-sm:mt-10 md:mb-[-25px] flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-lg 
        md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
            <div className='flex gap-4 flex-col md:flex-row items-center md:gap-10 min-md:ml-8'>
                 <div className='flex flex-col items-start gap-2'>
                    <select required onChange={(e)=> setPickupLocation(e.target.value)}>
                       <option value="">Pickup Location</option>
                       {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : "Please select location"}</p>
                 </div>
                 <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickupDate">Pick-up Date</label>
                    <input type='date' id='pickupDate' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
                 </div>
                  <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickupDate">Return Date</label>
                    <input type='date' id='pickupDate' className='text-sm text-gray-500' required/>
                 </div>
            </div>
            <button className='flex items-center justify-center gap-1 px-9 py-3 mt-4 max-sm:mt-4 bg-primary hover:bg-[#08ca08] text-white rounded-full cursor-pointer'>
              <img src={assets.search_icon} alt="search-icon" className='brightness-500' />
              Search
            </button> 
        </form>

        <img src="/heroImg.png" alt="car" className='max-h-80'/>
    </div>
  )
}

export default Hero


