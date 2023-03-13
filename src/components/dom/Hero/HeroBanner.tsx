import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import TypeIt from 'typeit-react'
import getRngTransition from '@/utility/getRngTransitions'
import JNSignatureMotion from '../Icons/Icons'

const Container = tw.section`h-screen snap-center`
const Wrapper = tw.div`flex flex-col justify-center py-[72px] w-full h-full uppercase`
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
    opacity: 0,
    y: -25,
    transition: {
      duration: 0.75,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
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
    y: -5,
  },
  onScreen: {
    opacity: 1,
    y: 0,
  },
  titleOnScreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 2,
    },
  },
}

const name = "hey, i'm"
const title = 'a software engineer'
const headline = '((turning lines of code into) => { real-world impact });'

export default function HeroBanner() {
  return (
    <Container id='home'>
      <Wrapper>
        <motion.div
          className={divClasses}
          initial='initial'
          whileInView='onscreen'
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <motion.div
            variants={containerVariant}
            initial='initial'
            whileInView='onscreen'
            viewport={{ once: true }}
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
                  viewport={{ once: true }}
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
                  whileInView='titleOnScreen'
                  viewport={{ once: true }}
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
