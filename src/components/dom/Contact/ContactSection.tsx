import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'

const Container = tw.div`h-screen snap-center`
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
      duration: 0.8,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const transitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  onScreen: {
    opacity: 1,
    y: 0,
  },
}

const name = ['contact', 'me']
const title = ['software', 'engineer']

export default function ContactSection() {
  return (
    <Container id='contact'>
      <Wrapper>
        <motion.div className={divClasses} initial='initial' whileInView='onscreen' variants={containerVariant}>
          <SubDiv>
            {name.map((word) => (
              <motion.h1
                key={word}
                className={h1Classes}
                initial='initial'
                variants={transitionVariants}
                whileInView={getRngTransition()}
              >
                {word.toUpperCase()}
              </motion.h1>
            ))}
          </SubDiv>
          <SubDiv>
            {title.map((word) => (
              <motion.h2
                key={word}
                className={h2Classes}
                initial='initial'
                variants={transitionVariants}
                whileInView={getRngTransition()}
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
