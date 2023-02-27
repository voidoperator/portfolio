import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { DarkMode } from './DarkMode'
import { JNLogo } from '../Icons/JNLogo'

const Nav = tw.nav`fixed top-0 left-0 z-20 w-full px-2 bg-white border-b border-neutral-200 dark:bg-neutral-900 sm:px-4 py-2.5 dark:border-neutral-600`
const Div = tw.div`container flex flex-wrap items-center justify-between mx-auto`
const Span = tw.span`self-center text-xl font-semibold text-gray-700 whitespace-nowrap dark:text-gray-50`
const NavBarLinks = tw.div`items-center justify-between w-full md:flex md:w-auto`
const Button = tw.button`px-5 mr-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 py-2.5 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white-800`
const UnorganizedList = tw.ul`flex flex-col p-4 mt-4 border rounded-lg border-neutral-100 bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700`
const Anchor = tw.a`block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
const Hamburger = tw.div`flex md:hidden`

type Props = {}

export default function NavBar({}: Props) {
  return (
    <Nav>
      <Div>
        <Link href='/' className='flex items-center order-0' title='Julio Nunez :||: Portfolio'>
          <JNLogo></JNLogo>
          <Span>Julio Nunez</Span>
        </Link>
        <NavBarLinks id='navbar-sticky' className='hidden'>
          <UnorganizedList>
            <li>
              <Anchor href='#'>About</Anchor>
            </li>
            <li>
              <Anchor href='#'>Experience</Anchor>
            </li>
            <li>
              <Anchor href='#'>Skills</Anchor>
            </li>
            <li>
              <Anchor href='#'>Projects</Anchor>
            </li>
          </UnorganizedList>
        </NavBarLinks>
        <Button className='order-1' type='button'>
          Contact Me
        </Button>
        <DarkMode />
        <Hamburger className='order-2'>
          <button
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            data-collapse-toggle='navbar-sticky'
            type='button'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </Hamburger>
      </Div>
    </Nav>
  )
}
