import React from 'react'

function Footer() {
    return (
        <section className='bg-black py-20'>
            <footer className='max-w-7xl mx-auto p-5'>
                <div>
                    <h1 className='text-4xl lg:text-5xl font-semibold text-white'>Qrazy</h1>
                    <p className='description3 text-sky-100 mt-4 max-w-2xl '>
                        Empowering your business through innovative QR code solutions that enhance product authenticity and customer engagement.
                    </p>
                </div>
                <div className='mt-10 text-right flex flex-col justify-end'>
                    <h1 className='text-xl lg:text-2xl font-semibold text-white'>Quick Links</h1>
                    <ul className='flex items-center justify-end flex-wrap gap-5 mt-4'>
                        <li className='hover:text-purple-800 cursor-pointer text-white'>Home</li>
                        <li className='hover:text-purple-800 cursor-pointer text-white'>About</li>
                        <li className='hover:text-purple-800 cursor-pointer text-white'>Services</li>
                        <li className='hover:text-purple-800 cursor-pointer text-white'>Pricing</li>
                    </ul>
                </div>
            </footer>
            <hr className='text-sky-100 my-5' />
            <div className='description3 max-w-7xl mx-auto text-white p-5'>
                <p>&copy; 2024 Qrazy. All Rights Reserved.</p>
                <div className='flex sm:items-center gap-5 w-full mt-4 flex-col sm:flex-row'>
                    <p>Built by @Ankit628792</p>
                    <div className='ml-auto flex gap-4'>
                        <p className='cursor-pointer hover:text-purple-800 text-white'>Privacy Policy</p>
                        <p className='cursor-pointer hover:text-purple-800 text-white'>Terms of Service</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
