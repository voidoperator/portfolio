import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import getRngTransition from '@/utility/getRngTransitions'
import { HomeIcon, AboutIcon, ExperienceIcon, SkillsIcon, ProjectsIcon, ContactIcon } from '../Icons/Icons'

const MotionWrapper: Motion.Tag<'div'> = tw(motion.div)`
md:hidden block none fixed bottom-0 left-0 z-20 w-full px-0 sm:py-2 py-1
sm:px-4 backdrop-blur-md bg-neutral-50/60 dark:bg-neutral-900/50
font-titlingreg bg-noise-full min-h-11 max-h-11
`
const IconMotion: Motion.Tag<'a'> = tw(motion.a)`
flex items-center justify-center p-[2px] sm:p-2 rounded-full cursor-pointer w-full h-full
focus:ring-4 focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50
`
const Icons = tw.div`
flex w-full justify-center
border-black/10 dark:border-white/10
`
const FlexRow = tw.div`
flex flex-row align-center justify-around h-9
`
const twClasses =
  'h-8 w-full text-gray-800/80 transition-all hover:text-gray-500 dark:text-gray-100/80 hover:dark:text-gray-400'

const wrapperVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.25, type: 'spring', bounce: 0.4 },
  },
}

const transitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 1.3,
    },
  },
}

const icons = {
  Home: HomeIcon,
  About: AboutIcon,
  Experience: ExperienceIcon,
  Skills: SkillsIcon,
  Projects: ProjectsIcon,
  Contact: ContactIcon,
}

const sections = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function MobileNav() {
  return (
    <MotionWrapper initial='initial' whileInView='onScreen' variants={wrapperVariants}>
      <FlexRow>
        {sections.map((section, index) => {
          const borders = index === 0 ? 'border-r' : index === sections.length - 1 ? 'border-l' : 'border-x'
          const IconComponent = icons[section]
          return (
            <Icons key={section + index} className={borders}>
              <IconMotion
                initial='initial'
                variants={transitionVariants}
                title={section}
                href={`#${section.toLowerCase()}`}
                whileInView={getRngTransition()}
              >
                <IconComponent twClasses={twClasses} />
              </IconMotion>
            </Icons>
          )
        })}
      </FlexRow>
    </MotionWrapper>
  )
}
