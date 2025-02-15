import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex items-center justify-between gap-10 py-2 rounded-full px-5 lg:px-4 w-full mt-3 max-w-5xl fixed transform left-1/2 -translate-x-1/2 bg-gray-50 dark:bg-gray-950 bg-opacity-50 backdrop-blur-sm bd'>
            <Link href={"/"}>
                <h3 className='text-3xl font-bold text-sky-50 pl-2 leading-none'>Qrazy</h3>
            </Link>
            <ul className='items-center gap-4 hidden lg:flex'>
                <Link href={'/'}>
                    <li className='min-w-20 hover:bg-button transition-colors duration-150 ease-in-out text-sky-50 text-center rounded-full py-3 px-6 font-medium'>
                        Work
                    </li>
                </Link>
                <Link href={'/'}>
                    <li className='min-w-20 hover:bg-button transition-colors duration-150 ease-in-out text-sky-50 text-center rounded-full py-3 px-6 font-medium'>
                        About Us
                    </li>
                </Link>
                <Link href={'/'}>
                    <li className='min-w-20 hover:bg-button transition-colors duration-150 ease-in-out text-sky-50 text-center rounded-full py-3 px-6 font-medium'>
                        Services
                    </li>
                </Link>
                <Link href={'/'}>
                    <li className='min-w-20 hover:bg-button transition-colors duration-150 ease-in-out text-sky-50 text-center rounded-full py-3 px-6 font-medium'>
                        Pricing
                    </li>
                </Link>
            </ul>
            <div>
                <button className='rounded-full py-2 px-5 text-sky-50 bd font-semibold transition-colors duration-150 ease-out hover:bg-button hover:border-transparent opacity-0 sm:opacity-100'>
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar
