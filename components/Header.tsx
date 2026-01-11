'use client';

import { styleScript } from '@/fonts/font';
import Link from 'next/link'
import React, { useState } from 'react'
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import Menu from './Menu';
import { useCart } from '@/hooks/useCart';


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const {totalItems} = useCart()
  
  return (
    <header>
      {/* <div className='bg-main py-2 font-bold text-white'>
        <h2 className='text-center text-sm tracking-widest'>DELIVERY ALL OVER PAKISTAN !</h2>
      </div> */}
      <div className='px-3 sm:px-6 md:px-16 lg:px-24 flex justify-between items-center py-4'>
        <div className='md:flex hidden gap-10 items-center'>
          <div className='hidden md:flex gap-7 text-sm '>
            <Link href={"/"}>HOME</Link>
            <Link href={`/products`}>CATALOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </div>
        <div className='flex items-center flex-col leading-3'>
          <h1 className={`${styleScript.className} text-main text-4xl md:text-5xl`}>Root To Radiance</h1>
          <p>By Beenish</p>
        </div>
        <div className='flex gap-7 items-center'>     
          <p className='text-sm underline hidden md:block'>Add Review</p>     
          <FiSearch />
          <Link href={"/Cart"} className='relative'>
            <p className='bg-red-600 text-white w-[17px] text-[12px] text-center -top-2 -right-1.5 h-[17px] rounded-full absolute'>{totalItems}</p>
            <FiShoppingCart />
          </Link>
          <FiMenu onClick={() => setShowMenu(true)} className='inline-block md:hidden' />
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>
      </div>
    </header>
  )
}

export default Header
