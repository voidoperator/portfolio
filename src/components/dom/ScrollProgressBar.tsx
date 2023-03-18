import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const ProgressBar: Motion.Tag<'div'> = tw(motion.div)`
absolute top-0 left-0 right-0 h-1 bg-red-500 origin-[0%] z-50 w-full shadow-md
`

type ScrollProgressBarProps = {
  containerRef?: React.RefObject<HTMLElement>
  scrollProgress?: number
}

export default function ScrollProgressBar({ containerRef, scrollProgress }: ScrollProgressBarProps) {
  const scrollPercentage = useMotionValue(0)

  useEffect(() => {
    if (scrollProgress) return
    if (containerRef) {
      const scrollTracker = containerRef.current
      scrollTracker.addEventListener('scroll', () => {
        const scrollLeft = scrollTracker.scrollLeft
        const scrollWidth = scrollTracker.scrollWidth
        const clientWidth = scrollTracker.clientWidth

        const maxScroll = scrollWidth - clientWidth
        const scrollPercentageValue = scrollLeft / maxScroll
        scrollPercentage.set(scrollPercentageValue)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (containerRef) return
    if (scrollProgress) {
      scrollPercentage.set(scrollProgress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollProgress])

  const scaleX = useSpring(scrollPercentage, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <ProgressBar style={{ scaleX }} />
}
