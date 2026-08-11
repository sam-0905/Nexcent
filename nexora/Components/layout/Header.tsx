import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'

import {headerData} from '@/data/header'

const Header = () => {
  return (
    <>
    <header className="flex items-center justify-between p-4 m-1">
        <div className="flex items-center space-x-4">
            <Image src={headerData.logo.src} alt={headerData.logo.alt} width={100} height={50} className="object-contain px-2"/>
        </div>
        <nav className="flex space-x-4">
          {headerData.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

    <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button>Sign Up</button>
    </div>

    </header>
    </>
  )
}

export default Header