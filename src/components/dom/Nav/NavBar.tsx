import React from 'react'
import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import { DarkMode } from './DarkMode'
import { EmailIcon, GithubIcon, JNLogo, LinkedInIcon, ResumeIcon } from '../Icons/Icons'

const twClasses = 'transition-all h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400'
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
const Anchor = tw.a`transition-all block py-2 pl-3 pr-4 rounded md:p-0 cursor-pointer
text-gray-600 hover:text-black
dark:text-gray-400 dark:hover:text-gray-200
`
const IconAnchors = tw.a`flex items-center justify-center p-2 rounded-full cursor-pointer
focus:ring-4 focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50
`
const headerClasses =
  'fixed top-0 left-0 z-20 w-full px-2 py-2.5 sm:px-4 bg-noise bg-[length:150px] bg-[0px_0px] backdrop-blur-md bg-neutral-50/60 dark:bg-neutral-900/50'

const sections = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function NavBar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      className={headerClasses}
    >
      <Nav>
        <Anchor href='#home' className='flex items-center pl-3 transition-all duration-300 hover:opacity-70'>
          <JNLogo />
          <Span>Julio Nunez</Span>
        </Anchor>
        <NavBarLinks id='navbar-sticky' className='hidden'>
          <UnorganizedList>
            {sections.map((section, index) => (
              <li key={index}>
                <Anchor href={`#${section.toLowerCase()}`}>{section}</Anchor>
              </li>
            ))}
          </UnorganizedList>
        </NavBarLinks>
        <FlexRow>
          <IconAnchors title='LinkedIn' href='https://www.linkedin.com/in/julio-nunez/' target='_blank'>
            <LinkedInIcon twClasses={twClasses} />
          </IconAnchors>
          <IconAnchors title='GitHub' href='https://github.com/voidoperator' target='_blank'>
            <GithubIcon twClasses={twClasses} />
          </IconAnchors>
          <IconAnchors title='Email' href='mailto:julionunez@me.com' target='_blank'>
            <EmailIcon twClasses={twClasses} />
          </IconAnchors>
          <DarkMode />{' '}
          <IconAnchors title='Resume' href='https://github.com/voidoperator' target='_blank'>
            <ResumeIcon twClasses={twClasses} />
          </IconAnchors>
        </FlexRow>
      </Nav>
    </motion.header>
  )
}
