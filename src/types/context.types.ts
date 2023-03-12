export interface LayoutProps {
  children?: React.ReactNode
}

export type ColorMode = 'light' | 'dark'

export interface ColorModeContextProps {
  context: {
    colorMode: ColorMode
    isDarkMode: boolean
  }
  setContext?: (newContext: ColorModeContextProps['context']) => void
}

export interface ScrollOffsetContextType {
  scroll: number
  size: number
}

export interface ScrollOffsetContextProps {
  context: ScrollOffsetContextType
  setContext?: (newContext: ScrollOffsetContextType) => void
}
