import { instrumental } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

const Collection = () => {
  return (
    <section className="py-16 min-h-screen bg-main">
    <div className="container mx-auto text-center">
    <h2 className={`${instrumental.className} text-[40px] sm:text-5xl  text-white mb-12`}>
      Our Collections
    </h2>

    <div className="flex px-5 justify-center">

      {/* Card 3 */}
      <div className="bg-white rounded h-full max-w-[400px] overflow-hidden">
        <div className="p-4 flex justify-between items-center text-left h-full">
          <h3 className={`${instrumental.className} text-3xl text-center text-dark mb-3`}>Hair Oil</h3>
          <button className='py-1.5 px-2.5 text-center rounded-full border border-dark ' > <Link href={"/"}><FiArrowUpRight className='inline-block' /></Link></button>
        </div>
        <Image
          width={400}
          height={350}
          src="/oil.jpg"
          alt="Coconut Hair Oil"
          className="w-full object-cover object-bottom hover:scale-105 transition-all duration-200"
        />
      </div>
    </div>
  </div>
  {/* <Image src={"/leave-1.jpg"} alt='leave' width={100} height={100} /> */}
</section>

  )
}

export default Collection
