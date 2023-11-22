import React from 'react'
import { TbCategory } from 'react-icons/tb'
import { PiShirtFolded } from 'react-icons/pi'
import { FiChevronRight } from 'react-icons/fi'
import {GrTechnology,} from 'react-icons/gr'
import {GiRunningShoe,GiJewelCrown,GiHealthCapsule} from 'react-icons/gi'
import {BsStopwatch} from 'react-icons/bs'
import {MdOutlineSportsSoccer} from 'react-icons/md'

const SideBarItem = () => {
  return (
    <>

      <div className='font-pop shadow text-sm'>
        <div className='bg-orange-300 p-4 flex items-center space-x-2'>
          <TbCategory />
          <p>Category</p>
        </div>
        <div className='flex justify-between items-center  cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <PiShirtFolded />
            <a href="#">Clothing</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b border-t cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <GrTechnology />
            <a href="#">Electronic</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <GiRunningShoe />
            <a href="#">Shoes</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <BsStopwatch />
            <a href="#">Watches</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <GiJewelCrown />
            <a href="#">Jewellery</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <GiHealthCapsule />
            <a href="#">Health and Beauty</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>

        <div className='flex justify-between items-center border-b cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out'>
          <div className='p-4 flex items-center space-x-2 '>
            <MdOutlineSportsSoccer />
            <a href="#">Sports</a>
          </div>
          <div className='text-xs text-gray-500'>
            <FiChevronRight />
          </div>
        </div>
      </div>

      
      <div>
        
      </div>

    </>
  )
}

export default SideBarItem