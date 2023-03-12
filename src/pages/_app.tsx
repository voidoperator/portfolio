import { useState, useEffect, useRef, createContext } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Scene from '@/components/canvas/Scene'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { LoadingDots } from '@/components/dom/Icons/LoadingDots'
import type { ScrollOffsetContextProps } from '@/types/context.types'
import '@/styles/global.css'

const loadingDivClasses = 'flex h-screen flex-col items-center justify-center overflow-hidden text-center text-white'

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
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementFactor = Math.random() * 0.1 + 0.05
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 90) {
          setIsLoading(false)
          return 100
        } else {
          return prevProgress + incrementFactor * 50
        }
      })
    }, 300)
    setTimeout(() => {
      clearInterval(interval)
    }, 5000)
  }, [router])

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
        {/* {isLoading ? (
          <>
            <motion.div
              key='loading'
              className={loadingDivClasses}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: easeInExpo }}
            >
              <LoadingDots />
              <motion.header className='py-10 font-titlingstand text-xs text-white'>
                Loading {Math.round(loadingProgress)}%
              </motion.header>
            </motion.div>
          </>
        ) : ( */}
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
        {/* )} */}
      </AnimatePresence>
    </>
  )
}

App.disableReactStrictMode = true
