import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';

function Librarycards() {
    const filterData=list.filter((data) => data.category === "Free");
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      
      <div>
      <h1 className='text-center font-semibold text-5xl pb-2'>Featured Books</h1>
      </div>
    
    <div>

    <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id}/>
          ))}
      </Slider>

    </div>
    </div>
    </>
  )
}

export default Librarycards
