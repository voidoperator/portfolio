import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'

const Container = tw.section`
snap-center text-black dark:text-white w-full overflow-hidden oflow
`
const Wrapper = tw.div`relative
flex flex-col items-center justify-center min-h-screen
`
const AboutMeSection = tw.div`xl:w-2/3 lg:w-3/4 md:m-20 sm:m-10 m-6
flex grow bg-noise-cards rounded-3xl shadow-2xl backdrop-blur-sm
font-sofiaprolight font-normal text-xs md:text-sm lg:text-base
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow relative flex flex-row
`
const ParagraphContainer = tw.div`h-full
flex flex-col items-center justify-evenly
gap-0 sm:flex-col sm:items-start sm:px-6 md:px-8
`
const Spacer = tw.div`
w-full
`
const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full absolute sm:top-28 top-28 left-0
`
const TextContainer = tw.div`
flex flex-col items-center gap-2
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-start px-6 sm:px-0
`
const ImageContainer = tw.div`h-full
hidden sm:block overflow-hidden
sm:rounded-r-3xl rounded-t-3xl sm:rounded-tl-none
`
const Image = tw.img`min-h-full
opacity-90 object-cover pointer-events-none
`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75 my-3 sm:my-10 hidden sm:block
`

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

export default function About({ items }) {
  const [{ sectionTitle, imgUrl, greeting, description }] = items
  return (
    <Container id='about'>
      <Wrapper>
        <MarqueeSubWrapper
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0 }}
        >
          <MarqueeText
            string={sectionTitle}
            directionLeft={true}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
          />
        </MarqueeSubWrapper>
        <Spacer className='h-[8rem]' />
        <AboutMeSection>
          <ContentBoxMotion
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.4 }}
            variants={contentBoxVariant}
          >
            <ParagraphContainer>
              <Divider />
              <TextContainer>
                <ParagraphMotion
                  variants={paragraphVariant}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0.2 }}
                  className='text-xl font-bold'
                >
                  {greeting}
                </ParagraphMotion>
                {description.map((paragraph) => {
                  const { id, text } = paragraph
                  return (
                    <ParagraphMotion
                      key={id}
                      variants={paragraphVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {text}
                    </ParagraphMotion>
                  )
                })}
              </TextContainer>
              <Divider />
            </ParagraphContainer>
            <ImageContainer>
              <Image src={imgUrl.url} alt={imgUrl.title} />
            </ImageContainer>
          </ContentBoxMotion>
        </AboutMeSection>
        <Spacer className='h-[7rem] sm:h-[5rem]' />
      </Wrapper>
    </Container>
  )
}
