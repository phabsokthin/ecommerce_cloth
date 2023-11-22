import React from 'react'
import NavBar from './NavBar'
import SideBarItem from './SideBarItem'
import HomeBody from './HomeBody'
import { ItemBody, ItemBody1, ItemProduct } from './Js/Item'
import CardItem from './page/CardItem'
import SideBarItemProduct from './SideBarItemProduct'
import ItemCardBody from './ItemCardBody'

const Layout = () => {
    return (
        <>
            <header className='col-span-5 '>
                <NavBar />
            </header>
            <div className="grid grid-cols-5 container mx-auto gap-8 m-2">

                <aside className='col-span-5 md:col-span-1 '>

                    <SideBarItem />
                    <div className='py-2 mt-10 border-b'>
                        <h1 className='text-1xl'>SPECIAL OFFER</h1>
                    </div>
                    <div className='my-3'>
                        <SideBarItemProduct />
                    </div>

                </aside>

                <body className='col-span-5 md:col-span-4'>

                    <HomeBody />
                    <div className='py-2 mt-10 border-b'>
                        <h1 className='text-1xl'>NEW PRODUCTS</h1>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 py-10'>
                        {ItemProduct.map((product) => {
                            return <CardItem product={product} key={product.id} />
                        })}
                    </div>
                </body>

            </div>


            <div className='container mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  my-2 gap-2'>
                    {ItemBody.map((itembody) => {
                        return <ItemCardBody itembody={itembody} key={itembody.id} />
                    })}
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  my-2 gap-2'>
                    {ItemBody1.map((itembody) => {
                        return <ItemCardBody itembody={itembody} key={itembody.id} />
                    })}
                </div>

            </div>

            <footer className='col-span-5 bg-pink-900 p-5'>
                <div className="container mx-auto">
                <h1 className='text-white'>Deverlop by Thin Deverloper</h1>
                </div>
            </footer>

        </>
    )
}

export default Layout