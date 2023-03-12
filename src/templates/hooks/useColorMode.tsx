import { useCallback, useContext } from 'react'
import { ColorModeContext } from '@/components/dom/Layout'
import type { ColorModeContextProps, ColorMode } from '@/types/context.types'

export const useColorModeContext = () => {
  const { context, setContext } = useContext<ColorModeContextProps>(ColorModeContext)

  const setColorMode = useCallback(
    (mode: ColorMode) => {
      setContext({ ...context, colorMode: mode })
    },
    [context, setContext],
  )

  return {
    colorMode: context.colorMode,
    isDarkMode: context.colorMode === 'dark',
    setColorMode,
  }
}
