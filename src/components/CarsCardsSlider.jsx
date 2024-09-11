import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import cars from "../config/cars.json"
import Cards from './Cards';



var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

function CarsCardsSlider() {
    return (
        <>
            <div className="dark:bg-slate-800 max-w-screen-2xl container mx-auto md:px-20 px-4 my-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2 dark:text-white">Cars Collections</h1>
                    <p className='dark:text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {cars.map((item,index) => (
                            <Cards item={item} key={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CarsCardsSlider
