import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function RubberBandElements({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const controls = useAnimationControls()
  const rubberBand = () => {
    controls.start({
      transform: [
        'scale(1, 1)',
        'scale(1.2, 0.75)',
        'scale(0.75, 1.25)',
        'scale(1.25, 0.85)',
        'scale(0.9, 1.05)',
        'scale(1, 1)',
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 1],
      },
    })
    setIsPlaying(true)
  }
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand()
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  )
}
