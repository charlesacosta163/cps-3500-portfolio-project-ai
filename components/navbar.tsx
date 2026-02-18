import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full flex justify-center'>
            <nav className="max-w-200 w-full flex gap-4 p-4 font-medium text-[#687949]">
                <Link href='#about' className='hover:underline cursor-pointer'>about</Link>
                <Link href="#projects" className='hover:underline cursor-pointer'>projects</Link>
                <Link href="#blog" className='hover:underline cursor-pointer'>blog</Link>
                <Link href='#contact' className='hover:underline cursor-pointer'>contact</Link>
            </nav>
        </header>
  )
}

export default Navbar