import React from 'react'
import { TbCategory } from 'react-icons/tb'
import { PiShirtFolded } from 'react-icons/pi'
import { FiChevronRight } from 'react-icons/fi'
import { GrTechnology, } from 'react-icons/gr'
import { GiRunningShoe, GiJewelCrown, GiHealthCapsule } from 'react-icons/gi'
import { BsStopwatch } from 'react-icons/bs'
import icon1 from './icons/bag.svg'
import icon2 from './icons/coat.svg'
import icon3 from './icons/cosmetics.svg'
import icon4 from './icons/dress.svg'
import icon5 from './icons/glasses.svg'
import icon6 from './icons/hat.svg'

const SideBarItemProduct = () => {
    return (
        <>
            <div className='font-pop shadow text-sm'>
                <div className='flex justify-between items-center  cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon1} alt="" />
                        <a href="#" className='flex'>Hand Bag</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>

                <div className='flex justify-between items-center border-b border-t cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon2} alt="" />
                        <a href="#">Height Coat</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>

                <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon3} alt="" />
                        <a href="#">Glass</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>

                <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon4} alt="" />
                        <a href="#">Dress</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>

                <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon5} alt="" />
                        <a href="#">Glasses</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>
                <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
                    <div className='p-4 flex items-center space-x-2 '>
                        <img className='w-[25px]' src={icon6} alt="" />
                        <a href="#">Hat</a>
                    </div>
                    <div className='text-xs text-gray-500'>
                        <FiChevronRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarItemProduct