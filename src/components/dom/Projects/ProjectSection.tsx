import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { motion, useAnimationControls, Variants, useInView } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'

const Container = tw.section`h-screen snap-center`
const Wrapper = tw.div`flex flex-col items-center justify-center w-full h-full`
const SubDiv = tw.div`flex flex-row items-center justify-center gap-2 md:gap-6`

const divClasses =
  'w-full select-none bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat px-4 py-8 text-center backdrop-blur-xl'
const h1Classes =
  'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-[1.15em] text-black/25 dark:text-white/25'
const h2Classes = 'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-widest text-black dark:text-white'

const containerVariant: Variants = {
  initial: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delayChildren: 5,
      staggerChildren: 2,
    },
  },
}

const transitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

const name = ['projects']
const title = ['software', 'engineer', 'test', 'tesasft', 'tefsst']

export default function ProjectSection() {
  return (
    <Container id='projects'>
      <Wrapper>
        <motion.div className={divClasses} initial='initial' whileInView='onscreen' variants={containerVariant}>
          {/* <SubDiv>
            {name.map((word) => (
              <h1
                key={word}
                className={h1Classes}
                // initial='initial'
                // variants={transitionVariants}
                // whileInView={getRngTransition()}
              >
                {word.toUpperCase()}
              </h1>
            ))}
          </SubDiv> */}
          <SubDiv>
            {title.map((word) => (
              <motion.h2
                key={word}
                className={h2Classes}
                // variants={transitionVariants}
                // initial='initial'
                // animate='onScreen'
              >
                {word.toUpperCase()}
              </motion.h2>
            ))}
          </SubDiv>
        </motion.div>
      </Wrapper>
    </Container>
  )
}
