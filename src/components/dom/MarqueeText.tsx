import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MarqueeSeparator } from './Icons/Icons'

const MarqueeContainer: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row gap-10 items-center justify-center w-screen
max-w-full overflow-hidden text-black dark:text-white
h-10 sm:h-14 md:h-20 lg:h-26 xl:h-32
`
const MarqueeWrapper: Motion.Tag<'div'> = tw(motion.div)`
absolute flex flex-row items-center justify-center whitespace-nowrap cursor-default uppercase
`
const twClasses = 'hollow cursor-default text-stroke-black dark:text-stroke-white'

type MarqueeTextProps = {
  string: string
  textSize?: string
  separatorSize?: string
  velocity?: number
  directionLeft?: boolean
}

export default function MarqueeText({
  string,
  textSize = 'text-9xl',
  separatorSize = 'h-6 sm:h-9',
  directionLeft = true,
}: MarqueeTextProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (marquee) {
      const calculateMarqueeSize = () => {
        setContentWidth(marqueeRef.current.offsetWidth)
      }
      calculateMarqueeSize()
      const handleResize = () => {
        calculateMarqueeSize()
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [marqueeRef])

  const leftAnimationDirection = directionLeft ? [0, -contentWidth / 2] : [0, contentWidth / 2]
  const rightAnimationDirection = directionLeft ? [contentWidth / 2, 0] : [-contentWidth / 2, 0]
  const velocity = contentWidth ? contentWidth / 100 : 15

  const marqueeVariant: Variants = {
    left: {
      x: leftAnimationDirection,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: velocity,
          ease: 'linear',
        },
      },
    },
    right: {
      x: rightAnimationDirection,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: velocity,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <div className='w-full overflow-hidden'>
      <MarqueeContainer whileHover={{ opacity: 0.9 }}>
        <MarqueeWrapper variants={marqueeVariant} whileInView='left' ref={marqueeRef}>
          <span className={twClasses + ' ' + textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={twClasses + ' ' + textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
        </MarqueeWrapper>
        <MarqueeWrapper variants={marqueeVariant} whileInView='right'>
          <span className={twClasses + ' ' + textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={twClasses + ' ' + textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
          <span className={textSize}>{string}</span>
          <MarqueeSeparator twClasses={separatorSize} />
        </MarqueeWrapper>
      </MarqueeContainer>
    </div>
  )
}
