import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json";

function Exams() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>General Library</h1>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {

          list.map((item) => (
            <Cards key={item.id}item={item}/>
          ))

        }

      </div>

    </div>
  
    </>
  )
}

export default Exams