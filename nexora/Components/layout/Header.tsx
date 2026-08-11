import Link from "next/link";
import Image from 'next/image'

import {headerData} from '@/data/header'

const Header = () => {
  return (
    <>
    <header className="flex items-center justify-between p-4 px-5 m-1 mx-2 cursor-pointer w-full mb-5">
        <div className="flex items-center space-x-2 m-1 px-3 ">
            <Image src={headerData.logo.src} alt={headerData.logo.alt} width={150} height={100} className="object-contain vertical-align-middle"/>
        </div>
        <nav className="flex space-x-4">
          {headerData.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

    <div className="flex space-x-4">
       <button className= "text-[#4caf4f] px-4 py-2 rounded">Login</button>
      <button className="bg-[#4caf4f] text-white px-4 py-2 rounded">Sign up</button>
    </div>

    </header>
    </>
  )
}

export default Header