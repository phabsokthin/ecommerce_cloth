import React, { createContext, useContext, useEffect, useState } from 'react'



export const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);


    //condition1 in console
    // const addToCart = (product, id) => {
    //     console.log('add to cart');

    // }

    //condition 2 in console

    // const addToCart = (product, id) => {
    //     const newCart = {...product, amount: 1}
    //     console.log(newCart)
    // }

    //condition3 show in page cart

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        const cartItem = cart.find((item) => {
            return item.id === id
        });

        if(cartItem){
            const newCart = [...cart].map(item=>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount + 1}
                }else{
                    return item;
                }
            });
            setCart(newCart)
        }else{
            setCart([...cart, newItem])
        }
    }

    //end of add to cart

    //remove cart
    const removeCart = (id) => {

        const newCart = cart.filter((item) => {
            return item.id !== id
        });

        setCart(newCart)

        
    }
    //end of remove cart

    // for amount Item

    const [isAmountItem, setIsAmountItem] = useState(0)
    useEffect(()=> {
        if(cart){
            const amount = cart.reduce((calAmount, currentItem) => {
                return calAmount + currentItem.amount;
            }, 0);

            setIsAmountItem(amount)
        }
    })

    // end of amount item

    //increase item

    const increaseItem = (id) => {

        const cartItem = cart.find((item) =>item.id === id)
        addToCart(cartItem, id)

    }

    //end of decreaseItem 

    const decreaseItem = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        });

        if(cartItem){
            const newCartMinus = cart.map((item) => {
                if(item.id === id){
                    return {...item, amount: cartItem.amount - 1};
                }else{
                    return item
                }
            });

            setCart(newCartMinus)
        }

        if(cartItem.amount < 2){
           // removeCart(id)
            removeCart(false)
        }
    }

    //end of decareseItem

    //total Amount
    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
        const total = cart.reduce((calAll, currentItem) => {
            return calAll + currentItem.price * currentItem.amount 
        }, 0);

        setTotal(total)
    })

    //for tax
    const [tax, setTax] = useState(0)
    useEffect(()=>{
        const totalTax = cart.reduce((allTax, currentTax) => {
            return allTax + currentTax.price * currentTax.amount/100 + 1
        }, 0)

        setTax(totalTax)

    })


    const [delivery, setDelivery] = useState(0)
    useEffect(()=> {
        const dele = 2.99 + 0.99
        setDelivery(dele)
    })

    // for fee

    const [feer, setFeer] = useState(0)
    // const delivery = 2.99;
    // const feers = 0.99;
    useEffect(() =>{
    //    const result_feer = delivery + feers
       const result = total + tax + delivery

       setFeer(result)
    }) 


    

  return (
    <CartContext.Provider value={{
     cart, setCart, addToCart,removeCart, 
     isAmountItem, setIsAmountItem,
    increaseItem,decreaseItem, total, setTotal,
    feer, setFeer, tax, setTax,
    delivery, setDelivery}}>{children}</CartContext.Provider>
  )
}

export default CartProvider