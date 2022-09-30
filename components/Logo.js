import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" >
        <div className='h-10 hover:h-11 duration-200 cursor-pointer'>
            <img src='/img/pokemon-logo-text.png' className='h-full'/>
        </div>
    </Link>
  )
}

export default Logo