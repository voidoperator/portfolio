import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import Scroll from '@/templates/Scroll'
import '@/styles/global.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'Home' } }) {
  const ref = useRef()
  const contentRef = useRef(null)
  const wrapperRef = useRef(null)
  const heroBannerRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Scroll
          contentRef={contentRef}
          wrapperRef={wrapperRef}
          heroBannerRef={heroBannerRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        >
          <Component
            {...pageProps}
            heroBannerRef={heroBannerRef}
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            skillsRef={skillsRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            lenisContentRef={contentRef}
            lenisWrapperRef={wrapperRef}
          />
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
