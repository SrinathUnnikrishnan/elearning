import React from 'react';

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 my-3'>
    <div className='mt-4 my-4 p-2'>

    <div className="card w-flex bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image} alt="books" /></figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item.name}
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline hover:bg-blue-500 hover:text-white">{item.category}</div>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Cards