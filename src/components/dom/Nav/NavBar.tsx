import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import { DarkMode } from './DarkMode'
import { EmailIcon, GithubIcon, JNLogo, LinkedInIcon, ResumeIcon } from '../Icons/Icons'
import getRngTransition from '@/utility/getRngTransitions'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'
import ScrollProgressBar from '../ScrollProgressBar'
import { ContactProps } from '@/types/contentful'

const MotionHeader: Motion.Tag<'header'> = tw(motion.header)`
fixed top-0 left-0 z-20 w-full px-2 py-2.5 sm:px-4 bg-noise bg-[length:150px] bg-[0px_0px]
backdrop-blur-[8px] bg-neutral-50/10 dark:bg-neutral-900/50 font-titlingreg min-h-[64px]
`
const LogoMotion: Motion.Tag<'a'> = tw(motion.a)`
flex items-center sm:pl-3 pl-2
`
const AnchorMotion: Motion.Tag<'a'> = tw(motion.a)`
transition-all text-[10px] md:text-[11px] block py-2 pl-3 pr-4 rounded md:p-0 cursor-pointer
text-gray-900 hover:text-black dark:text-gray-200 dark:hover:text-gray-200
`
const IconMotion: Motion.Tag<'a'> = tw(motion.a)`
flex items-center justify-center p-[2px] sm:p-2 rounded-full cursor-pointer focus:ring-4
focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50
`
const Nav = tw.nav`
flex flex-nowrap items-center justify-between mx-auto relative
`
const FlexRow = tw.div`
flex flex-row gap-2 align-center justify-center
`
const NavBarLinks = tw.div`
items-center justify-between w-full md:flex md:w-auto hidden
`
const Span = tw.span`
self-center whitespace-nowrap font-titlingstand
text-xs sm:text-sm xl:text-[13px]
text-gray-900 dark:text-gray-50
transition-all duration-400 hover:opacity-70
`
const UnorganizedList = tw.ul`
flex flex-col p-4 mt-4 border rounded-lg
md:flex-row md:space-x-4 lg:space-x-5 space-x-1 md:mt-0 md:font-medium md:border-0
`
const twClasses = 'transition-all h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400'

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

const headerVariants: Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.25, type: 'spring', bounce: 0.4 },
  },
}

const icons = {
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
  Email: EmailIcon,
  Resume: ResumeIcon,
}

const sections = [
  'About',
  'Experience',
  'Skills',
  // 'Projects',
  'Contact',
]

export default function NavBar({ data }: { data: ContactProps[] }) {
  const [{ email, linkedInUrl, githubUrl, resumeUrl }] = data
  const { scroll, size } = useScrollOffset()
  const links = [
    { title: 'LinkedIn', href: linkedInUrl },
    { title: 'GitHub', href: githubUrl },
    { title: 'Email', href: `mailto:${email}` },
    { title: 'Resume', href: resumeUrl },
  ]
  return (
    <MotionHeader initial='initial' whileInView='onScreen' variants={headerVariants}>
      <Nav>
        <LogoMotion href='#home' initial='initial' whileInView='onScreen' variants={transitionVariants}>
          <JNLogo twClasses='transition-all duration-400 hover:opacity-70' />
          <Span>Julio Nunez</Span>
        </LogoMotion>
        <NavBarLinks>
          <UnorganizedList>
            {sections.map((section, index) => (
              <li key={section + index}>
                <AnchorMotion
                  initial='initial'
                  whileInView={getRngTransition()}
                  variants={transitionVariants}
                  href={`#${section.toLowerCase()}`}
                >
                  {section}
                </AnchorMotion>
              </li>
            ))}
          </UnorganizedList>
        </NavBarLinks>
        <FlexRow>
          {links.map((link, index) => {
            const IconComponent = icons[link.title]
            return (
              <IconMotion
                key={link.title + index}
                initial='initial'
                variants={transitionVariants}
                target='_blank'
                title={link.title}
                href={link.href}
                whileInView={getRngTransition()}
              >
                <IconComponent twClasses={twClasses} />
              </IconMotion>
            )
          })}
          <motion.div initial='initial' whileInView='onScreen' variants={transitionVariants}>
            <DarkMode />
          </motion.div>
        </FlexRow>
      </Nav>
      <ScrollProgressBar scrollProgress={scroll / size} />
    </MotionHeader>
  )
}
