import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Exams from '../components/exams';
import List from "../../public/list.json";

function tests() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
   <Exams/>
   </div>
   <Footer/>

   
   </>
  )
}

export default tests