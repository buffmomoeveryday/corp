import React from 'react'

export default function Footer() {
  // const getCurrrentYear = () =>{
  //     new Date().getFullYear();
  // }
  return (
    <div>
      <footer className='absolute -rotate-90 left-[-225px] bottom-[174px]'>
        <small className='text-[#a6adb5] text-[11px]  selection:bg-[rgba(255,255,255,0.1)]'>
          <p className='opacity-40'>&copy; {new Date().getFullYear()} Copyright by
            <a href='https://github.com/Buffmomoeveryday'
              target='_blank'>
              {" "}
              Siddhartha Khanal</a></p>
        </small>
      </footer>
    </div>
  )
}
