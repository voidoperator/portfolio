import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { motion, useInView, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'

const Container = tw.section`h-screen snap-center`
const Wrapper = tw.div`flex flex-col items-center justify-between pt-10 sm:pt-16 md:pt-20 lg:pt-28 w-full h-full`
const subWrapper = 'flex flex-row items-center justify-center gap-2 md:gap-6 w-full'
const Spacer = tw.div`flex flex-1`

const content = ['Hello!']

const marqueeWrapperVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  },
}

const contentBoxVariant: Variants = {
  initial: {
    opacity: 0,
    y: -250,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
}

const paragraphVariant: Variants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 0.3,
      duration: 0.6,
    },
  },
}

export default function About() {
  const contentWrapperRef = useRef(null)
  const isInView = useInView(contentWrapperRef, { once: true, amount: 'all' })

  return (
    <Container id='about'>
      <Wrapper>
        <motion.div
          className={subWrapper}
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
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
        <div className='flex w-4/5 flex-col py-10 px-40 font-sans text-lg font-semibold'>
          <motion.div
            ref={contentWrapperRef}
            animate={isInView ? 'animate' : 'initial'}
            variants={contentBoxVariant}
            className='flex h-full w-full flex-col gap-5 rounded-3xl bg-slate-50/75 bg-noise p-10 text-black dark:bg-slate-800/60 dark:text-white'
          >
            {content.map((paragraph, index) => {
              const something = 'test'
              return (
                <motion.p
                  key={'aboutme' + index}
                  variants={paragraphVariant}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0.8 }}
                  className='text-black dark:text-white'
                >
                  {paragraph}
                </motion.p>
              )
            })}
          </motion.div>
        </div>
        <Spacer />
      </Wrapper>
    </Container>
  )
}
