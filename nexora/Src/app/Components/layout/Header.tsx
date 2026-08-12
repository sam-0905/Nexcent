import Link from "next/link";
import Image from 'next/image'

import {headerData} from '@/Src/app/data/header'

const Header = () => {
  return (
    <>
    <header className="flex flex-col items-center gap-3 md:flex-row md:justify-between mt-3 mb-1 ml-auto">
        <div className="flex items-center px-1 m-1">
            <Image src={headerData.logo.src} alt={headerData.logo.alt} width={150} height={100} className="object-contain vertical-align-middle"/>
        </div>
        <nav className="flex space-x-2 flex-wrap m-1 px-3">
          {headerData.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

    <div className="flex space-x-3 mr-3">
       <button className= "text-[#4caf4f] px-4 py-2 rounded">Login</button>
      <button className="bg-[#4caf4f] text-white px-4 py-2 rounded">Sign up</button>
    </div>

    </header>
    </>
  )
}

export default Header