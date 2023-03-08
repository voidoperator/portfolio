import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import { DarkMode } from './DarkMode'
import { EmailIcon, GithubIcon, JNLogo, LinkedInIcon, ResumeIcon } from '../Icons/Icons'

const svgIconClasses =
  'transition-all h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400'
const Nav = tw.nav`flex flex-nowrap items-center justify-between mx-auto`
const FlexRow = tw.div`flex flex-row gap-2 align-center justify-center`
const NavBarLinks = tw.div`items-center justify-between w-full md:flex md:w-auto`
const Span = tw.span`self-center font-semibold whitespace-nowrap
text-md
xl:text-[13px]
text-gray-900
dark:text-gray-50
`
const UnorganizedList = tw.ul`flex flex-col p-4 mt-4 border rounded-lg
md:flex-row md:space-x-5 md:mt-0 text-xs xl:text-sm md:font-medium md:border-0
`

const logoSvgClasses = 'flex items-center pl-3 transition-all duration-300 hover:opacity-70'
const listAnchorClasses =
  'transition-all block py-2 pl-3 pr-4 rounded md:p-0 cursor-pointer text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200'
const iconAnchorClasses =
  'flex items-center justify-center p-2 rounded-full cursor-pointer focus:ring-4 focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50'
const headerClasses =
  'fixed top-0 left-0 z-20 w-full px-2 py-2.5 sm:px-4 bg-noise bg-[length:150px] bg-[0px_0px] backdrop-blur-md bg-neutral-50/60 dark:bg-neutral-900/50'

function getRandomTransition() {
  const duration = Math.random() * 1.07
  const delay = Math.random() * 1.11
  return {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
    },
  }
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
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
  Email: EmailIcon,
  Resume: ResumeIcon,
}

const links = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/julio-nunez/' },
  { title: 'GitHub', href: 'https://github.com/voidoperator' },
  { title: 'Email', href: 'mailto:julionunez@me.com' },
  { title: 'Resume', href: 'https://github.com/voidoperator' },
]

const sections = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function NavBar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.25, type: 'spring', bounce: 0.4 } }}
      className={headerClasses}
    >
      <Nav>
        <motion.a
          initial='initial'
          whileInView='onScreen'
          variants={transitionVariants}
          href='#home'
          className={logoSvgClasses}
        >
          <JNLogo />
          <Span>Julio Nunez</Span>
        </motion.a>
        <NavBarLinks id='navbar-sticky' className='hidden'>
          <UnorganizedList>
            {sections.map((section, index) => (
              <li key={index}>
                <motion.a
                  initial='initial'
                  whileInView={getRandomTransition()}
                  variants={transitionVariants}
                  href={`#${section.toLowerCase()}`}
                  className={listAnchorClasses}
                >
                  {section}
                </motion.a>
              </li>
            ))}
          </UnorganizedList>
        </NavBarLinks>
        <FlexRow>
          {links.map((link, index) => {
            const IconComponent = icons[link.title]
            return (
              <motion.a
                key={link.title + index}
                className={iconAnchorClasses}
                initial='initial'
                variants={transitionVariants}
                target='_blank'
                title={link.title}
                href={link.href}
                whileInView={getRandomTransition()}
              >
                <IconComponent twClasses={svgIconClasses} />
              </motion.a>
            )
          })}
          <motion.div initial='initial' whileInView='onScreen' variants={transitionVariants}>
            <DarkMode />
          </motion.div>
        </FlexRow>
      </Nav>
    </motion.header>
  )
}
