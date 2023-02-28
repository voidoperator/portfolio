import { useRef } from 'react'
// import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import AsciiTorus from '@/components/canvas/Ascii'
import Scroll from '@/templates/Scroll'
import '@/styles/global.css'

// const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'Home' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        <Scroll>
          {Component?.canvas && (
            // @ts-ignore
            <AsciiTorus className='pointer-events-none' eventSource={ref} eventPrefix='client'>
              {Component.canvas(pageProps)}
            </AsciiTorus>
          )}
        </Scroll>
      </Layout>
    </>
  )
}
