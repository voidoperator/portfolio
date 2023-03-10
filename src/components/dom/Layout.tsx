import { useRef, useState, forwardRef, useImperativeHandle, createContext, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import type { LayoutProps, ColorModeContextProps } from '@/types/context.types'
import { ColorMode } from '@/types/context.types'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'

const Container = tw.div`z-10 overflow-y-auto overflow-x-hidden bg-[length:200px] bg-[0px_0px] bg-repeat bg-noise`
const Wrapper = tw.div`h-screen snap-y snap-mandatory overflow-y-auto`

const defaultColorModeContext = {
  context: {
    mode: ColorMode.DARK,
  },
}

export const ColorModeContext = createContext<ColorModeContextProps>(defaultColorModeContext)

const Layout = forwardRef(({ children, ...props }: LayoutProps, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const localRef = useRef<HTMLDivElement>(null)
  const { setScroll } = useScrollOffset()
  useImperativeHandle(ref, () => localRef.current)

  useEffect(() => {
    if (ref) {
      const scrollTracker = scrollRef.current
      scrollTracker.addEventListener('scroll', () => {
        setScroll(scrollTracker.scrollTop)
      })
    }
  }, [ref, setScroll])

  const [context, setContext] = useState<ColorModeContextProps['context']>(defaultColorModeContext.context)
  const handleSetContext = (value: ColorModeContextProps['context']) => {
    setContext(value)
  }

  const value = { setContext: handleSetContext, context: context }

  return (
    <ColorModeContext.Provider value={value}>
      <Container {...props} ref={localRef}>
        <Wrapper id='sb' ref={scrollRef} className='h-screen snap-y snap-mandatory scroll-py-9 overflow-y-auto'>
          {children}
        </Wrapper>
      </Container>
    </ColorModeContext.Provider>
  )
})

Layout.displayName = 'Layout'

export default Layout
