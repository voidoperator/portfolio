import React from 'react'

export default function HeroBanner({ heroBannerRef }) {
  return (
    <div className='h-screen bg-neutral-900/5 dark:bg-neutral-400/5' data-target='hero' ref={heroBannerRef}>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='w-full px-4 py-8 text-center bg-repeat select-none bg-noise bg-[length:150px] bg-[0px_0px] backdrop-blur-xl'>
          <h1 className='text-xl cursor-default text-black/25 tracking-[1.15em] md:text-3xl dark:text-white/25'>
            JULIO NUNEZ
          </h1>
          <h2 className='text-xl tracking-widest text-black cursor-default md:text-3xl dark:text-white'>
            SOFTWARE ENGINEER
          </h2>
        </div>
      </div>
    </div>
  )
}
