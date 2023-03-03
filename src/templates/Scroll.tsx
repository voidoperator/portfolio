import { useState, useEffect, useRef } from 'react'
import { addEffect, useFrame } from '@react-three/fiber'
import Lenis from '@studio-freight/lenis'
import * as THREE from 'three'

const state = {
  top: 0,
  progress: 0,
  direction: 0,
}

const { damp } = THREE.MathUtils

export default function Scroll({
  children,
  wrapperRef,
  contentRef,
  heroBannerRef,
  aboutRef,
  experienceRef,
  skillsRef,
  projectsRef,
  contactRef,
}) {
  const lenisRef = useRef(null)
  const [scrollDirection, setScrollDirection] = useState('')
  const [currentlyViewing, setCurrentlyViewing] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 0.5,
      easing: (x) => x * x * x * x,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      mouseMultiplier: 0.0001,
      touchMultiplier: 3,
      infinite: false,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ({ scroll, progress, direction }) => {
      setIsScrolling(true)
      state.top = scroll
      state.progress = progress
      state.direction = direction
      if (state.direction === 1) {
        setScrollDirection('down')
      }
      if (state.direction === -1) {
        setScrollDirection('up')
      }
      if (state.direction === 0) {
        setIsScrolling(false)
        setScrollDirection('')
      }
    })
    const effectSub = addEffect((time) => lenis.raf(time))
    return () => {
      effectSub()
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current
    if (!scrollDirection || !isScrolling) return
    const scrollHandler = (direction: string) => {
      const currentSection = currentlyViewing
      const nextSection = currentSection + 1
      const prevSection = currentSection - 1
      if (direction === 'down' && currentlyViewing < 6) {
        let nextSectionRef: React.RefObject<Lenis>
        if (currentSection === 1) {
          nextSectionRef = aboutRef
        } else if (currentSection === 2) {
          nextSectionRef = experienceRef
        } else if (currentSection === 3) {
          nextSectionRef = skillsRef
        } else if (currentSection === 4) {
          nextSectionRef = projectsRef
        } else if (currentSection === 5) {
          nextSectionRef = contactRef
        }
        setCurrentlyViewing(nextSection)
        lenis.scrollTo(nextSectionRef.current)
      }
      if (direction === 'up' && currentlyViewing > 1) {
        let prevSectionRef: React.RefObject<Lenis>
        if (currentSection === 2) {
          prevSectionRef = heroBannerRef
        } else if (currentSection === 3) {
          prevSectionRef = aboutRef
        } else if (currentSection === 4) {
          prevSectionRef = experienceRef
        } else if (currentSection === 5) {
          prevSectionRef = skillsRef
        } else if (currentSection === 6) {
          prevSectionRef = projectsRef
        }
        setCurrentlyViewing(prevSection)
        lenis.scrollTo(prevSectionRef.current)
      }
    }
    scrollHandler(scrollDirection)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, scrollDirection])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        top: 0,
      }}
    >
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
        }}
        className='bg-repeat bg-noise bg-[length:200px] bg-[0px_0px]'
      >
        {children}
      </div>
    </div>
  )
}

export const ScrollTicker = ({ smooth = 9999999 }) => {
  useFrame(({ viewport, camera }, delta) => {
    camera.position.y = damp(camera.position.y, -state.progress * viewport.height, smooth, delta)
  })

  return null
}
