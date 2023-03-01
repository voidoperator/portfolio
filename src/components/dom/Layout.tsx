import { useRef, useState, forwardRef, useImperativeHandle, createContext } from 'react'
import tw from 'tailwind-styled-components'
import type { LayoutProps, ContextProps } from '@/types/context.types'
import { ColorMode } from '@/types/context.types'

const Div = tw.div`
relative top-0 left-0 z-10 w-screen h-screen overflow-hidden
text-gray-800 bg-zinc-50
dark:bg-[#0e0e0e] dark:text-gray-50
`

const defaultContext = {
  context: {
    mode: ColorMode.DARK,
  },
}

export const ColorModeContext = createContext<ContextProps>(defaultContext)

const Layout = forwardRef((props: LayoutProps, ref: React.RefObject<HTMLDivElement>) => {
  const localRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => localRef.current)

  const [context, setContext] = useState<ContextProps['context']>(defaultContext.context)
  const handleSetContext = (value: ContextProps['context']) => {
    setContext(value)
  }

  const value = { setContext: handleSetContext, context: context }

  return (
    <ColorModeContext.Provider value={value}>
      <Div {...props} ref={localRef}>
        {props.children}
      </Div>
    </ColorModeContext.Provider>
  )
})
Layout.displayName = 'Layout'

export default Layout
