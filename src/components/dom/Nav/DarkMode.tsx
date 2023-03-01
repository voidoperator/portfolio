import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { MoonIcon, SunIcon } from '../Icons/Icons'
import { useColorModeContext } from '@/templates/hooks/useColorMode'

const Button = tw.button`transition-all order-3 hidden p-2 text-white bg-gray-500 rounded-full md:block hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-white-300 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white-800`

export const DarkMode = (): JSX.Element => {
  const { colorMode, isDarkMode, setColorMode } = useColorModeContext()
  useEffect(() => {
    const initialColorMode = localStorage.getItem('theme') || colorMode
    setTheme(initialColorMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode])

  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
    setColorMode(theme)
    const html = document.querySelector('html')
    if (isDarkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return <Button onClick={toggleTheme}>{isDarkMode ? <SunIcon /> : <MoonIcon />}</Button>
}
