import { useState, useEffect, useRef, useCallback } from 'react'
import { addEffect, useFrame } from '@react-three/fiber'
import Lenis from '@studio-freight/lenis'
import * as THREE from 'three'

const state = {
  top: 0,
  progress: 0,
  direction: 0,
}

const { damp } = THREE.MathUtils

export default function Scroll({ refList = [], lenisRef, children }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  const [sectionIdIndex, setSectionIdIndex] = useState(0)
  const [targetIdIndex, setTargetIdIndex] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('')
  const [isScrolling, setIsScrolling] = useState(false)
  const [currSection, setCurrSection] = useState(0)
  const [isClick, setIsClick] = useState(false)
  const [sections, setSections] = useState({})

  useEffect(() => {
    setSections(
      refList.reduce((acc, ref, index) => {
        acc[ref.current.id] = index
        return acc
      }, {}),
    )
  }, [refList])

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 0.4,
      easing: (x) => x,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      mouseMultiplier: 0.001,
      touchMultiplier: 0.001,
      infinite: false,
    })

    lenisRef.current = lenis

    // if (!isScrolling && !isClick) {
    lenis.on('scroll', ({ scroll, progress, direction }) => {
      state.top = scroll
      state.progress = progress
      state.direction = direction
      if (direction === 1) {
        setScrollDirection('down')
      }
      if (direction === -1) {
        setScrollDirection('up')
      }
      if (direction === 0) {
        setIsScrolling(false)
        setScrollDirection('')
      }
    })
    // }
    const effectSub = addEffect((time) => {
      lenis.raf(time)
    })
    return () => {
      effectSub()
      lenis.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenisRef])

  const scrollHandler = useCallback(
    ({ direction }) => {
      if (isScrolling) return
      setIsScrolling(true)
      const lenis = lenisRef.current
      const nextSection = currSection + (direction === 'down' ? 1 : -1)
      if (nextSection >= 0 && nextSection < refList.length) {
        const nextSectionRef = refList[nextSection]
        setCurrSection(nextSection)
        setSectionIdIndex(sections[nextSectionRef.current.id])
        lenis.scrollTo(nextSectionRef.current, {
          duration: isClick ? 0.25 : 0.5,
          easing: (x) =>
            x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
        })
      }
    },
    [isClick, currSection, refList, lenisRef, sections, isScrolling],
  )

  useEffect(() => {
    if (!scrollDirection || isScrolling) return
    scrollHandler({ direction: scrollDirection })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, scrollDirection])

  useEffect(() => {
    if (!isClick) return
    if (sectionIdIndex === targetIdIndex) {
      setIsClick(false)
    }
    if (sectionIdIndex !== targetIdIndex) {
      if (sectionIdIndex < targetIdIndex) {
        scrollHandler({ direction: 'down' })
      }
      if (sectionIdIndex > targetIdIndex) {
        scrollHandler({ direction: 'up' })
      }
    }
  }, [isClick, sectionIdIndex, targetIdIndex, scrollHandler])

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        setIsClick(true)
        setTargetIdIndex(index)
      })
    })
  }, [])

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
        className='bg-noise bg-[length:200px] bg-[0px_0px] bg-repeat'
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
