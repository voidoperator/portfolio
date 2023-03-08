export interface LayoutProps {
  children?: React.ReactNode
}

export enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ColorModeContextProps {
  context: {
    mode: ColorMode
  }
  setContext?: (_: ColorModeContextProps['context']) => void
}

export interface ScrollOffsetContextProps {
  context: {
    scroll: number
  }
  setContext?: (_: ScrollOffsetContextProps['context']) => void
}
