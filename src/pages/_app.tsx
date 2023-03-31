import { useState, useEffect, useRef, createContext } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Scene from '@/components/canvas/Scene'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import type { ScrollOffsetContextProps } from '@/types/context.types'
import '@/styles/global.css'

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
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

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
      </AnimatePresence>
    </>
  )
}

App.disableReactStrictMode = true
