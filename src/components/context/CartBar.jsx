import React, { createContext, useContext, useState } from 'react'


export const CartBarConext = createContext();

const CartBarProvider = ({children}) => {

    const [open, setOpen] = useState(false)
    
    const back = () => {
        setOpen(false)
    }

  return (
    <CartBarConext.Provider value={{ open, setOpen, back }}>{children}</CartBarConext.Provider>
  )
}

export default CartBarProvider