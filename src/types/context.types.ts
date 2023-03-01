export enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ContextProps {
  context: {
    mode: ColorMode
  }
  setContext?: (_: ContextProps['context']) => void
}

export interface LayoutProps {
  children?: React.ReactNode
}
