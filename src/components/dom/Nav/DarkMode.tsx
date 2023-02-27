import { useState, useEffect } from 'react'

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

  return (
    <button
      className='order-3 hidden text-white bg-gray-700 rounded-full md:block p-2.5 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white-800'
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 text-gray-200'
        >
          <path
            fillRule='evenodd'
            d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
            clipRule='evenodd'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 text-yellow-500'
        >
          <path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
        </svg>
      )}
    </button>
  )
}
