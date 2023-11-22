import React from 'react'
import { NavItem } from './Js/NavItem'

const Responsive = () => {
  return (
    <>
    
        <div>
            <nav className='ml-20 font-pop'>
                <ul className='space-y-5 text-1xl'>
                    {NavItem.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.href}>{item.names}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    
    </>
  )
}

export default Responsive