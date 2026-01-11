import { instrumental } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='md:h-[87vh] relative'>
      <div className='bg-black opacity-20 z-20 absolute inset-0 h-full w-full' />
      <div className='w-full h-full flex flex-col md:flex-row'>

        <div className='w-full h-full md:w-[50%] relative'>
          <video className='h-[50vh] md:h-full object-cover' src={"/femaleHair.mp4"} muted playsInline loop autoPlay /> 
          <div className='absolute  text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-30 flex flex-col items-center gap-5'>
            <h2 className={`${instrumental.className} text-3xl md:text-5xl  font-bold  leading-16  text-center w-full `}>Unveil the Secret to Lustrous, Silky Hair</h2>
            <button className='text-center py-2 px-4 rounded-full border border-white backdrop-blur-xl'>Order Now</button>
          </div>
        </div>

        <div className='md:w-[50%] relative'>
          <Image className='w-full h-[50vh] md:h-full object-cover object-left' src={"/herbal-soap.jpg"} alt='herbal soap hero iamge' width={500} height={1000} />
          <div className='absolute  text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-30 flex flex-col items-center gap-5'>
            <h2 className={`${instrumental.className} text-3xl md:text-5xl  font-bold uppercase leading-16`}>Herbal Soap</h2>
            <button className='text-center py-2 px-4 rounded-full border border-white backdrop-blur-xl'>Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
