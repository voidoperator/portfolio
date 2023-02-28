import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '../Icons/Icons'
import tw from 'tailwind-styled-components'

export const DarkMode = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load user's color preference from local storage or use default of "dark"
  useEffect(() => {
    const initialColorMode = localStorage.getItem('theme') || 'dark'
    setIsDarkMode(initialColorMode === 'dark')
    setTheme(initialColorMode)
  }, [])

  // Update local storage and HTML element class when theme changes
  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
    const html = document.querySelector('html')
    html.classList.toggle('dark', theme === 'dark')
  }

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setTheme(newTheme)
    setIsDarkMode(!isDarkMode)
  }

  const Button = tw.button`
  transition-all
  order-3
  hidden
  p-2
  text-white
  bg-gray-500
  rounded-full
  md:block
  hover:bg-gray-900
  focus:ring-4
  focus:outline-none
  focus:ring-white-300
  md:mr-0
  dark:bg-gray-600
  dark:hover:bg-gray-700
  dark:focus:ring-white-800
  `
  return <Button onClick={toggleTheme}>{isDarkMode ? <SunIcon /> : <MoonIcon />}</Button>
}
