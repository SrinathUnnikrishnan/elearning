import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Librarycards from "../components/Librarycards";

function Home() {
  return (
   <>
 <Navbar/>
 <Banner/>
 <Librarycards/>
 <Footer/>
   </>
  );
}

export default Home