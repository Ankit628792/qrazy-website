"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

function Contact() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
    });

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <section className=' p-5 lg:px-10 py-20 bg-neutral-950 flex flex-col gap-20'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='heading2'>
                    Ready to
                    Boost Your
                    Brand Engagement?
                </h1>
                <p className='description2 max-w-2xl mt-4'>
                    Unlock the power of QR codes with Qrazy. Enhance product authenticity, engage customers, and reward loyalty, all through innovative digital solutions that promote growth and trust.
                </p>
            </div>

            <div className='flex flex-col gap-4 p-5 lg:p-10 rounded-3xl bg-sky-600 bg-opacity-5 max-w-7xl'>
                <Input value={data.name} name='name' onChange={handleChange} className='p-7 rounded-3xl text-lg' placeholder='Your name' />
                <Input value={data.email} name='email' onChange={handleChange} className='p-7 rounded-3xl text-lg' placeholder='Email Address' />
                <Input value={data.phone} name='phone' onChange={handleChange} className='p-7 rounded-3xl text-lg' placeholder='Phone Number' />
                <Input value={data.subject} name='subject' onChange={handleChange} className='p-7 rounded-3xl text-lg' placeholder='Subject' />
                <Textarea value={data.description} name='description' onChange={handleChange} className='p-7 rounded-3xl text-lg' placeholder='Description' />

                <Button className='rounded-full bg-button hover:bg-button-foreground lg:text-lg py-7 max-w-sm cursor-pointer'>
                    Book a Call
                </Button>
            </div>
        </section>
    )
}

export default Contact