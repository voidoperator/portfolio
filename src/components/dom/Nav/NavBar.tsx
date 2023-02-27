import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { DarkMode } from './DarkMode'

const Nav = tw.nav`fixed top-0 left-0 z-20 w-full px-2 bg-white border-b border-neutral-200 dark:bg-neutral-900 sm:px-4 py-2.5 dark:border-neutral-600`
const Div = tw.div`container flex flex-wrap items-center justify-between mx-auto`
const Span = tw.span`self-center text-xl font-semibold text-gray-700 whitespace-nowrap dark:text-gray-50`
const NavBarLinks = tw.div`items-center justify-between w-full md:flex md:w-auto`
const Button = tw.button`px-5 mr-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 py-2.5 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white-800`
const UnorganizedList = tw.ul`flex flex-col p-4 mt-4 border rounded-lg border-neutral-100 bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700`
const Hamburger = tw.button`flex md:hidden`
const Anchor = tw.a`block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`

type Props = {}

export default function NavBar({}: Props) {
  return (
    <Nav>
      <Div>
        <Link href='/' className='flex items-center order-0' title='Julio Nunez :||: Portfolio'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 367.8337 378.6328'
            className='h-6 mr-3 text-black dark:text-white sm:h-9'
          >
            <g>
              <path
                fill='currentColor'
                d='M359.8444,50.6662C344.1928,29,323.1116,0,322.4039,0c-1.13,0-50.831,0-50.831,0l47.0637,67.3564a17.2783,17.2783,0,0,1,.6367,19.2183l-9.9365,16.2667L240.9871,0H222.5153c-35.6609,0-58.44,5.6807-78.8461,28.7932-6.5508,7.42-8.3042,11.573-2.58,20.02,32.1092,47.3888,63.3648,95.2186,94.845,142.9312,3.6385,5.5147,8.4947,11.7953,10.9138,18.1061,5.7736,15.0613,6.0566,34.3769,3.7586,51.3159l31.8033-45.026c7.6528-9.3741,7.505-16.7156.7973-26.5831-29.5972-43.541-58.3912-87.5008-87.1122-131.4893-3.7156-5.6909-10.37-15.8941-8.6688-17.6536,5.1118-5.288,15.0546-4.157,24.0987-2.1121,5.78,1.3069,9.0651,2.8388,11.6844,7.003,4.3349,6.8917,9.0176,13.617,13.5588,20.4094,21.8561,32.6916,43.64,65.42,65.691,98.0112,2.09,3.0884,5.095,12.0505,10.282,5.7879a10.79,10.79,0,0,0,.8406-1.2583L360.792,97.5787h0A40.4091,40.4091,0,0,0,359.8444,50.6662Z'
              />
              <path
                fill='currentColor'
                d='M212.6762,319.3187c16.16-24.6995,22.3166-55.0123,15.3384-83.6916a96.8374,96.8374,0,0,0-14.2971-32.744L111.3469,50.0279c-6.149-9.13-5.77-14.78,3.507-22.5293C126.7986,17.5214,149.6425,0,149.6425,0H62.14A68.7286,68.7286,0,0,0,7.018,27.6772L0,37.1006H43.7025c9.7609,0,15.2276,2.8377,20.0316,10.1912L178.8219,219.1386c20.2947,31.2835,11.2965,65.19-6.3848,86.9359-31.168-47.242-61.9542-94.1-93.0577-140.7974-3.788-5.6875-6.1584-9.7066-1.4666-10.9054,20.5835-5.2593,26.3975-11.7637,32.2659-24.3529l-83.7593-.2277c-12.0768,0-14.336,5.2566-8.5783,13.6794L173.87,378.6328Z'
              />
            </g>
          </svg>
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
