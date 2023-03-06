import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/global.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'Home' } }) {
  const ref = useRef()
  const router = useRouter()
  useEffect(() => {
    const removeHash = () => {
      const { pathname } = window.location
      if (pathname.charAt(pathname.length - 1) === '#') {
        const url = pathname.slice(0, -1)
        router.replace(url)
      }
    }
    window.addEventListener('hashchange', removeHash, false)
    return () => {
      window.removeEventListener('hashchange', removeHash, false)
    }
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}

App.disableReactStrictMode = true
