import React from 'react'
import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

const Container = tw.div`h-screen bg-neutral-900/5 dark:bg-neutral-400/5 snap-center snap-always`
const Wrapper = tw.div`flex flex-col items-center justify-center w-full h-full`
const SubDiv = tw.div`flex flex-row items-center justify-center gap-6`

const divClasses =
  'w-full select-none bg-noise bg-[length:150px] bg-[0px_0px] bg-repeat px-4 py-8 text-center backdrop-blur-xl'
const h1Classes = 'cursor-default text-xl tracking-[1.15em] text-black/25 dark:text-white/25 md:text-3xl'
const h2Classes = 'cursor-default text-xl tracking-widest text-black dark:text-white md:text-3xl'

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2.5,
      delayChildren: 0.75,
      staggerChildren: 0.15,
    },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const name = 'julio nunez'
const title = 'software engineer'

export default function HeroBanner() {
  return (
    <Container id='home'>
      <Wrapper>
        <motion.div variants={containerVariant} initial='hidden' animate='show' className={divClasses}>
          <SubDiv>
            {name.split(' ').map((word) => (
              <motion.h1 key={word} variants={wordVariant} className={h1Classes}>
                {word.toUpperCase()}
              </motion.h1>
            ))}
          </SubDiv>
          <SubDiv>
            {title.split(' ').map((word) => (
              <motion.h2 key={word} variants={wordVariant} className={h2Classes}>
                {word.toUpperCase()}
              </motion.h2>
            ))}
          </SubDiv>
        </motion.div>
      </Wrapper>
    </Container>
  )
}
