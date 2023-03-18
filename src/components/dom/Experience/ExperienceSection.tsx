import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import ScrollProgressBar from '../ScrollProgressBar'
import { CacheHeapIcon, BlackTiesIcon, MealBoxIcon, TwitterIcon } from '../Icons/Icons'
import type { ExperienceProps } from '@/types/contentful'

const icons = {
  CacheHeap: CacheHeapIcon,
  Twitter: TwitterIcon,
  Blackties: BlackTiesIcon,
  MealBox: MealBoxIcon,
}

const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row items-center justify-center z-10 w-full h-[200px] mb-4 mt-10 sm:mt-12 md:mt-20 lg:mt-20 flex-grow-0
`
const Container = tw.section`
h-screen w-full snap-center overflow-hidden text-black dark:text-white
`
const Wrapper = tw.div`
flex flex-col h-full w-full
`
// justify-start items-stretch
const ExperienceSection = tw.div`scroll-smooth oflow overflow-x-scroll h-full w-full m-auto p-[-2.50rem]
flex flex-row snap-x snap-mandatory
font-sofiaprolight font-normal text-xs md:text-sm lg:text-base 
`
const ContentBoxWrapper = tw.div`flex snap-center w-full
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(
  motion.div,
)`m-10 w-screen md:w-[calc(50vw-80px)] lg:w-[calc(33.33vw-80px)] xl:w-full
overflow-auto rounded-3xl oflow
shadow-2xl backdrop-blur-sm
bg-noise-cards
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-center px-6 py-2 sm:px-0 sm:pt-0
`
const ImageContainer = tw.div`
overflow-hidden hidden sm:block pb-4 pt-8 self-center
w-full sm:max-w-[100px] md:max-w-[200px] lg:max-w-[300px]
hover:opacity-60 transition-all duration-300
`
const Divider = tw.div`
h-[1px] w-full bg-black/40 dark:bg-white/40
`
const ParagraphContainer = tw.div`
flex h-full grow flex-col justify-start px-8 gap-4
`
const twClasses = 'transition-all text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400'

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

export default function Experience({ items }: { items: ExperienceProps[] }) {
  const scrollRef = useRef(null)
  return (
    <Container id='experience'>
      <Wrapper id='wrapper'>
        <MarqueeSubWrapper
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.8 }}
        >
          <MarqueeText
            string={'experience'}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            directionLeft={false}
          />
        </MarqueeSubWrapper>
        <div className='relative'>
          <ScrollProgressBar containerRef={scrollRef} />
        </div>
        <ExperienceSection id='experience-section' ref={scrollRef}>
          {items.map((job) => {
            const { name, title, startDate, endDate, svgIconName, description, sys } = job
            const IconComponent = icons[svgIconName]
            return (
              <ContentBoxWrapper id='content-box-wrapper' key={sys.id}>
                <ContentBoxMotion
                  id='content-box-motion'
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0 }}
                  variants={contentBoxVariant}
                >
                  <ParagraphContainer>
                    <ImageContainer title={name}>
                      <IconComponent alt={name} twClasses={twClasses} />
                    </ImageContainer>
                    <Divider />
                    <div className='sr-only'>{name}</div>
                    <ParagraphMotion
                      variants={paragraphVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{ once: true, amount: 0 }}
                      className='font-sofiapro text-xl'
                    >
                      {title}
                    </ParagraphMotion>
                    <Divider />
                    <ParagraphMotion
                      variants={paragraphVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{ once: true, amount: 0 }}
                      className='flex items-center justify-between gap-3'
                    >
                      <>
                        <span>{startDate}</span>
                        <span>{' - '}</span>
                        <span>{endDate}</span>
                      </>
                    </ParagraphMotion>
                    <Divider />
                    <ul className='flex h-1/2 list-disc flex-col justify-evenly'>
                      {description.map((bulletPoint, index) => {
                        return (
                          <li key={bulletPoint + index} className='list-outside'>
                            <ParagraphMotion
                              variants={paragraphVariant}
                              initial='initial'
                              whileInView='animate'
                              viewport={{ once: true, amount: 0 }}
                            >
                              {bulletPoint}
                            </ParagraphMotion>
                          </li>
                        )
                      })}
                    </ul>
                  </ParagraphContainer>
                </ContentBoxMotion>
              </ContentBoxWrapper>
            )
          })}
        </ExperienceSection>
      </Wrapper>
    </Container>
  )
}
