import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import TypeIt from 'typeit-react'
import getRngTransition from '@/utility/getRngTransitions'
import JNSignatureMotion from '../Icons/Icons'

const Container = tw.div`h-screen snap-center`
const Wrapper = tw.div`flex flex-col justify-center py-[72px] w-full h-full`
const SubDiv = tw.div`flex flex-row items-center justify-center`

const divClasses =
  'flex w-full select-none flex-col gap-1 bg-zinc-200/25 dark:bg-zinc-900/25 bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat py-4 text-center backdrop-blur-[12px] sm:gap-2 md:gap-4 lg:gap-8'
const nameClasses =
  'cursor-default whitespace-nowrap py-2 text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-black dark:text-white'
const headlineClasses =
  'cursor-default text-xs md:text-sm lg:text-lg text-black dark:text-white whitespace-nowrap py-2 font-vhs sm:tracking-[4px] tracking-[0.5px]'

const titleClasses =
  'cursor-default whitespace-nowrap py-2 font-turnpike text-sm text-black dark:text-slate-100 sm:text-[0.91rem] md:text-[1.36rem] lg:text-[2.25rem]'

const containerVariant: Variants = {
  initial: {
    // scale: 0,
    opacity: 0,
    // y: -25,
    transition: {
      duration: 0.75,
    },
  },
  onscreen: {
    opacity: 1,
    // scale: 1,
    // y: 0,
    transition: {
      duration: 0.8,
      delayChildren: 5,
      staggerChildren: 10,
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

const name = "HEY, I'M"
const title = 'A SOFTWARE ENGINEER'
const headline = '((TURNING LINES OF CODE INTO) => { REAL-WORLD IMPACT });'

export default function HeroBanner() {
  return (
    <Container id='home'>
      <Wrapper>
        <motion.div
          className={divClasses}
          initial='initial'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariant}
        >
          <motion.div
            variants={containerVariant}
            initial='initial'
            whileInView='onscreen'
            className='flex flex-row items-center justify-center gap-2 fill-none stroke-black dark:stroke-white md:gap-3 lg:gap-5'
          >
            {name.split(' ').map((word, index) => {
              const key = word + index
              return (
                <motion.h1
                  key={key}
                  className={nameClasses}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {word}
                </motion.h1>
              )
            })}
            <JNSignatureMotion twClasses={'h-11 sm:h-13 md:h-[4.5rem] lg:h-28'} />
          </motion.div>
          <SubDiv className='gap-2 md:gap-3 lg:gap-5'>
            {title.split(' ').map((word, index) => {
              const key = word + index
              return (
                <motion.h2
                  key={key}
                  className={titleClasses}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {word}
                </motion.h2>
              )
            })}
          </SubDiv>
          <SubDiv className='gap-2 md:gap-2 lg:gap-4'>
            <TypeIt className={headlineClasses}>{headline}</TypeIt>
          </SubDiv>
        </motion.div>
      </Wrapper>
    </Container>
  )
}
