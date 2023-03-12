import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'
import MarqueeText from '../MarqueeText'

const Container = tw.section`h-screen snap-center`
const Wrapper = tw.div`flex flex-col items-center justify-end w-full h-full`
const SubDiv = `flex flex-row items-center justify-center gap-2 md:gap-6 w-full`
const MarqueeSpan = tw.span`text-8xl uppercase`

const divClasses =
  'w-full select-none bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat px-4 py-8 text-center backdrop-blur-xl'
const h1Classes =
  'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-[1.15em] text-black/25 dark:text-white/25'
const h2Classes = 'cursor-default text-xs sm:text-xs md:text-xl lg:text-3xl tracking-widest text-black dark:text-white'

const containerVariant: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
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
            separator={'x'}
            textSize={'text-[80px]'}
            velocity={15}
            directionRight={true}
          />
        </motion.div>
      </Wrapper>
    </Container>
  )
}
