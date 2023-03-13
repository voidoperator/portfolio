import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'
import MarqueeText from '../MarqueeText'

const Container = tw.section`h-screen snap-center`
const Wrapper = tw.div`flex flex-col items-center justify-between pt-10 sm:pt-16 md:pt-20 lg:pt-28 w-full h-full`
const SubDiv = `flex flex-row items-center justify-center gap-2 md:gap-6 w-full`
const Spacer = tw.div`flex flex-1`

const divClasses =
  'w-full select-none bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat px-4 py-8 text-center backdrop-blur-xl'
const h1Classes =
  'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-[1.15em] text-black/25 dark:text-white/25'
const h2Classes = 'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-widest text-black dark:text-white'

const containerVariant: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 2.5,
    },
  },
}

export default function About() {
  return (
    <Container id='about'>
      <Wrapper>
        <motion.div
          className={SubDiv}
          variants={containerVariant}
          initial='initial'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
        >
          <MarqueeText
            string={'about me'}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            directionLeft={true}
          />
        </motion.div>
        <Spacer />

        <Spacer />
      </Wrapper>
    </Container>
  )
}
