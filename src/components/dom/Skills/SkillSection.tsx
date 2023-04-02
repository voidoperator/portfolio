import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import RubberBandElements from '@/components/dom/RubberBandElements'
import TechIcon from '../Icons/TechStackIcons'
import type { SkillsProps } from '@/types/contentful'

const Container = tw.section`
w-full h-true
snap-center text-black dark:text-white overflow-hidden oflow
`
const Wrapper = tw.div`sm:h-full sm:pb-10
relative overflow-hidden oflow
flex flex-col items-center justify-between
`
const SkillsSection = tw.div`oflow font-sofiaprolight overflow-hidden sm:my-7
flex grow bg-noise-cards rounded-3xl shadow-2xl backdrop-blur-sm
font-normal text-xs md:text-sm lg:text-sm
sm:mx-10 mx-[20px] 2xl:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] md:max-w-[80%] sm:max-w-[80%]
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow flex w-full flex-row flex-wrap items-center justify-center
gap-1 py-4 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-6 sm:px-4
`
const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full pt-24 md:pt-[68px]
`
const IconWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex flex-row flex-wrap
`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75 my-0 sm:my-2 hidden sm:block
`
const IconButton = tw.div`
flex flex-row items-center gap-1 rounded-full bg-zinc-100/60
text-black dark:bg-zinc-900/75 dark:text-white
py-1 px-3 lg:gap-1
`
const IconName = tw.span`
cursor-default whitespace-nowrap text-xs lg:text-base xl:text-base
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

export default function SkillSection({ data }: { data: SkillsProps[] }) {
  const [{ sectionTitle, skillStack }] = data
  return (
    <Container id='skills'>
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
        <SkillsSection>
          <ContentBoxMotion
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.4 }}
            variants={contentBoxVariant}
          >
            <Divider />
            {skillStack.map((skill, index) => {
              const skillName = skill.toString()
              return (
                <IconWrapper
                  key={skill + index}
                  variants={paragraphVariant}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0.2 }}
                  title={skillName}
                >
                  <RubberBandElements key={skillName + index}>
                    <IconButton>
                      <IconName>{skillName}</IconName>
                      <TechIcon icon={skillName} twClasses='h-7 p-1 md:h-7 lg:h-8' />
                    </IconButton>
                  </RubberBandElements>
                </IconWrapper>
              )
            })}
            <Divider />
          </ContentBoxMotion>
        </SkillsSection>
      </Wrapper>
    </Container>
  )
}
