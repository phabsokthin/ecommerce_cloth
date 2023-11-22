import React, { useContext } from 'react'

import { CiShoppingBasket } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar,IoIosStarHalf  } from "react-icons/io";
import toast from 'react-hot-toast';
import { CartContext } from './context/CartContext';

const notify = () => toast.success("Add To Cart")

const ItemCardBody = ({ itembody }) => {

    const { id, image, title, price, amount } = itembody

    const {addToCart} = useContext(CartContext)

    return (
        <>

            <div className='font-pop'>
                <div className='cursor-pointer group relative overflow-hidden border p-3'>
                    <img className='group-hover:scale-110 transition-all duration-300' src={image} alt="" />
                    <div className='space-y-1'>
                        <p className='mt-2 text-sm'>{title}</p>
                        <p className='text-red-500'>${price}</p>
                        <div className='flex space-x-1 text-orange-500 text-sm'>
                            <IoIosStar/>
                            <IoIosStar/>
                            <IoIosStar/>
                            <IoIosStar/>
                            <IoIosStarHalf/>
                        </div>
                        <div className='absolute top-0 -right-[50rem] group-hover:right-0 pr-4 transition-all duration-300 ease-in-out'>
                            <div className='space-y-4 bg-white p-4 shadow-xl'>
                                <div onClick={()=>addToCart(itembody, id)} className='text-[20px] hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <CiShoppingBasket onClick={notify}/>
                                </div>
                                <div className='text-[20px] hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <FaEye />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemCardBody