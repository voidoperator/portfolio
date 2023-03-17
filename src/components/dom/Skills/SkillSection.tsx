import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'

const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row items-center justify-center z-10 w-full h-[200px] mb-4 mt-10 sm:mt-12 md:mt-20 lg:mt-20 flex-grow-0
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`oflow
flex w-[90%] h-full max-h-[75vh] grow flex-row items-center justify-center gap-8 rounded-3xl bg-slate-50/75 backdrop-blur-sm
bg-noise shadow-2xl dark:bg-slate-800/60 dark:text-white xl:max-w-7xl xl:flex-row overflow-x-hidden overflow-y-auto
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-start px-6 py-2 text-black dark:text-white sm:px-0 sm:pt-0
`
const Container = tw.section`
h-screen w-full snap-center overflow-hidden relative
`
const Wrapper = tw.div`
flex flex-col items-start justify-around w-full h-full back
`
const AboutMeSection = tw.div`
flex w-full flex-col items-center justify-center grow pb-20
font-sofiaprolight font-normal text-xs md:text-sm lg:text-base
`
const Image = tw.img`
opacity-90 object-cover pointer-events-none
h-full w-full backdrop-blur-xl object-[0px,-40px] xl:object-[-125px,0px] sm:object-[-75px,0px]
`
const ImageContainer = tw.div`
overflow-hidden hidden sm:block
h-full w-full sm:max-w-[100px] md:max-w-[200px] lg:max-w-[300px]
sm:rounded-r-3xl rounded-t-3xl sm:rounded-tl-none
`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75
`
const ParagraphContainer = tw.div`
flex h-full w-3/4 grow flex-col items-center justify-center
gap-0 sm:flex-col sm:items-start sm:gap-8 sm:px-6 md:px-8
`

const content = ['Work Experience:', 'CacheHeap LLC', 'MealBox App']

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

export default function Skills() {
  return (
    <Container id='skills'>
      <Wrapper>
        <MarqueeSubWrapper
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.8 }}
        >
          <MarqueeText
            string={'skills'}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            directionLeft={true}
          />
        </MarqueeSubWrapper>
        <AboutMeSection>
          <ContentBoxMotion
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.8 }}
            variants={contentBoxVariant}
          >
            <ParagraphContainer>
              <Divider />
              {content.map((paragraph, index) => {
                return (
                  <ParagraphMotion
                    key={'skills' + index}
                    variants={paragraphVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {paragraph}
                  </ParagraphMotion>
                )
              })}
              <Divider />
            </ParagraphContainer>
            {/* <ImageContainer>
              <Image src='./img/temp/julionunez.webp' alt='photo of julio nunez' />
            </ImageContainer> */}
          </ContentBoxMotion>
        </AboutMeSection>
      </Wrapper>
    </Container>
  )
}
