import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { MoonIcon, SunIcon } from '../Icons/Icons'
import { useColorModeContext } from '@/templates/hooks/useColorMode'

const DarkModeButton = tw.button`order-3 transition-all hidden p-2 rounded-xl md:block md:mr-0 focus:ring-4 focus:outline-none
focus:ring-neutral-900/25 text-gray-700 hover:text-gray-900 
dark:focus:ring-white/50 dark:text-gray-50 dark:hover:text-gray-400 dark:bg-neutral-700 hover:dark:bg-neutral-700/50
`

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

  return (
    <DarkModeButton onClick={toggleTheme} title='Switch Color Mode'>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </DarkModeButton>
  )
}
