import { useContext } from 'react'
import { ColorModeContext } from '@/components/dom/Layout'
import type { ContextProps } from '@/types/context.types'

export const useColorModeContext = () => {
  const { context, setContext } = useContext<ContextProps>(ColorModeContext)
  return {
    colorMode: context.mode,
    isDarkMode: context.mode === 'dark',
    setColorMode: (colorMode: any) => setContext({ mode: colorMode }),
  }
}
