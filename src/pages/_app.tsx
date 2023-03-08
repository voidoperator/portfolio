import { useState, useEffect, useRef, createContext } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
// import dynamic from 'next/dynamic'
import Scene from '@/components/canvas/Scene'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { LoadingDots } from '@/components/dom/Icons/LoadingDots'
import type { ScrollOffsetContextProps } from '@/types/context.types'
import '@/styles/global.css'

// const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

const loadingDivClasses = 'flex h-screen flex-col items-center justify-center overflow-hidden text-center text-white'

const defaultScrollOffsetContext = {
  context: {
    scroll: 0,
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementFactor = Math.random() * 0.1 + 0.05
      setLoadingProgress((prevProgress) => {
        if (prevProgress === 100) {
          setIsLoading(false)
          return 100
        } else {
          return prevProgress + incrementFactor * 50
        }
      })
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      router.push('/')
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
      <AnimatePresence mode='wait'>
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
              <motion.header className='py-10'>Loading {Math.round(loadingProgress)}%</motion.header>
            </motion.div>
          </>
        ) : ( */}
        <ScrollOffsetContext.Provider value={value}>
          <motion.div
            ref={scrollRef}
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeInExpo }}
          >
            <Layout ref={ref}>
              {Component?.canvas && (
                <Scene
                  className='pointer-events-none h-screen'
                  eventSource={ref}
                  eventPrefix='client'
                  style={{ height: '100vh' }}
                  camera={{ position: [0, 4.5, 7.5], aspect: 0.75, fov: 160, zoom: 12 }}
                >
                  {Component.canvas(pageProps)}
                </Scene>
              )}
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </ScrollOffsetContext.Provider>
        {/* )} */}
      </AnimatePresence>
    </>
  )
}

App.disableReactStrictMode = true
