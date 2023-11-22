import React, { useContext } from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

const notify = () => toast.success('Add To Cart!');

const CardItem = ({ product }) => {

    const { id, image, title, size, price, discount, amount } = product

    const {addToCart} = useContext(CartContext)

    return (
        <>
            <div className='font-pop'>
                <div className='cursor-pointer group relative overflow-hidden'>
                    <img className='group-hover:scale-110 transition-all duration-300' src={image} alt="" />
                    <div className='space-y-1'>
                        <p className='mt-2'>{title}</p>
                        <p className='text-xs text-gray-500'>{size}</p>
                        <p className='text-red-500'>${price}</p>
                        <div className='absolute top-0 p-1'>
                            <h1 className='bg-red-500 px-2 py-1 text-white rounded-full'>{discount}</h1>
                        </div>
                        <div className='absolute top-0 -right-[50rem] group-hover:right-0 pr-4 transition-all duration-300 ease-in-out'>
                            <div className='space-y-4 bg-white p-4 shadow-xl'>
                                <div onClick={()=>addToCart(product, id)} className='text-[20px] hover:text-red-500 transition-all duration-300 ease-in-out'>
                                    <CiShoppingBasket onClick={notify} />
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

export default CardItem