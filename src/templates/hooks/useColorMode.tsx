import { useContext } from 'react'
import { ColorModeContext } from '@/components/dom/Layout'
import type { ColorModeContextProps } from '@/types/context.types'

export const useColorModeContext = () => {
  const { context, setContext } = useContext<ColorModeContextProps>(ColorModeContext)
  return {
    colorMode: context.mode,
    isDarkMode: context.mode === 'dark',
    setColorMode: (colorMode: any) => setContext({ mode: colorMode }),
  }
}
