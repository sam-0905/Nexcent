import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'

import {headerData} from '@/data/header'

const Header = () => {
  return (
    <>
    <header className="flex items-center justify-between p-4 px-5 m-1 mx-2 cursor-pointer w-full">
        <div className="flex items-center space-x-4">
            <Image src={headerData.logo.src} alt={headerData.logo.alt} width={100} height={100} className="object-contain vertical-align-middle"/>
        </div>
        <nav className="flex space-x-4">
          {headerData.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

    <div className="flex space-x-4">
       <button className= "text-green-500 px-4 py-2 rounded">Login</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
    </div>

    </header>
    </>
  )
}

export default Header