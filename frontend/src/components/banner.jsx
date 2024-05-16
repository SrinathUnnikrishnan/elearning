import React from 'react';
import Banner from "../../public/banner.jpg";

function banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto p-10 md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md: mt-32'>
          <div className='space-y-6'>
          <h1 className='text-7xl font-extrabold dark:text-white md:auto'>Access to JAMB/ POST UTME Past Questions, Textbooks and more</h1>
          <p className='text-xl'>With Ecampus Library getting better grades just got easier.</p>
          </div>
          <button className="btn btn-wide m-5"><div className='text-primary'>Join Now</div></button>
        </div>
        <div className="order-1 w-full p-5 md:w-1/2">
      <img src={Banner} className="w-92 h-92" alt=""/>
    </div>

    </div>
    </>
  )
}

export default banner
