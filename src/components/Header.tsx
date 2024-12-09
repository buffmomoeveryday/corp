import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
export default function Header() {
  return (
    <div className='h-[277px] bg-[#121618] flex flex-col align-center shadow-slate-700 justify-center relative z-[999] pb-[3px]' >
      <Image src={"pattern.svg"} alt="pattern" height={86} width={704}
        className='absolute top-0 z-0 selection:bg-inherit' />
      <p>pattern</p>
      <p>logo</p>
      <Logo />
      <p>pageheading</p>
      <p>feedbackform</p>
    </div>
  )
}
