import { useRef, useState, forwardRef, useImperativeHandle, createContext } from 'react'
import tw from 'tailwind-styled-components'
import type { LayoutProps, ColorModeContextProps } from '@/types/context.types'
import { ColorMode } from '@/types/context.types'

const Div = tw.div`relative top-0 left-0 z-10 w-screen h-screen overflow-hidden
text-gray-800 bg-zinc-50
dark:bg-[#0e0e0efa] dark:text-gray-50
`

const defaultColorModeContext = {
  context: {
    mode: ColorMode.DARK,
  },
}

export const ColorModeContext = createContext<ColorModeContextProps>(defaultColorModeContext)

const Layout = forwardRef(({ children, ...props }: LayoutProps, ref) => {
  const localRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => localRef.current)

  const [context, setContext] = useState<ColorModeContextProps['context']>(defaultColorModeContext.context)
  const handleSetContext = (value: ColorModeContextProps['context']) => {
    setContext(value)
  }

  const value = { setContext: handleSetContext, context: context }

  return (
    <ColorModeContext.Provider value={value}>
      <Div {...props} ref={localRef}>
        {children}
      </Div>
    </ColorModeContext.Provider>
  )
})
Layout.displayName = 'Layout'

export default Layout
