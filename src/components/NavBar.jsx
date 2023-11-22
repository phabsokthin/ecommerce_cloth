import React, { useContext, useState } from 'react'
import { NavItem } from './Js/NavItem'
import { LuMenu } from 'react-icons/lu'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart,AiFillPhone,AiFillQuestionCircle,AiFillInstagram } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { BsFacebook } from 'react-icons/bs'
import { HiShoppingBag } from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {RiTwitterXFill} from 'react-icons/ri'


import Responsive from './Responsive'
import { CartBarConext } from './context/CartBar'
import { CartContext } from './context/CartContext'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    const {open, setOpen} = useContext(CartBarConext)

    const {isAmountItem} = useContext(CartContext)

    return (
        <>
            <div className='border py-2'>
                <div className="container mx-auto font-pop  flex justify-between items-center">
                    <div className='p-2 flex space-x-4'>
                        <div className='border-r-2 flex  items-center px-1'>
                            <MdEmail className='mr-1' />
                            <p className='text-xs sm:text-sm'>shopmart123@gmail.com</p>
                        </div>
                        <div className='flex items-center text-xs sm:text-sm space-x-2'>
                            <AiFillPhone/>
                            <p>+885 887 773 143</p>
                        </div>
                    </div>
                    <div className='flex space-x-2 cursor-ponter mr-2 sm:mr-0'>
                        <BsFacebook/>
                        <RiTwitterXFill className='text-1xl'/>
                        <AiFillInstagram className='text-[17px]'/>
                        <AiFillQuestionCircle className='text-[18px]'/>
                    </div>
                </div>
            </div>

            <div className="container mx-auto font-pop p-3">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6'>
                    <div className='flex justify-between text-2xl items-center md:text-xl sm:text-1xl lg:text-4xl '>
                        <div className='flex items-center space-x-2 '>
                            <HiShoppingBag className='text-3xl text-orange-400' />
                            <p className=' font-bold'>Shop<spanc className="text-red-500">Mart</spanc></p>
                        </div>
                        <div className='text-end md:hidden sm:ml-[20rem] flex jusity-between col-span-1 justify-end items-center space-x-5'>
                            <div className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out'>
                                <AiOutlineHeart className='text-2xl' />
                                <p className='text-sm'>Wishlist</p>
                            </div>
                            <div onClick={()=>setOpen(!open)} className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out relative'>
                                <GiShoppingCart className='text-2xl' />
                                <p className='text-sm'>MyCart</p>
                                <div className='absolute -top-2 right-5'>
                                    <p className='bg-red-500 w-4 text-xs rounded-full text-white h-4 flex justify-center items-center'>{isAmountItem}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='col-span-4 flex  items-center relative md:ml-10'>
                        <div className='absolute left-5  border-r pr-2 border-blue-300'>
                            <p className='text-sm text-gray-400 text-xs sm:text-sm'>All Category</p>
                        </div>
                        <input type="text" className='p-2 w-full border-2 focus:border-orange-500 rounded-md border-blue-300 m-2 text-xs sm:text-sm pl-[6rem] sm:pl-[8rem] ' placeholder='Please enter your search......' />
                        <div className='absolute right-2 top-2 text-white '>
                            <button className='h-9 sm:h-10 w-10 border-2 border-blue-300 hover:bg-red-400 md:mt-0 lg:mt-0  flex justify-center items-center bg-red-500'><AiOutlineSearch /></button>
                        </div>
                    </div>
                    <div className='text-end flex col-span-1 hidden md:flex justify-end items-center space-x-5'>
                        <div className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out'>
                            <AiOutlineHeart className='text-2xl' />
                            <p className='text-sm'>Wishlist</p>
                        </div>
                        <div onClick={()=>setOpen(!open)} className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out relative'>
                            <GiShoppingCart className='text-2xl' />
                            <p className='text-sm'>MyCart</p>
                            <div className='absolute -top-2 right-5'>
                                <p className='bg-red-500 w-4 text-xs rounded-full text-white h-4 flex justify-center items-center'>{isAmountItem}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-red-500 p-4'>
                <nav className='font-pop container mx-auto '>
                    <ul className='flex  text-white space-x-10 uppercase hidden lg:flex'>
                        <li className='h-full '>
                            <a href="/" className='bg-red-600 p-4'>All category</a>
                        </li>
                        {NavItem.map((item, index) => {
                            return (
                                <li>
                                    <a href={item.href}>{item.names}</a>
                                </li>
                            )
                        })}
                    </ul>


                </nav>

                <div className='flex justify-end'>
                    <div onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-white cursor-pointer'>
                        <LuMenu className='text-2xl' />
                    </div>
                </div>

            </div>
            {/* for responsive */}
            <div>
                <div className={`${isOpen ? 'w-full' : '-top-full'} w-full h-full bg-black/50 lg:hidden lg:bg-none z-10  fixed`}>
                    <div className={`${isOpen ? 'top-0' : '-top-full'} bg-white w-full h-[50%] shadow-xl lg:hidden z-10 fixed  transition-all duration-300 ease-in-out`}>
                        <div className='flex justify-end '>
                            <div onClick={handleClose} className='p-3 cursor-pointer hover:text-red-500'>
                                <AiOutlineClose className='text-1xl' />
                            </div>
                        </div>
                        <Responsive />
                    </div>
                </div>

            </div>


        </>
    )
}

export default NavBar