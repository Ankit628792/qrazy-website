import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SquareChevronRight } from 'lucide-react'
import React from 'react'

function Home() {
  const images = [
    "https://framerusercontent.com/images/8q8nXuwH5YTP5An3jtF8arEo4.jpg",
    "https://framerusercontent.com/images/Pu1so0PrGmlXcVlSrpjpWk0sroU.png",
    "https://framerusercontent.com/images/yfu8D1APjDRJwHLu7lfi8guiWBw.jpg",
    "https://framerusercontent.com/images/kKLOxjvEuwm05UTP2mjXtLbfvNI.jpg",
    "https://framerusercontent.com/images/qjQLktFztOoxSRNmTxMtaXRqDCo.jpg"
  ]

  const steps = [
    {
      id: 1,
      title: "Download the App",
      description: "Start your journey to better marketing and product engagement by downloading the Qrazy app."
    },
    {
      id: 2,
      image: "https://framerusercontent.com/images/E3BK0hDJDFWXp64yQOZJ70KLsk.jpg",
      imageBg: "https://framerusercontent.com/images/BocCnPuxDGLAt6kzFU5bUuQtjZw.jpg"
    },
    {
      id: 3,
      title: "Create a Free Account",
      description: "Create a free account and start generating QR codes for your products. Customize your rewards system to engage your customers."
    },
    {
      id: 4,
      title: "Generate QR Codes for Products",
      description: "Easily generate unique QR codes for your products to verify authenticity and offer rewards to your customers."
    },
    {
      id: 5,
      title: "Track Engagement and Rewards",
      description: "Monitor customer interactions, track scans, and evaluate the effectiveness of your reward campaigns through detailed analytics."
    }
  ]


  return (
    <>
      <header className='flex flex-col gap-2 items-center justify-center p-5 md:p-10 min-h-[90vh]'>
        <div className='border border-violet-500 text-violet-500 rounded-2xl flex items-center gap-3 py-1.5 px-3 max-w-max text-sm' >
          <p className='bg-violet-500 bg-opacity-20 rounded-xl px-4 py-2'>New</p>
          <p>Qrazy is now available!</p>
        </div>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold max-w-4xl text-center text-sky-50'>Boost your Product Authenticity with Qrazy!</h1>
        <p className='text-sky-50 text-opacity-60 sm:text-lg lg:text-xl xl:text-2xl text-center max-w-6xl'>A cutting-edge platform for businesses to generate QR codes for products and offer rewards to customers. Ensuring quality, authenticity, and effective marketing strategies.</p>

        <div className='flex items-center gap-6 py-6'>
          <Button variant={"outline"} size={"lg"} className='rounded-full bg-transparent lg:text-lg py-7'>
            Features
          </Button>
          <Button size={"lg"} className='rounded-full bg-button hover:bg-button-foreground lg:text-lg py-7'>
            Get Started
          </Button>
        </div>
      </header>

      <section className='max-w-8xl p-5 lg:p-10'>
        <div className='bg-neutral-700 rounded-3xl p-5 w-full lg:h-screen grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            images.map((el, index) => (
              <div key={index} className={cn('w-full h-full rounded-3xl overflow-hidden ', index == 1 ? "md:row-span-2" : "")}>
                <img className='w-full h-full object-cover' src={el} alt="" />
              </div>
            ))
          }
        </div>
      </section>

      <section className='max-w-7xl py-20'>
        <div className='flex flex-col items-center justify-center'>
          <Button variant={"secondary"} size={"sm"} className='text-sky-50 rounded-full border'>
            Features
          </Button>

          <h1 className='heading2'>
            How Qrazy Works
          </h1>
          <p className='description2'>
            Qrazy allows businesses to enhance their marketing and product authenticity by integrating QR codes on products. Customers can scan the codes to verify authenticity, gain rewards, and enjoy a seamless experience.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 py-20 px-5'>
          <div className=' bg-black p-7 md:p-10 lg:p-16 xl:p-20 w-full lg:col-span-2 rounded-3xl flex items-center flex-col-reverse lg:flex-row justify-between gap-y-12 gap-x-20'>
            <div className='flex flex-col gap-4 items-start flex-grow'>
              <h1 className='heading3'>
                Generate Your QR Code
              </h1>
              <p className='description3'>
                Businesses can easily create a QR code for each product to link customers to a detailed product page or offer.
              </p>
              <Button variant={"secondary"} className='border rounded-full mt-4'>
                Learn more
              </Button>
            </div>

            <div className='relative'>
              <div className='w-full min-w-96 xl:min-w-[28rem] h-80 bg-white rounded-3xl transform -skew-x-6 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://framerusercontent.com/images/W3ESxsHtnuTtNFvh3UIIPLrBKg.jpg" alt="" />
              </div>
            </div>
          </div>


          <div className=' bg-black p-7 md:p-10 lg:p-16 xl:p-20 w-full rounded-3xl flex items-center flex-col-reverse lg:flex-col justify-between gap-y-12 gap-x-20'>
            <div className='flex flex-col gap-4 items-start flex-grow'>
              <h1 className='heading3'>
                Reward Your Customers
              </h1>
              <p className='description3'>
                After a customer scans the QR code, they earn rewards like discounts, loyalty points, or exclusive access to promotions
              </p>
              <Button variant={"secondary"} className='border rounded-full mt-4'>
                Learn more
              </Button>
            </div>

            <div className='relative'>
              <div className='w-full min-w-96 xl:min-w-[28rem] h-80 bg-white rounded-3xl transform -skew-x-6 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://framerusercontent.com/images/RfUmmRuxudc75bAFQMQp63GeiA.jpg" alt="" />
              </div>
            </div>
          </div>


          <div className=' bg-black p-7 md:p-10 lg:p-16 xl:p-20 w-full rounded-3xl flex items-center flex-col-reverse lg:flex-col justify-between gap-y-12 gap-x-20'>
            <div className='flex flex-col gap-4 items-start flex-grow'>
              <h1 className='heading3'>
                Ensure Product Authenticity
              </h1>
              <p className='description3'>
                The QR code verifies the authenticity of the product, building trust and ensuring quality in your offerings.
              </p>
              <Button variant={"secondary"} className='border rounded-full mt-4'>
                Learn more
              </Button>
            </div>

            <div className='relative'>
              <div className='w-full min-w-96 xl:min-w-[28rem] h-80 bg-white rounded-3xl transform -skew-x-6 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://framerusercontent.com/images/aSiXvoZXKrdM4Ue7IZ0UPhmbBEA.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className=' bg-black p-7 md:p-10 lg:p-16 xl:p-20 w-full lg:col-span-2 rounded-3xl flex items-center flex-col-reverse lg:flex-row justify-between gap-y-12 gap-x-20'>
            <div className='flex flex-col gap-4 items-start flex-grow'>
              <h1 className='heading3'>
                Track Engagement and Analytics
              </h1>
              <p className='description3'>
                Track scans and engagement to see how your customers interact with your product and optimize future campaigns.
              </p>
              <Button variant={"secondary"} className='border rounded-full mt-4'>
                Learn more
              </Button>
            </div>

            <div className='relative'>
              <div className='w-full min-w-96 xl:min-w-[28rem] h-80 bg-white rounded-3xl transform -skew-x-6 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://framerusercontent.com/images/sFeZTRaQLNzQMndUcaJqDgP5YRE.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' py-20 bg-neutral-950 px-5'>
        <section className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start py-20'>
          <div>
            <h1 className='heading2 lg:text-left'>
              Why Qrazy is Right for Your Business
            </h1>
          </div>
          <div>
            <div className='w-full h-40 rounded-lg overflow-hidden'>
              <img className='w-full object-contain' src="https://framerusercontent.com/images/vo7LSFYBVkQwWut8Lpnpv8rTJgs.png" alt="" />
            </div>
            <p className='description3 text-left'>
              Qrazy helps companies in multiple industries enhance their marketing efforts, ensure product authenticity, and improve customer engagement through seamless reward programs and powerful analytics.
            </p>
          </div>
        </section>

        <section className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center justify-center py-20'>
          <div className='lg:col-span-2'>
            <div className='w-full rounded-3xl overflow-hidden'>
              <img className='w-full' src="https://framerusercontent.com/images/huqHF6zHorUbZQbtJgs1I1oy0I.jpg" alt="" />
            </div>
          </div>
          <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='w-full h-60 md:h-80 p-10 md:p-14 flex flex-col justify-between rounded-3xl bg-rose-600 bg-opacity-5 col-span-2 sm:col-span-1'>
              <h1 className='text-5xl font-bold lg:text-6xl text-gray-300'>70%</h1>
              <p className='description3'>Users scanned QR codes to verify product authenticity.</p>
            </div>
            <div className='w-full h-60 md:h-80 p-10 md:p-14 flex flex-col justify-between rounded-3xl bg-sky-600 bg-opacity-5 col-span-2 sm:col-span-1'>
              <h1 className='text-5xl font-bold lg:text-6xl text-gray-300'>30%</h1>
              <p className='description3'>Users redeemed rewards after scanning QR codes.</p>
            </div>
            <div className='w-full h-60 md:h-80 p-10 md:p-14 flex flex-col justify-between rounded-3xl bg-green-600 bg-opacity-5 col-span-2'>
              <h1 className='text-5xl font-bold lg:text-6xl text-gray-300'>95%</h1>
              <p className='description3'>Increase in customer engagement through QR-based rewards.</p>
            </div>
          </div>

        </section>
      </section>



      <section className='max-w-8xl p-5 lg:px-10 py-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='heading2'>
            Ready to Boost Your Product's Authenticity and Marketing?
          </h1>
          <p className='description2'>
            Start using Qrazy today and watch your business grow through better customer engagement and verified product authenticity
          </p>
        </div>

        <div className='w-full flex-grow grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
          {
            steps.map((el, index) => (
              <div key={index} className={cn('w-full h-full rounded-3xl bg-neutral-900 overflow-hidden ', index == 1 ? "md:row-span-2" : "")}>
                {
                  el.image ?
                    <div className='w-full relative grid place-items-center'>
                      <img className='w-full h-full object-cover' src={el.imageBg} alt="" />
                      <img className=' absolute w-60 rounded-2xl' src={el.image} alt="" />
                    </div>
                    :
                    <div className='w-full h-full p-10 flex flex-col justify-center gap-5'>
                      <div className='bg-cyan-800 rounded-lg py-2 px-3 flex items-center gap-1 text-lg font-medium max-w-max'>
                        <SquareChevronRight className='size-6 text-white' />
                        <span>Step - {String(el.id).padStart(2, '0')}</span>
                      </div>
                      <h1 className='text-3xl font-semibold'>{el.title}</h1>
                      <p className='lg:text-lg text-sky-100 font-light'>{el.description}</p>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </section>

      <Contact />

      <Footer />
    </>
  )
}

export default Home