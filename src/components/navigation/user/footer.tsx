import { Heart } from 'lucide-react'
import Link from 'next/link'

function Footer() {

    return (
        <footer className='flex flex-col items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl m-auto relative'>

            <div className='hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]'></div>
            <div className='hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]'></div>

            <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-8 w-full'>
                <div className='flex flex-col items-start justify-start md:max-w-[300px] col-span-2'>
                    <div className='flex items-center gap-2'>
                        <img src="/favicon.svg" className='w-7 h-7' alt="" />
                        <span>Qrazy</span>
                    </div>
                    <p className='text-muted-foreground mt-4 text-sm text-start'>
                        Boost Product Authenticity with Qrazy
                    </p>
                    <Link href={"https://www.google.com/search?q=Ankit628792"} target='_blank'>
                        <span className='mt-4 text-neutral-200 text-sm flex items-center'>
                            Made by @Ankit628792 with <Heart className='w-3.5 h-3.5 ml-1 fill-primary text-primary' />
                        </span>
                    </Link>
                </div>

                <div className='grid grid-cols-1 mt-16 xl:mt-0 gap-8'>

                    <div className='md:grid md:grid-cols-2 md:gap-8'>
                        <div>
                            <h3 className='text-base font-medium text-white'>
                                Others
                            </h3>
                            <ul className='mt-2 text-sm text-muted-foreground'>
                                <li className='mt-2'>
                                    <Link href={"#features"} className='hover:text-foreground transition-all duration-300'>Features</Link>
                                </li>
                                <li className='mt-2'>
                                    <Link href={"#faqs"} className='hover:text-foreground transition-all duration-300'>FAQs</Link>
                                </li>
                                <li className='mt-2'>
                                    <Link href={"#how-it-works"} className='hover:text-foreground transition-all duration-300'>How it works</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='mt-10 md:mt-0 flex flex-col'>
                            <h3 className='text-base font-medium text-white'>
                                Company
                            </h3>
                            <ul className='mt-2 text-sm text-muted-foreground'>
                                <li className='mt-2'>
                                    <Link href={"#"} className='hover:text-foreground transition-all duration-300'>About Us</Link>
                                </li>
                                <li className='mt-2'>
                                    <Link href={"#"} className='hover:text-foreground transition-all duration-300'>Privacy Policy</Link>
                                </li>
                                <li className='mt-2'>
                                    <Link href={"#"} className='hover:text-foreground transition-all duration-300'>Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8 border-t border-border/80 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full'>
                <p className='text-sm text-muted-foreground mt-4 md:mt-0 text-center w-full'>
                    &copy; {new Date().getFullYear()} Qrazy INC. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer