import React from 'react';
import Home from "./home/Home";
import Tests from "./Tests/tests";
import Signup from './components/Signup';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
 <>
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Exams" element={<Tests/>}/>
 <Route path="/Signup" element={<Signup/>}/>
 </Routes>




 </div>


 
 </>
  )
}

export default App;
