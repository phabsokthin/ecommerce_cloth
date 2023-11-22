import React, { useContext } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { CartBarConext } from '../context/CartBar'
import { BiSolidShoppingBagAlt } from 'react-icons/bi'

import Payment from '../Banner/payment.png'
import Item from './Item'
import { CartContext } from '../context/CartContext'


const CartCheckout = () => {


  const { cart, total, feer, tax,delivery } = useContext(CartContext)

  const { back, open } = useContext(CartBarConext)

  return (
    <>

      <div className='font-pop p-2'>

        <div className={`${open ? 'left-0' : '-left-full'} w-full h-full z-10 fixed top-0 bg-gray-100 transition-all duration-500 ease-in-out`}>
          <div className='bg-green-600 p-5'>
            <div onClick={() => back()} className='text-white flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-all duration-300 ease-in-out'> <BiArrowBack /> Back</div>
          </div>

          <div className="container mx-auto">
            <div className='py-5 '>
              <h1 className='text-2xl md:text-3xl flex items-center space-x-2 uppercase p-2 '><BiSolidShoppingBagAlt /><span>Shopping Cart</span></h1>
              <hr className='mt-5 ' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-2  '>

              <div className='bg-white col-span-2 h-[220px] md:h-[650px]  md:overflow-x-auto md:overflow-hidden md:overflow-y-auto overflow-x-auto lg:overflow-hidden overflow-hidden lg:overflow-y-auto mr-2 overflow-y-auto '>
                <div className='flex space-x-2 md:border-b py-4 pl-4 uppercase mt-5 sm:w-[640px] md:w-[768px] lg:w-[1024px] text-1xl font-bold'>
                  <div className='w-[1000px] md:w-[350px] lg:w-[100px]'>
                    <p>Image</p>
                  </div>
                  <div className=' md:w-[450px] lg:w-[125px]'>
                    <p className='ml-[2rem] md:ml-[0px]'>Title</p>
                  </div>
                  <div className=' md:w-[450px] lg:w-[110px]'>
                    <p className='ml-[7rem] md:ml-[0px]'>Price</p>
                  </div>
                  <div className=' md:w-[400px] lg:w-[115px]'>
                    <p className='ml-[4rem] md:ml-[0px]'>Qty</p>
                  </div>
                  <div className=' md:w-[250px] lg:w-[80px]'>
                    <p className='ml-[6rem] md:ml-[0px] md:ml-0'>Size</p>
                  </div>
                  <div className=' md:w-[20px] lg:w-[30px]'>
                    <p className="md:ml-10 ml-[7rem]">Total</p>
                  </div>
                  <div className=''>
                    <p className='md:ml-[5rem]  ml-[3rem]'>Remove</p>
                  </div>
                </div>
                <div>
                  <div className=''>
                    {
                      cart.map((item) => {
                        return <Item item={item} key={item.id} />
                      })
                    }

                  </div>
                </div>
                <div className='mt-[50px]'>
                  <div className='flex justify-center items-center'>
                    {cart.length > 0 ? (
                      <></>
                    ) : (
                      <>

                        <h1 className='text-gray-500 text-sm md:text-2xl'>Your Cart is Empty</h1>

                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className='bg-white  p-4 md:p-8 h-[500px] overflow-hidden overflow-y-auto'>
                <div className='text-xs md:text-[15px]'>
                  <h1 className='border-b py-3 text-sm md:text-2xl'>Oder Summary</h1>
                  <div className='flex  justify-between py-2 border-b'>
                    <b>Sub-Total:</b> <span>${parseFloat(total).toFixed(2)}</span>
                  </div>
                  <div className='flex  justify-between py-2 border-b'>
                    <b>Tax Rate:</b> <span>${parseFloat(tax).toFixed(2)}</span>
                  </div>
                  <div className='flex  justify-between py-2 border-b'>
                    <b>Delivery:</b> <span>$2.99</span>
                  </div>
                  <div className='flex  justify-between py-2 border-b'>
                    <b>Fees:</b> <span>$0.99</span>
                  </div>
                  <div className='flex  justify-between py-2 border-b'>
                    <b>Grand-Total:</b> <span className='text-red-500'>${parseFloat(feer).toFixed(2)}</span>
                  </div>

                  <div className='w-full flex justify-center'>
                    <button className='bg-green-600 text-white w-full md:py-4 py-3 mt-5 hover:bg-green-500 transition-all duration-300 ease-in-out'>CHECKOUT</button>
                  </div>
                  <div className='mt-3'>
                    <p>WE ACCECPT.</p>
                  </div>
                  <div className='mt-3'>
                    <img src={Payment} alt="" />
                    <p className='mt-2 text-xs md:text-nomal text-gray-500'>Got a discount code || Add it in the next step.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default CartCheckout