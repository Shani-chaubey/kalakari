import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 mr-3 md:mr-0'>
        <Image src={'/logo.png'} width={100} height={100} alt='brand' className='w-32'/>
        {/* <p className='text-2xl font-bold'>TechBazer</p> */}
    </Link>
  )
}

export default Logo