import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'

const Container = tw.div`h-screen snap-start snap-always`
const Wrapper = tw.div`flex flex-col justify-center py-[72px] w-full h-full`
const SubDiv = tw.div`flex flex-row gap-2 md:gap-4 px-8`

const divClasses =
  'flex flex-col sm:gap-2 md:gap-4 gap-1 lg:gap-8 w-full select-none bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat text-center backdrop-blur-[12px] py-4'
const nameClasses = 'cursor-default whitespace-nowrap py-2 text-2xl sm:text-2xl md:text-4xl lg:text-6xl'
const headlineClasses =
  'cursor-default text-xs sm:text-xs md:text-sm lg:text-lg text-black dark:text-white whitespace-nowrap py-2 font-vhs tracking-[-5em]'

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

const name = "HEY, I'M Julio Nunez"
const title = 'A SOFTWARE ENGINEER'
const headline = '< C O D I N G  W I T H  C R E A T I V I T Y / >'
const subheadline = '{ T U R N I N G  C O D E  I N T O  R E A L - W O R L D  I M P A C T }'

export default function HeroBanner() {
  return (
    <Container id='home'>
      <Wrapper>
        <motion.div
          // className={divClasses}
          className='flex w-full select-none flex-col gap-1 bg-slate-800/0 bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat py-4 text-center backdrop-blur-[12px] sm:gap-2 md:gap-4 lg:gap-8'
          initial='initial'
          whileInView='onscreen'
          variants={containerVariant}
        >
          <SubDiv className='justify-center'>
            {name.split(' ').map((word) => {
              const name = word === 'Julio' || word === 'Nunez'
              const font = name ? 'font-urban' : 'font-turnpike'
              const color = name ? 'text-slate-900/75 dark:text-white' : 'text-black dark:text-white'
              return (
                <motion.h1
                  key={word}
                  className={`${nameClasses} ${color} ${font}`}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView={getRngTransition()}
                >
                  {word}
                </motion.h1>
              )
            })}
          </SubDiv>
          <SubDiv className='justify-center'>
            {title.split(' ').map((word) => {
              return (
                <motion.h2
                  key={word}
                  className={titleClasses}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView={getRngTransition()}
                >
                  {word}
                </motion.h2>
              )
            })}
          </SubDiv>
        </motion.div>
        <motion.div
          className='flex w-full flex-col'
          initial='initial'
          whileInView='onscreen'
          variants={containerVariant}
        >
          <SubDiv className='justify-center bg-slate-400/0'>
            {headline.split(' ').map((word) => (
              <motion.h3
                key={word}
                className={headlineClasses}
                initial='initial'
                variants={transitionVariants}
                whileInView={getRngTransition()}
              >
                {word.toUpperCase()}
              </motion.h3>
            ))}
          </SubDiv>
          <SubDiv className='justify-center bg-slate-800/0'>
            {subheadline.split(' ').map((word) => (
              <motion.h3
                key={word}
                className={headlineClasses}
                initial='initial'
                variants={transitionVariants}
                whileInView={getRngTransition()}
              >
                {word.toUpperCase()}
              </motion.h3>
            ))}
          </SubDiv>
        </motion.div>
      </Wrapper>
    </Container>
  )
}
