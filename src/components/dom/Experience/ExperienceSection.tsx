import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import ScrollProgressBar from '../ScrollProgressBar'
import { CacheHeapIcon, BlackTiesIcon, MealBoxIcon, TwitterIcon } from '../Icons/Icons'
import type { ExperienceProps } from '@/types/contentful'
import TechIcon from '../Icons/TechStackIcons'

const icons = {
  CacheHeap: CacheHeapIcon,
  Twitter: TwitterIcon,
  BlackTies: BlackTiesIcon,
  MealBox: MealBoxIcon,
}

const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full absolute top-24 left-0
`
const Container = tw.section`relative
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
const ExperienceContainer = tw.div`
oflow font-sofiapro overflow-hidden
scroll-smooth oflow overflow-x-scroll h-full w-full m-auto p-[-2.5rem]
flex flex-row snap-x snap-mandatory
font-normal text-xs md:text-sm lg:text-sm
justify-start items-stretch
`
const ContentBoxWrapper = tw.div`
flex snap-center w-full h-full
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow
mx-5 mb-5 mt-10 w-screen md:w-[calc(50vw-40px)] lg:w-[calc(33.33vw-40px)] xl:w-full py-4
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
flex flex-wrap items-center justify-evenly overflow-hidden rounded-b-2xl md:gap-1
`
const TechIconContainer = tw.div`
rounded-full bg-red-500/25 p-2 text-center dark:bg-fuchsia-900/25
`
const ScrollLeftArrowContainer: Motion.Tag<'div'> = tw(motion.div)`
absolute top-2/4 left-[-40px] h-20 w-20 cursor-pointer rounded-full bg-red-500/40 dark:bg-fuchsia-900/40
`
const ScrollLeftArrow = tw.div`
absolute top-[25%] right-0 h-10 w-10 -rotate-45 scale-50 border-t-4 border-l-4 bg-none
`
const ScrollRightArrowContainer: Motion.Tag<'div'> = tw(motion.div)`
absolute top-2/4 right-[-40px] h-20 w-20 cursor-pointer rounded-full bg-red-500/40 dark:bg-fuchsia-900/40
`
const ScrollRightArrow = tw.div`
absolute top-[25%] left-0 h-10 w-10 rotate-45 scale-50 border-t-4 border-r-4 bg-none
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

function easeInExpo(progress: number): number {
  return progress === 0 ? 0 : Math.pow(2, 10 * progress - 10)
}

export default function ExperienceSection({ data }: { data: ExperienceProps }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollRef = useRef(null)
  const { items } = data.experienceItems
  const [{ sectionTitle }] = data.experienceSection.data
  const itemRefs = useMemo(() => Array.from({ length: items.length }, () => createRef<HTMLDivElement>()), [items])

  const checkArrowsVisibility = () => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const firstItem = itemRefs[0].current
      const lastItem = itemRefs[itemRefs.length - 1].current
      const tolerance = firstItem.clientWidth / 4

      if (firstItem && lastItem) {
        const firstItemPosition = firstItem.getBoundingClientRect().left
        const lastItemPosition = lastItem.getBoundingClientRect().right

        const containerPosition = container.getBoundingClientRect()

        setCanScrollLeft(firstItemPosition < containerPosition.left - tolerance)
        setCanScrollRight(lastItemPosition > containerPosition.right + tolerance)
      }
    }
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
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
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      if (maxScrollLeft > 0) {
        setCanScrollRight(true)
      }
      container.addEventListener('wheel', handleWheel)
      container.addEventListener('scroll', checkArrowsVisibility)
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('scroll', checkArrowsVisibility)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      checkArrowsVisibility()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollRef.current?.scrollLeft])

  const scrollToNext = () => {
    const container = scrollRef.current
    if (container) {
      const currentScrollLeft = container.scrollLeft

      const nextItemIndex = itemRefs.findIndex(
        (itemRef) => itemRef.current && itemRef.current.offsetLeft > currentScrollLeft,
      )

      if (nextItemIndex >= 0) {
        container.scrollLeft = itemRefs[nextItemIndex].current.offsetLeft
      }
    }
  }

  const scrollToPrev = () => {
    const container = scrollRef.current
    if (container) {
      const currentScrollLeft = container.scrollLeft

      const prevItemIndex = itemRefs
        .slice(0, -1)
        .reverse()
        .findIndex((itemRef) => {
          itemRef.current && itemRef.current.offsetLeft + itemRef.current.clientWidth < currentScrollLeft
        })

      if (prevItemIndex >= 0) {
        const targetIndex = itemRefs.length - 1 - prevItemIndex
        container.scrollLeft = itemRefs[targetIndex].current.offsetLeft
      } else if (container.scrollLeft > 0) {
        container.scrollLeft = 0
      }
    }
  }

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
            string={sectionTitle}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            directionLeft={false}
          />
        </MarqueeSubWrapper>
        <Spacer className='h-36 sm:h-[350px]' />
        <ExperienceContainer ref={scrollRef}>
          {items.map((job, index) => {
            const { name, title, subHeadline, type, techStack, startDate, endDate, svgIconName, description, sys } = job
            const IconComponent = icons[svgIconName]
            return (
              <ContentBoxWrapper key={sys.id} ref={itemRefs[index]}>
                <ContentBoxMotion
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0 }}
                  variants={contentBoxVariant}
                >
                  <ParagraphContainer>
                    <ImageContainer title={name}>
                      <IconComponent alt={name} twClasses={twClasses} />
                    </ImageContainer>
                    <ParagraphMotion className='text-2xl'>{name}</ParagraphMotion>
                    <TextContainer>
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
                      >
                        {type}
                      </ParagraphMotion>
                      <ParagraphMotion
                        variants={paragraphVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0 }}
                      >
                        {subHeadline}
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
                        <span>{startDate}</span>
                        <span>{' - '}</span>
                        <span>{endDate}</span>
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
                      {techStack?.map((tech, index) => {
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
        </ExperienceContainer>
        <Spacer className='h-11 sm:h-[70px]' />
      </Wrapper>
      <RelativeBox>
        <ScrollProgressBar containerRef={scrollRef} />
      </RelativeBox>
      <AnimatePresence mode='popLayout'>
        <motion.span className='animate-pulse'>
          {canScrollLeft && (
            <ScrollLeftArrowContainer
              key='left'
              onClick={scrollToPrev}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInExpo }}
            >
              <ScrollLeftArrow />
            </ScrollLeftArrowContainer>
          )}
          {canScrollRight && (
            <ScrollRightArrowContainer
              key='right'
              onClick={scrollToNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInExpo }}
            >
              <ScrollRightArrow />
            </ScrollRightArrowContainer>
          )}
        </motion.span>
      </AnimatePresence>
    </Container>
  )
}
