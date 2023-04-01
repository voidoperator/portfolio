import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import { AboutMeProps } from '@/types/contentful'

const Container = tw.section`
w-full h-true
snap-center text-black dark:text-white overflow-hidden oflow
`
const Wrapper = tw.div`sm:h-full
relative overflow-hidden oflow
flex flex-col items-center justify-center
`
const AboutMeSection = tw.div`oflow font-sofiaprolight overflow-hidden sm:my-36
flex grow bg-noise-cards rounded-3xl shadow-2xl backdrop-blur-sm
font-normal text-xs md:text-sm lg:text-sm
sm:mx-10 mx-[20px] sm:max-w-[75%]
sm:h-[62.5vh] h-1/2
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow relative flex flex-row items-center grow
`
const ParagraphContainer = tw.div`
h-full
flex flex-col items-center justify-evenly
gap-0 sm:flex-col sm:items-start sm:px-6 md:px-8
`
const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full pt-24 md:pt-[68px] pb-4 2xl:pb-8
`
const TextContainer = tw.div`
flex flex-col items-center sm:gap-2 gap-[3px] sm:py-4 py-5
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-start px-6 sm:px-0
`
const ImageContainer = tw.div`
h-full
hidden sm:block overflow-hidden
sm:rounded-r-3xl rounded-t-3xl sm:rounded-tl-none
`
const Image = tw.img`
min-h-full
opacity-90 object-cover pointer-events-none
`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75 my-0 sm:my-10 hidden sm:block
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

export default function AboutSection({ data }: { data: AboutMeProps[] }) {
  const [{ sectionTitle, imgUrl, greeting, description }] = data
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
      </Wrapper>
    </Container>
  )
}
