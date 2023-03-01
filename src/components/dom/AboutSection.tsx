import React from 'react'

export default function AboutMe({ aboutMeRef }) {
  return (
    <div id='test-one' className='h-screen bg-neutral-900/5 dark:bg-red-400/50' data-target='test-one' ref={aboutMeRef}>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='w-full px-4 py-8 bg-repeat bg-noise bg-[length:50px] bg-[0px_0px] backdrop-blur-lg'>
          <h1 className='text-xl tracking-widest text-center text-black md:text-3xl dark:text-white'>Test Scroll</h1>
        </div>
      </div>
    </div>
  )
}
