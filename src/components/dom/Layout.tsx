import { useRef, useState, forwardRef, useImperativeHandle, createContext, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'
import type { LayoutProps, ColorModeContextProps, ColorMode } from '@/types/context.types'

const Container = tw.div`
z-10 overflow-y-auto overflow-x-hidden bg-noise-double
`
const Wrapper = tw.div`
h-screen snap-y snap-mandatory overflow-y-auto
`

const defaultColorModeContext = {
  context: {
    colorMode: 'dark' as ColorMode,
    isDarkMode: true,
  },
}

export const ColorModeContext = createContext<ColorModeContextProps>(defaultColorModeContext)

const Layout = forwardRef(({ children, ...props }: LayoutProps, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const localRef = useRef<HTMLDivElement>(null)
  const { setSize, setScroll } = useScrollOffset()
  useImperativeHandle(ref, () => localRef.current)

  useEffect(() => {
    if (ref) {
      const scrollTracker = scrollRef.current
      scrollTracker.addEventListener('scroll', () => {
        setScroll(scrollTracker.scrollTop)
      })
    }
  }, [ref, setScroll])

  useEffect(() => {
    const calculateDocumentSize = () => {
      const scrollHeight = document.body.scrollHeight
      const sectionsAmount = document.getElementsByTagName('section').length - 1
      // const documentSize = scrollHeight * sectionsAmount
      const progressPercent = scrollHeight * sectionsAmount
      setSize(progressPercent)
    }
    calculateDocumentSize()
    const handleResize = () => {
      calculateDocumentSize()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [context, setContext] = useState<ColorModeContextProps['context']>(defaultColorModeContext.context)
  const handleSetContext = (value: ColorModeContextProps['context']) => {
    setContext(value)
  }

  const value = { setContext: handleSetContext, context: context }

  return (
    <ColorModeContext.Provider value={value}>
      <Container {...props} ref={localRef}>
        <Wrapper id='sb' ref={scrollRef}>
          {children}
        </Wrapper>
      </Container>
    </ColorModeContext.Provider>
  )
})

Layout.displayName = 'Layout'

export default Layout
