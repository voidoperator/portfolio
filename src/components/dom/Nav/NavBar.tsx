import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { DarkMode } from './DarkMode'
import { HamburgerIcon, JNLogo } from '../Icons/Icons'

const Header = tw.header`fixed top-0 left-0 z-20 w-full px-2 py-2.5 sm:px-4
bg-noise bg-[length:150px] bg-[0px_0px] backdrop-blur-md
bg-neutral-50/60
dark:bg-neutral-900/50
`
const Nav = tw.nav`flex flex-nowrap items-center justify-between mx-auto`
const Span = tw.span`self-center font-semibold whitespace-nowrap
text-md
xl:text-[13px]
text-gray-900
dark:text-gray-50
`
const NavBarLinks = tw.div`items-center justify-between w-full md:flex md:w-auto`
const Button = tw.button`transition-all px-5 py-2.5 mr-3 text-xs xl:text-[13px] font-medium text-center rounded-xl md:mr-0 whitespace-nowrap
text-white bg-gray-500/75 hover:bg-gray-800/75 focus:ring-4 focus:outline-none focus:ring-neutral-900/25
dark:bg-gray-600/75 dark:hover:bg-gray-700/75 dark:focus:ring-white/50
`
const UnorganizedList = tw.ul`flex flex-col p-4 mt-4 border rounded-lg
md:flex-row md:space-x-5 md:mt-0 text-xs xl:text-sm md:font-medium md:border-0
`
const Anchor = tw.a`transition-all block py-2 pl-3 pr-4 rounded md:p-0
text-gray-600 hover:text-black
dark:text-gray-400 dark:hover:text-gray-200
`
const Hamburger = tw.div`flex md:hidden`
const HamburgerButton = tw.button`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`
const FlexRow = tw.div`flex flex-row gap-2`

const sections = ['About', 'Experience', 'Skills', 'Projects']

export default function NavBar({ refList }) {
  return (
    <Header>
      <Nav>
        <Link href='/' className='flex items-center pl-3 transition-all duration-300 hover:opacity-70'>
          <JNLogo />
          <Span>Julio Nunez</Span>
        </Link>
        <NavBarLinks id='navbar-sticky' className='hidden'>
          <UnorganizedList>
            {sections.map((section, index) => (
              <li key={index}>
                {/* <Anchor href='#' onClick={() => console.log(refList[index])}> */}
                <Anchor href='#'>{section}</Anchor>
              </li>
            ))}
          </UnorganizedList>
        </NavBarLinks>
        <FlexRow>
          <Button className='order-1' type='button'>
            Contact Me
          </Button>
          <DarkMode />
          <Hamburger className='order-2'>
            <HamburgerButton
              type='button'
              aria-expanded='false'
              aria-controls='navbar-sticky'
              data-collapse-toggle='navbar-sticky'
            >
              <span className='sr-only'>Open main menu</span>
              <HamburgerIcon />
            </HamburgerButton>
          </Hamburger>
        </FlexRow>
      </Nav>
    </Header>
  )
}
