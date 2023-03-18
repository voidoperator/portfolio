import React, { useEffect, useRef } from 'react'
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
z-10 w-full absolute top-24 left-0
`
const Container = tw.section`
h-screen w-full snap-center overflow-hidden oflow text-black dark:text-white
`
const Wrapper = tw.div`
flex flex-col h-full w-full relative
`
const Spacer = tw.div`
w-full
`
const RelativeBox = tw.div`
z-10 relative sm:bottom-[56px] bottom-[138px]
`
const ExperienceSection = tw.div`oflow relative font-sofiapro
scroll-smooth oflow overflow-x-scroll h-full w-full m-auto p-[-2.5rem]
flex flex-row snap-x snap-mandatory
font-normal text-xs md:text-sm lg:text-sm
justify-start items-stretch
`
const ContentBoxWrapper = tw.div`
flex snap-center w-full h-full
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`oflow
m-5 w-screen md:w-[calc(50vw-40px)] lg:w-[calc(33.33vw-40px)] xl:w-full py-4
rounded-3xl backdrop-blur-sm bg-noise-cards
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-center
`
const ImageContainer = tw.div`
flex items-center justify-center
sm:block pb-4 pt-8
hover:opacity-60 transition-all duration-300
`
const ParagraphContainer = tw.div`
flex h-full grow flex-col justify-start items-center sm:px-10 px-6 py-4 gap-2 sm:gap-8
`
const UnorgList = tw.ul`
flex list-disc flex-col justify-evenly font-sofiaprolight sm:gap-6 gap-3
`
const twClasses =
  'transition-all text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400 h-[72px] sm:h-32'

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

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    if ((container.scrollLeft < maxScrollLeft && event.deltaY > 0) || (container.scrollLeft > 0 && event.deltaY < 0)) {
      event.preventDefault()
      container.scrollLeft += event.deltaY
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel)
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

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
        <Spacer className='h-[150px] sm:h-[350px]' />
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
                  <ParagraphContainer id='para-cont'>
                    <ImageContainer id='img-container' title={name}>
                      <IconComponent alt={name} twClasses={twClasses} />
                    </ImageContainer>
                    <ParagraphMotion className='text-lg'>{name}</ParagraphMotion>
                    <ParagraphMotion
                      variants={paragraphVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{ once: true, amount: 0 }}
                      className='whitespace-nowrap text-center text-lg lg:text-xl'
                    >
                      {title}
                    </ParagraphMotion>
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
                    <UnorgList>
                      {description.map((bulletPoint, index) => {
                        return (
                          <li key={bulletPoint + index} className='list-inside list-disc sm:list-outside'>
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
                    </UnorgList>
                  </ParagraphContainer>
                </ContentBoxMotion>
              </ContentBoxWrapper>
            )
          })}
        </ExperienceSection>
        <Spacer className='h-[210px] sm:h-[70px]' />
      </Wrapper>
      <RelativeBox>
        <ScrollProgressBar containerRef={scrollRef} />
      </RelativeBox>
    </Container>
  )
}
