import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
        <Link href="/">
            <Image src="/nexcentLogo.png" alt="Nexcent Logo" width={100} height={40} />
        </Link>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/features">Feature</Link>
        <Link href="/products">Product</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/faq">FAQ</Link>
    </nav>
    <div>
        <button>Login</button>
        <button>Sign Up</button>
    </div>

    </>
  )
}

export default Header