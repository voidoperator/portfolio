import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { LoadingDots } from '@/components/dom/Icons/LoadingDots'
import '@/styles/global.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

const loadingDivClasses = 'flex h-screen flex-col items-center justify-center overflow-hidden text-center text-white'

function easeInExpo(progress: number): number {
  return progress === 0 ? 0 : Math.pow(2, 10 * progress - 10)
}

export default function App({ Component, pageProps }) {
  const ref = useRef()
  const router = useRouter()
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const incrementFactor = Math.random() * 0.1 + 0.05
      setLoadingProgress((prevProgress) => (prevProgress >= 90 ? 100 : prevProgress + incrementFactor * 50))
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

  return (
    <>
      <Header title={pageProps.title} />
      <AnimatePresence mode='wait'>
        {loadingProgress > 100 ? (
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
        ) : (
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeInExpo }}
          >
            <Layout ref={ref}>
              {Component?.canvas && (
                <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
                  {Component.canvas(pageProps)}
                </Scene>
              )}
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

App.disableReactStrictMode = true
