import { useState, useEffect, useRef, createContext } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import tw from 'tailwind-styled-components'
import Scene from '@/components/canvas/Scene'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { LoadingDots } from '@/components/dom/Icons/LoadingDots'
import type { ScrollOffsetContextProps } from '@/types/context.types'
import '@/styles/global.css'

const LoadingWrapper: Motion.Tag<'div'> = tw(motion.div)`
flex h-true flex-col items-center justify-center overflow-hidden text-center text-white
`
const LoadingMotion: Motion.Tag<'div'> = tw(motion.div)`
py-10 font-titlingstand text-xs text-white
`
const defaultScrollOffsetContext = {
  context: {
    scroll: 0,
    size: 0,
  },
}

function easeInExpo(progress: number): number {
  return progress === 0 ? 0 : Math.pow(2, 10 * progress - 10)
}

export const ScrollOffsetContext = createContext<ScrollOffsetContextProps>(defaultScrollOffsetContext)

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const count = useMotionValue(0)
  const loadingPercent = useTransform(count, Math.round)

  function setViewportHeightProperty() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    window.addEventListener('resize', setViewportHeightProperty)
    window.addEventListener('orientationchange', setViewportHeightProperty)
    setViewportHeightProperty()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingPercent.get() >= 97) {
        setIsLoading(false)
        clearInterval(interval)
      }
    }, 500)
    const animation = animate(count, 100, { duration: 5 })
    return animation.stop
  }, [loadingPercent, router, count])

  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash !== '') {
        const { pathname } = window.location
        const url = pathname + window.location.search
        window.history.pushState({}, document.title, url)
      }
    }
    window.addEventListener('hashchange', removeHash, false)
    return () => {
      window.removeEventListener('hashchange', removeHash, false)
    }
  }, [])

  const [context, setContext] = useState<ScrollOffsetContextProps['context']>(defaultScrollOffsetContext.context)
  const handleSetContext = (value: ScrollOffsetContextProps['context']) => {
    setContext(value)
  }

  const value = { setContext: handleSetContext, context: context }

  return (
    <>
      <Header title={pageProps.title} />
      <AnimatePresence mode='sync'>
        {isLoading ? (
          <>
            <LoadingWrapper
              key='loading'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: easeInExpo }}
            >
              <LoadingDots />
              <LoadingMotion className=''>
                {'Loading '}
                <motion.span>{loadingPercent}</motion.span>
                {'%'}
              </LoadingMotion>
            </LoadingWrapper>
          </>
        ) : (
          <ScrollOffsetContext.Provider value={value}>
            <motion.main
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: easeInExpo }}
            >
              <Layout ref={ref}>
                {Component?.canvas && (
                  <Scene
                    id='canvas'
                    eventSource={ref}
                    eventPrefix='client'
                    style={{
                      position: 'fixed',
                      zIndex: -10,
                    }}
                  >
                    {Component.canvas(pageProps)}
                  </Scene>
                )}
                <Component {...pageProps} />
              </Layout>
            </motion.main>
          </ScrollOffsetContext.Provider>
        )}
      </AnimatePresence>
    </>
  )
}

App.disableReactStrictMode = true
