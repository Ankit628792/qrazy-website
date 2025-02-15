import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

function Home() {
  const images = [
    "https://framerusercontent.com/images/8q8nXuwH5YTP5An3jtF8arEo4.jpg",
    "https://framerusercontent.com/images/Pu1so0PrGmlXcVlSrpjpWk0sroU.png",
    "https://framerusercontent.com/images/yfu8D1APjDRJwHLu7lfi8guiWBw.jpg",
    "https://framerusercontent.com/images/kKLOxjvEuwm05UTP2mjXtLbfvNI.jpg",
    "https://framerusercontent.com/images/qjQLktFztOoxSRNmTxMtaXRqDCo.jpg"
  ]
  return (
    <>
      <header className='flex flex-col gap-2 items-center justify-center p-5 md:p-10 min-h-[90vh]'>
        <div className='border border-violet-500 text-violet-500 rounded-2xl flex items-center gap-3 py-1.5 px-3 max-w-max text-sm' >
          <p className='bg-violet-500 bg-opacity-20 rounded-xl px-4 py-2'>New</p>
          <p>Sleep tracking is now available!</p>
        </div>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold max-w-4xl text-center text-sky-50'>Guiding you toward a healthier & active lifestyle</h1>
        <p className='text-sky-50 text-opacity-60 sm:text-lg lg:text-xl xl:text-2xl text-center'>Empowering your path to health and activity through expert guidance and support.</p>

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
            Tailored for healthy Lifestyle
          </h1>
          <p className='description2'>
            Customized features crafted to support your journey towards a vibrant and balanced lifestyle.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 py-20 px-5'>
          <div className=' bg-black p-7 md:p-10 lg:p-16 xl:p-20 w-full lg:col-span-2 rounded-3xl flex items-center flex-col-reverse lg:flex-row justify-between gap-y-12 gap-x-20'>
            <div className='flex flex-col gap-4 items-start flex-grow'>
              <h1 className='heading3'>
                Sleep tracking
              </h1>
              <p className='description3'>
                Monitor and analyze your sleep patterns effortlessly with our advanced tracking technology, ensuring optimal rest and rejuvenation every night.
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
                Mindfulness training
              </h1>
              <p className='description3'>
                Seamlessly monitor your physical activities, set personalized goals, and track progress towards a more vibrant and healthier lifestyle.
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
                Health benefits
              </h1>
              <p className='description3'>
                Unlock a wealth of health benefits, enhancing vitality, resilience, & overall well-being with our comprehensive wellness solutions.
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
                Mindfulness training
              </h1>
              <p className='description3'>
                Enhance mental well-being and make mindfulness through guided training, empowering you to thrive in today's fast-paced world.
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
    </>
  )
}

export default Home