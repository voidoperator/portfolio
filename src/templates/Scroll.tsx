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

export default function Scroll({ refList = [], wrapperRef, contentRef, children }) {
  const lenisRef = useRef(null)
  const [scrollDirection, setScrollDirection] = useState('')
  const [isScrolling, setIsScrolling] = useState(false)
  const [currSection, setCurrSection] = useState(0)
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 0.5,
      easing: (x) => Math.pow(x, 4),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      mouseMultiplier: 0.001,
      touchMultiplier: 0.001,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current
    if (!scrollDirection || !isScrolling) return
    const scrollHandler = (direction: string) => {
      if (direction === 'down') {
        const nextSection = currSection + 1
        const nextSectionRef = refList[nextSection % refList.length]
        setCurrSection(nextSection)
        lenis.scrollTo(nextSectionRef.current)
      }
      if (direction === 'up') {
        const prevSection = currSection - 1
        const nextSectionRef = refList[prevSection % refList.length]
        setCurrSection(prevSection)
        lenis.scrollTo(nextSectionRef.current)
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
