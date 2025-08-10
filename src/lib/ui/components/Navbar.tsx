import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { motion } from 'react'
// import { Camera } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-screen h-15 bg-[#fff] shadow-sm shadow-[#01411C] flex justify-between  py-1 px-2 items-center'>
      <div className="left flex justify-center items-end">
        <Image src='/web-app-manifest-512x512.png' width={45} height={45} alt='HamaraPakistan' />
        <h1 className="text-xl  text-[#01411C]">Hum Sab Ka Pakistan</h1>
        </div>
      <div className="right flex gap-2 px-2 ">
        <Link href="/" className='border-2 rounded text-black/70 border-black/70 py-1 px-2 active:text-[#01411C] active:border-[#01411C]' >Home</Link> 
              <Link href="/history" className='border-2 rounded text-black/70 border-black/70 py-1 px-2 active:text-[#01411C] active:border-[#01411C]' >History</Link>    
           <Link href="/fact" className='border-2 rounded text-black/70 border-black/70 py-1 px-2 active:text-[#01411C] active:border-[#01411C]' >Facts</Link>
      </div>
    </div>
  )
}

export default Navbar