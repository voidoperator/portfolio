import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import { CacheHeapIcon, BlackTiesIcon, MealBoxIcon, TwitterIcon } from '../Icons/Icons'

const icons = {
  CacheHeap: CacheHeapIcon,
  Twitter: TwitterIcon,
  Blackties: BlackTiesIcon,
  MealBox: MealBoxIcon,
}

const svgIconClasses =
  'transition-all h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400'

const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row items-center justify-center z-10 w-full h-[200px] mb-4 mt-10 sm:mt-12 md:mt-20 lg:mt-20 flex-grow-0
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`oflow
flex w-[92.5%] h-full grow flex-row items-center justify-center
overflow-y-auto overflow-x-hidden rounded-3xl
bg-slate-50/75 shadow-2xl backdrop-blur-sm
dark:bg-slate-800/60 dark:text-white xl:max-w-7xl xl:flex-row
bg-noise-double
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-center px-6 py-2 text-black dark:text-white sm:px-0 sm:pt-0
`
const Container = tw.section`
h-screen w-full snap-center overflow-hidden relative
`
const Wrapper = tw.div`
flex flex-col items-start justify-around w-full h-full back
`
const ExperienceSection = tw.div`px-8 py-8 gap-8
flex w-full flex-row items-center justify-center grow
font-sofiaprolight font-normal text-xs md:text-sm lg:text-base
`
const ImageContainer = tw.div`
overflow-hidden hidden sm:block pb-4 pt-8 self-center
w-full sm:max-w-[100px] md:max-w-[200px] lg:max-w-[300px]
text-black dark:text-white hover:opacity-60 transition-all duration-300
`
const Divider = tw.div`
h-[1px] w-full bg-black/40 dark:bg-white/40
`
const ParagraphContainer = tw.div`
flex h-full w-3/4 grow flex-col justify-start
gap-1 sm:gap-8 px-8
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

const content = [
  {
    name: 'CacheHeap',
    jobTitle: 'Software Engineer',
    startDate: '01/01/2001',
    endDate: 'Present',
    svgIconName: 'CacheHeap',
    description: [
      'Magna anim sunt minim qui. Culpa deserunt sint consectetur cillum aliqua.',
      'Anim adipisicing consectetur eu consequat ad reprehenderit ex veniam in labore id exercitation laboris consequat.',
      'Ut nulla do exercitation ipsum ex deserunt dolor pariatur.',
    ],
  },
  {
    name: 'Twitter',
    jobTitle: 'Software Engineer',
    startDate: '01/01/2001',
    endDate: '12/31/2022',
    svgIconName: 'Twitter',
    description: [
      'Magna anim sunt minim qui. Culpa deserunt sint consectetur cillum aliqua.',
      'Anim adipisicing consectetur eu consequat ad reprehenderit ex veniam in labore id exercitation laboris consequat.',
      'Ut nulla do exercitation ipsum ex deserunt dolor pariatur.',
    ],
  },
  {
    name: 'MealBox',
    jobTitle: 'Software Engineer',
    startDate: '01/01/2001',
    endDate: '12/31/2022',
    svgIconName: 'MealBox',
    description: [
      'Magna anim sunt minim qui. Culpa deserunt sint consectetur cillum aliqua.',
      'Anim adipisicing consectetur eu consequat ad reprehenderit ex veniam in labore id exercitation laboris consequat.',
      'Ut nulla do exercitation ipsum ex deserunt dolor pariatur.',
    ],
  },
  {
    name: 'BlackTies',
    jobTitle: 'Software Engineer',
    startDate: '01/01/2001',
    endDate: '12/31/2022',
    svgIconName: 'Blackties',
    description: [
      'Magna anim sunt minim qui. Culpa deserunt sint consectetur cillum aliqua.',
      'Anim adipisicing consectetur eu consequat ad reprehenderit ex veniam in labore id exercitation laboris consequat.',
      'Ut nulla do exercitation ipsum ex deserunt dolor pariatur.',
    ],
  },
]

export default function Experience() {
  return (
    <Container id='experience'>
      <Wrapper>
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
        <ExperienceSection>
          {content.map((job, index) => {
            const { name, jobTitle, startDate, endDate, svgIconName, description } = job
            const IconComponent = icons[svgIconName]
            return (
              <ContentBoxMotion
                key={'experience' + index}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true, amount: 0 }}
                variants={contentBoxVariant}
              >
                <ParagraphContainer>
                  <ImageContainer title={name}>
                    <IconComponent alt={name} />
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
                    {jobTitle}
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
            )
          })}
        </ExperienceSection>
      </Wrapper>
    </Container>
  )
}
