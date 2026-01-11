import { instrumental } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-[87vh] relative'>
      <div className='bg-black opacity-15 z-20 absolute inset-0 h-full w-full' />
      <div className='w-full h-full flex'>
        <div className='w-[50%] relative'>
          <video className=' h-full object-cover' src={"/femaleHair.mp4"} muted playsInline loop autoPlay /> 
          <h2 className={`${instrumental.className} text-3xl md:text-5xl  font-bold uppercase leading-16 absolute  text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-30`}>Unveil the Secret to Lustrous, Silky Hair</h2>
        </div>
        <div className='w-[50%] relative'>
          <Image className='w-full h-full object-cover object-left' src={"/herbal-soap.jpg"} alt='herbal soap hero iamge' width={500} height={1000} />
          <h2 className={`${instrumental.className} text-3xl md:text-5xl  font-bold uppercase leading-16 absolute  text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30`}>Herbal Soap Coming Soon</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
