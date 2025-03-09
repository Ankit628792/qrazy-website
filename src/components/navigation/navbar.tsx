"use client"
import Link from 'next/link'
import Icons from '../global/icons'
import { buttonVariants } from '../ui/button'

function Navbar() {

    return (
        <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg box-border border-border z-50'>

            <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
                <div className='flex items-start'>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Icons.logo className='w-8 h-8' />
                        <span className='text-lg font-medium'>Qrazy</span>
                    </Link>

                </div>

                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <ul className='flex items-center justify-center gap-8'>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>How it works</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>Benefits</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>Features</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>FAQs</Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex items-center gap-4'>
                    <Link href={"/login"} className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>Download Now</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar