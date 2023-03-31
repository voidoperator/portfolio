import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import TypeIt from 'typeit-react'
import getRngTransition from '@/utility/getRngTransitions'
import JNSignatureMotion from '../Icons/Icons'
import { HeroBannerProps } from '@/types/contentful'

const Container = tw.section`
h-true snap-center overflow-hidden oflow
`
const Wrapper = tw.div`
flex flex-col justify-center py-[72px] w-full h-full uppercase
`
const SubDiv = tw.div`
flex flex-row items-center justify-center
`
const MotionWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex w-full select-none flex-col gap-1 bg-zinc-200/25 dark:bg-zinc-900/25
py-4 text-center backdrop-blur-[12px] sm:gap-2 md:gap-4 lg:gap-8 bg-noise-full
`
const NameMotion: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row items-center justify-center gap-2 fill-none
stroke-black dark:stroke-white md:gap-3 lg:gap-5
`
const HeadingMotion: Motion.Tag<'h1'> = tw(motion.h1)`
cursor-default whitespace-nowrap py-2
text-2xl sm:text-2xl md:text-4xl lg:text-6xl
text-black dark:text-white
`
const TextMotion: Motion.Tag<'h2'> = tw(motion.h2)`
cursor-default whitespace-nowrap py-2 font-turnpike
text-black dark:text-slate-100
text-sm sm:text-[0.91rem] md:text-[1.36rem] lg:text-[2.25rem]
`
const Typewritter: typeof TypeIt = tw(TypeIt)`
cursor-default text-xs md:text-sm lg:text-lg text-black dark:text-white
whitespace-nowrap py-2 font-vhs sm:tracking-[4px] tracking-[0.5px]
`

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

export default function HeroBanner({ data }: { data: HeroBannerProps[] }) {
  const [{ heroGreeting, heroHeadline, heroSlogan }] = data
  return (
    <Container id='home'>
      <Wrapper>
        <MotionWrapper initial='initial' whileInView='onscreen' viewport={{ once: true }} variants={containerVariant}>
          <NameMotion variants={containerVariant} initial='initial' whileInView='onscreen' viewport={{ once: true }}>
            {heroGreeting.split(' ').map((word, index) => {
              const key = word + index
              return (
                <HeadingMotion
                  key={key}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView={getRngTransition()}
                  viewport={{ once: true }}
                >
                  {word}
                </HeadingMotion>
              )
            })}
            <JNSignatureMotion twClasses='h-11 sm:h-13 md:h-[4.5rem] lg:h-28' />
          </NameMotion>
          <SubDiv className='gap-2 md:gap-3 lg:gap-5'>
            {heroHeadline.split(' ').map((word, index) => {
              const key = word + index
              return (
                <TextMotion
                  key={key}
                  initial='initial'
                  variants={transitionVariants}
                  whileInView='titleOnScreen'
                  viewport={{ once: true }}
                >
                  {word}
                </TextMotion>
              )
            })}
          </SubDiv>
          <SubDiv className='gap-2 md:gap-2 lg:gap-4'>
            <Typewritter as='p' options={{ waitUntilVisible: true, lifeLike: true }}>
              {heroSlogan}
            </Typewritter>
          </SubDiv>
        </MotionWrapper>
      </Wrapper>
    </Container>
  )
}
