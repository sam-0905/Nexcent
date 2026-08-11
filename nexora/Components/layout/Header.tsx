import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className="flex items-center justify-between p-4 m-1">
         <Link href="/">
            <Image src="/nexcentLogo.png" alt="Nexcent Logo" width={100} height={40} />
        </Link>
    <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/features">Feature</Link>
        <Link href="/products">Product</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/faq">FAQ</Link>
    </nav>
    <div className="flex space-x-4">
        <button>Login</button>
        <button>Sign Up</button>
    </div>

    </header>
    </>
  )
}

export default Header