import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'


import Banner1 from './Banner/banner-1.jpg'
import Banner2 from './Banner/banner-2.jpg'
import Banner3 from './Banner/banner-3.jpg'

const Banner = () => {
    return (
        <>

            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ 
                       disableOnInteraction: false,
                        delay: 3000
                     }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide className='relative font-pop'>
                        <img src={Banner1} alt="" />
                        <div className='absolute top-[10%] left-[10%] md:left-[10%] '>
                            <p className='text-xs lg:text-sm md:text-xs'>HOT CLOTHING</p>
                            <h2 className='text-2xl lg:text-7xl md:text-4xl'>WOMEN</h2>
                            <p className='text-1xl lg:text-4xl md:text-2xl'>SHOPPING</p>
                            <p className='hidden md:flex lg:w-[80%] md:w-[60%] md:text-sm lg:text-sm text-sm text-gray-500 mt-1 lg:mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div>
                                <button className='bg-black text-white px-3 md:text-sm  text-sm md:px-2 md:py-1 py-1 md:mt-3 rounded-md hover:bg-black/50 
                                transition-all duration-300 ease-in-out mt-2 '>SEE SPECIAL OFFER</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative font-pop'>
                        <img src={Banner2} alt="" />
                        <div className='absolute top-[10%] left-[10%] md:left-[10%] '>
                            <p className='text-xs lg:text-sm md:text-xs'>HOT CLOTHING</p>
                            <h2 className='text-2xl lg:text-7xl md:text-4xl'>New Spring</h2>
                            <p className='text-1xl lg:text-4xl md:text-2xl'>Collection</p>
                            <p className='hidden md:flex lg:w-[80%] md:w-[60%] md:text-sm lg:text-sm text-sm text-gray-500 mt-1 lg:mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div>
                                <button className='bg-black text-white px-3 md:text-sm  text-sm md:px-2 md:py-1 py-1 md:mt-3 rounded-md hover:bg-black/50 
                                transition-all duration-300 ease-in-out mt-2 '>SEE SPECIAL OFFER</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative font-pop'>
                        <img src={Banner3} alt="" />
                        <div className='absolute top-[10%] left-[10%] md:left-[10%] '>
                            <p className='text-xs lg:text-sm md:text-xs'>HOT CLOTHING</p>
                            <h2 className='text-2xl lg:text-7xl md:text-4xl'>Summer</h2>
                            <p className='text-1xl lg:text-4xl md:text-2xl'>Collection</p>
                            <p className='hidden md:flex lg:w-[80%] md:w-[60%] md:text-sm lg:text-sm text-sm text-gray-500 mt-1 lg:mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div>
                                <button className='bg-black text-white px-3 md:text-sm  text-sm md:px-2 md:py-1 py-1 md:mt-3 rounded-md hover:bg-black/50 
                                transition-all duration-300 ease-in-out mt-2 '>SEE SPECIAL OFFER</button>
                            </div>
                        </div>
                    </SwiperSlide>
               
                </Swiper>
            </div>
        </>
    )
}

export default Banner