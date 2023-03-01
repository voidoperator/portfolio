import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import Scroll from '@/templates/Scroll'
import '@/styles/global.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'Home' } }) {
  const ref = useRef()
  const aboutMeRef = useRef()
  const experienceRef = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Scroll aboutMeRef={aboutMeRef} experienceRef={experienceRef}>
          <Component {...pageProps} aboutMeRef={aboutMeRef} experienceRef={experienceRef} />
        </Scroll>
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}
