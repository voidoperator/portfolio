import React from 'react'

export default function ExperienceSection({ experienceRef }) {
  return (
    <div
      id='test-two'
      className='h-screen bg-neutral-900/5 dark:bg-neutral-400/5'
      data-target='test-two'
      ref={experienceRef}
    >
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='w-full px-4 py-8 bg-repeat bg-noise bg-[length:50px] bg-[0px_0px] backdrop-blur-lg'>
          <h1 className='text-xl tracking-widest text-center text-black md:text-3xl dark:text-white'>
            Test NUMBER Two
          </h1>
        </div>
      </div>
    </div>
  )
}
