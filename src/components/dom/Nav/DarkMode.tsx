import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { MoonIcon, SunIcon } from '../Icons/Icons'
import { useColorModeContext } from '@/templates/hooks/useColorMode'
import type { ColorMode } from '@/types/context.types'

const DarkModeButton = tw.button`
order-3 transition-all md:p-2 p-2 rounded-full focus:ring-4 focus:outline-none
text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400
focus:ring-neutral-900/25 dark:focus:ring-white/50 dark:bg-neutral-700 hover:dark:bg-neutral-700/50
`

export const DarkMode = (): JSX.Element => {
  const { colorMode, isDarkMode, setColorMode } = useColorModeContext()
  useEffect(() => {
    const initialColorMode = localStorage.getItem('theme') || colorMode
    setTheme(initialColorMode as ColorMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode])

  const setTheme = (theme: ColorMode) => {
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
