import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import ScrollProgressBar from '../ScrollProgressBar'
import type { ProjectsProps } from '@/types/contentful'
import TechIcon from '../Icons/TechStackIcons'
import Image from 'next/image'

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
oflow 2xl:w-full sm:w-[calc(50vw-40px)] w-screen
mx-5 sm:mb-5 mb-7 mt-10 sm:py-4 sm:pb-4 pb-2
rounded-3xl backdrop-blur-sm bg-noise-cards
`
const ParagraphMotion: Motion.Tag<'p'> = tw(motion.p)`
self-center
`
const ListMotion: Motion.Tag<'li'> = tw(motion.li)`
list-inside list-disc md:list-outside self-start
`
const ImageContainer = tw.a`
flex items-center justify-center
sm:block pt-4
hover:opacity-80 transition-all duration-300
sm:max-w-sm md:max-w-md lg:max-w-lg max-w-[14rem]
`
const ParagraphContainer = tw.div`
flex h-full grow flex-col justify-start items-center sm:px-10 px-6 sm:py-2 py-0 sm:gap-3 gap-2
`
const UnorgList = tw.ul`
flex list-disc flex-col justify-evenly font-sofiaprolight sm:gap-1 gap-0 md:gap-3 xl:gap-5
`
const TextContainer = tw.div`
flex w-full flex-col gap-2
`
const TechStack = tw.div`
hidden w-full flex-row items-center justify-evenly sm:flex
`
const TechIconContainer = tw.div`
rounded-full bg-slate-400/30 p-2 text-center dark:bg-slate-900/60
`
const ScrollLeftArrowContainer: Motion.Tag<'div'> = tw(motion.div)`
absolute top-2/4 left-[-40px] h-20 w-20 cursor-pointer rounded-full bg-slate-500/70 dark:bg-slate-900/75 shadow-2xl
`
const ScrollLeftArrow = tw.div`
absolute top-[25%] right-0 h-10 w-10 -rotate-45 scale-50 border-t-4 border-l-4 bg-none
`
const ScrollRightArrowContainer: Motion.Tag<'div'> = tw(motion.div)`
absolute top-2/4 right-[-40px] h-20 w-20 cursor-pointer rounded-full bg-slate-500/70 dark:bg-slate-900/75 shadow-2xl
`
const ScrollRightArrow = tw.div`
absolute top-[25%] left-0 h-10 w-10 rotate-45 scale-50 border-t-4 border-r-4 bg-none
`
const HashTagContainer = tw.div`
flex h-full w-full flex-wrap items-end justify-center gap-2 sm:gap-3 md:gap-4
`
const HashTagItem = tw.div`
whitespace-nowrap rounded-full border border-red-400 bg-transparent py-1 px-3 sm:py-2 sm:px-4
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

export default function ProjectSection({ data }: { data: ProjectsProps }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollRef = useRef(null)
  const { items } = data.projectItems
  const [{ sectionTitle }] = data.projectsSection.data

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
          {items.map((project, index) => {
            const { name, headline, description, imgUrl, techStack, tags, codeUrl, liveUrl, sys } = project
            return (
              <ContentBoxWrapper key={sys.id} ref={itemRefs[index]}>
                <ContentBoxMotion
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0 }}
                  variants={contentBoxVariant}
                >
                  <ParagraphContainer>
                    <ImageContainer href={liveUrl} target='_blank'>
                      <Image
                        src={imgUrl.url}
                        alt={imgUrl.description}
                        title={imgUrl.title}
                        width={imgUrl.width}
                        height={imgUrl.height}
                      />
                    </ImageContainer>
                    <ParagraphMotion className='text-2xl'>{name}</ParagraphMotion>
                    <TextContainer>
                      <ParagraphMotion
                        variants={paragraphVariant}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0 }}
                        className='whitespace-nowrap text-center text-sm sm:text-base md:text-lg lg:text-xl'
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
                        <a
                          target='_blank'
                          href={codeUrl}
                          className='rounded-full border bg-transparent py-1 px-3 sm:py-2 sm:px-4'
                        >{`<Code />`}</a>
                        <a
                          target='_blank'
                          href={liveUrl}
                          className='rounded-full border bg-transparent py-1 px-3 sm:py-2 sm:px-4'
                        >{`Live Website`}</a>
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
                    <HashTagContainer>
                      {tags.map((tag, index) => {
                        return (
                          <HashTagItem key={tag + index} className=''>
                            <span className='px-2 text-xs'>{`#${tag}`}</span>
                          </HashTagItem>
                        )
                      })}
                    </HashTagContainer>
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
