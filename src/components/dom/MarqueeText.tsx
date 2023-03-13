import { motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MarqueeSeparator } from './Icons/Icons'

const marqueeContainer =
  'flex flex-row gap-10 relative h-[206px] items-center justify-center w-screen max-w-full overflow-x-hidden text-black dark:text-white'
const marqueeWrap = 'absolute flex flex-row items-center justify-center whitespace-nowrap cursor-default uppercase'
const spanClasses = 'hollow cursor-default text-stroke-black dark:text-stroke-white'

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
    <motion.div className={marqueeContainer} whileHover={{ opacity: 0.9 }}>
      <motion.div className={marqueeWrap} variants={marqueeVariant} whileInView='left' ref={marqueeRef}>
        <span className={spanClasses + ' ' + textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={spanClasses + ' ' + textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
      </motion.div>
      <motion.div className={marqueeWrap} variants={marqueeVariant} whileInView='right'>
        <span className={spanClasses + ' ' + textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={spanClasses + ' ' + textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
        <span className={textSize}>{string}</span>
        <MarqueeSeparator twClasses={separatorSize} />
      </motion.div>
    </motion.div>
  )
}
