import { motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'

const MarqueeDiv = tw.div`flex flex-row gap-10 relative h-[206px] items-center justify-center w-screen max-w-full overflow-x-hidden text-black dark:text-white`
const marqueeWrap = 'absolute flex flex-row px-5 gap-10 items-center justify-center whitespace-nowrap'

type MarqueeTextProps = {
  string: string
  separator: string
  textSize?: string
  separatorSize?: string
  velocity?: number
  directionRight?: boolean
}

export default function MarqueeText({
  string,
  separator,
  textSize = 'text-9xl',
  separatorSize = 'text-8xl',
  velocity = 5,
  directionRight = true,
}: MarqueeTextProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth)
    }
  }, [contentRef])

  const leftAnimationDirection = directionRight ? [0, contentWidth] : [0, -contentWidth]
  const rightAnimationDirection = directionRight ? [-contentWidth, 0] : [contentWidth, 0]

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
    <MarqueeDiv>
      <motion.div className={marqueeWrap} variants={marqueeVariant} animate='left' ref={contentRef}>
        <span className={`hollow text-stroke-black dark:text-stroke-white ${textSize} uppercase`}>{string}</span>
        <span className={`gradient mx-5 font-titlingthin ${separatorSize} uppercase`}>{separator}</span>
        <span className={`${textSize} uppercase`}>{string}</span>
        <span className={`gradient mx-5 font-titlingthin ${separatorSize} uppercase`}>{separator}</span>
      </motion.div>
      <motion.div className={marqueeWrap} variants={marqueeVariant} animate='right'>
        <span className={`hollow text-stroke-black dark:text-stroke-white ${textSize} uppercase`}>{string}</span>
        <span className={`gradient mx-5 font-titlingthin ${separatorSize} uppercase`}>{separator}</span>
        <span className={`${textSize} uppercase`}>{string}</span>
        <span className={`gradient mx-5 font-titlingthin ${separatorSize} uppercase`}>{separator}</span>
      </motion.div>
    </MarqueeDiv>
  )
}
