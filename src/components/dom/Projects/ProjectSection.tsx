import React, { useEffect, useRef } from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import ScrollProgressBar from '../ScrollProgressBar'
import type { ProjectsProps } from '@/types/contentful'
import TechIcon from '../Icons/TechStackIcons'

const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full absolute top-24 left-0
`
const Container = tw.section`
w-full snap-center overflow-hidden oflow text-black dark:text-white h-true
`
const Wrapper = tw.div`
flex flex-col relative w-full h-true
`
const Spacer = tw.div`
w-full
`
const RelativeBox = tw.div`
z-10 relative sm:bottom-1 bottom-12
`
const ProjectContainer = tw.div`
oflow font-sofiapro overflow-y-hidden
scroll-smooth oflow overflow-x-scroll h-full w-full m-auto p-[-2.5rem]
flex flex-row snap-x snap-mandatory
font-normal text-xs md:text-sm lg:text-sm
justify-start items-stretch
`
const ContentBoxWrapper = tw.div`
flex snap-center w-full h-full
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow 2xl:w-full w-[calc(50vw-40px)]
mx-5 mb-5 mt-10 py-4
rounded-3xl backdrop-blur-sm bg-noise-cards
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-center
`
const ListMotion: Motion.Tag<'li'> = tw(motion.li)`
list-inside list-disc md:list-outside self-start
`
const ImageContainer = tw.div`
flex items-center justify-center
sm:block pt-4
hover:opacity-60 transition-all duration-300
`
const ParagraphContainer = tw.div`
flex h-full grow flex-col justify-start items-center sm:px-10 px-6 py-4 gap-2 sm:gap-8
`
const UnorgList = tw.ul`
flex list-disc flex-col justify-evenly font-sofiaprolight sm:gap-6 gap-3
`
const TextContainer = tw.div`
flex w-full flex-col gap-2
`
const TechStack = tw.div`
hidden w-full flex-row items-center justify-evenly sm:flex
`
const TechIconContainer = tw.div`
rounded-full bg-red-500/25 p-2 text-center dark:bg-fuchsia-900/25
`
const twClasses =
  'transition-all text-gray-900 hover:text-gray-800 dark:text-gray-100 hover:dark:text-gray-400 h-[72px] sm:h-32'

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

export default function ProjectSection({ data }: { data: ProjectsProps }) {
  const scrollRef = useRef(null)
  const { items } = data.projectItems
  const [{ sectionTitle }] = data.projectsSection.data

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
    <Container id='projects'>
      <Wrapper>
        <MarqueeSubWrapper
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.8 }}
        >
          <MarqueeText
            string={sectionTitle}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            directionLeft={false}
          />
        </MarqueeSubWrapper>
        <Spacer className='h-36 sm:h-[350px]' />
        <ProjectContainer ref={scrollRef}>
          {items.map((project) => {
            const { name, headline, description, imgUrl, techStack, tags, codeUrl, liveUrl, sys } = project
            return (
              <ContentBoxWrapper key={sys.id}>
                <ContentBoxMotion
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0 }}
                  variants={contentBoxVariant}
                >
                  <ParagraphContainer>
                    {/* <ImageContainer title={name}>
                      <IconComponent alt={name} twClasses={twClasses} />
                    </ImageContainer> */}
                    <ParagraphMotion className='text-2xl'>{name}</ParagraphMotion>
                    <TextContainer>
                      <ParagraphMotion
                        variants={paragraphVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0 }}
                        className='whitespace-nowrap text-center text-lg lg:text-xl'
                      >
                        {headline}
                      </ParagraphMotion>
                      <ParagraphMotion
                        variants={paragraphVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0 }}
                      >
                        {headline}
                      </ParagraphMotion>
                      <ParagraphMotion
                        variants={paragraphVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0 }}
                      >
                        {headline}
                      </ParagraphMotion>
                    </TextContainer>
                    <ParagraphMotion
                      variants={paragraphVariant}
                      initial='initial'
                      whileInView='animate'
                      viewport={{ once: true, amount: 0 }}
                      className='flex items-center justify-between gap-3 sm:text-base'
                    >
                      <>
                        <span>{headline}</span>
                        <span>{' - '}</span>
                        <span>{headline}</span>
                      </>
                    </ParagraphMotion>
                    <UnorgList>
                      {description.map((bulletPoint, index) => {
                        return (
                          <ListMotion
                            key={bulletPoint + index}
                            variants={paragraphVariant}
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, amount: 0 }}
                          >
                            {bulletPoint}
                          </ListMotion>
                        )
                      })}
                    </UnorgList>
                    <TechStack>
                      {techStack.map((tech, index) => {
                        return (
                          <TechIconContainer key={tech + index} title={tech} aria-label={tech}>
                            <TechIcon icon={tech} twClasses={'h-6 w-6 text-black dark:text-white'} />
                          </TechIconContainer>
                        )
                      })}
                    </TechStack>
                  </ParagraphContainer>
                </ContentBoxMotion>
              </ContentBoxWrapper>
            )
          })}
        </ProjectContainer>
        <Spacer className='h-11 sm:h-[70px]' />
      </Wrapper>
      <RelativeBox>
        <ScrollProgressBar containerRef={scrollRef} />
      </RelativeBox>
    </Container>
  )
}
