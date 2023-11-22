import React, { useContext } from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

const notify = () => toast.error("Remove Cart!");

const Item = ({ item }) => {

    const { id, image, title, dicount, size, price, amount } = item

    const {removeCart,increaseItem,decreaseItem} = useContext(CartContext)

    return (
        <>
            <div>

                <div className='p-4 flex space-x-5 items-center text-start md:border-b sm:w-[640px] md:w-[768px] lg:w-[1024px]'>
                    <div>
                        <img className='max-w-[60px]' src={image} alt="" />
                    </div>
                    <div>
                    <div className='w-[140px] text-start '>
                            <p className='text-sm'>{title}</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[70px] text-start '>
                            <p className='text-sm'>$ {price}</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[100px] text-start '>
                            <div className='flex justify-center items-center space-x-4 border py-1'>
                                 <AiOutlineMinus onClick={()=>decreaseItem(id)} className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out' />
                                 <p>{amount}</p>
                                 <IoMdAdd onClick={()=>increaseItem(id)} className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[170px] md:w-[140px] text-start '>
                            <p className='text-sm'>{size}</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[100px]  md:w-[80px] text-start '>
                            <p className='text-sm text-red-400'>$ {`${parseFloat(price * amount).toFixed(2)}`}</p>
                        </div>
                    </div>
                    <div>
                        <div className=' text-start  cursor-pointer hover:text-red-500 trasition-all duration-300]'>
                            <div onClick={()=>removeCart(id)} className='text-2xl md:mr-[20px]'>
                                <IoMdClose onClick={notify} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item