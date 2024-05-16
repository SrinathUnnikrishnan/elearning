import React from 'react'

function footer() {
  return (
    <>
    <div>
    <footer className="footer p-10 bg-white dark:bg-slate-900 dark:text-white">
  <nav>
    <h1 className='text-3xl'>
    About Ecampus Library 
    </h1>
  <p>We provide educational solutions for Primary, Secondary School<br/> learners and candidates preparing for WAEC, GCSE,<br/> A levels, BECE, GCE, NECO, JAMB, POST UTME and other National exams.<br/> we also provide solutions for Tertiary institution courses and exams</p>
  </nav> 
  <nav>
    <h6 className="text-3xl">Quick Links</h6> 
    <a className="link link-hover">Ecampus Tutor</a>
    <a className="link link-hover">JAMB/POST UTME</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
  <h1 className='text-3xl'>
  Contact Us
    </h1>
  <p>Office Address

82 Murtala Mohammed Way,<br/> Ebute-meta Lagos, Nigeria</p>
<p className='m-5'>Email: info@ecampuslibrary.com</p>
  </nav>
</footer>  
    </div>
    </>
  )
}

export default footer
