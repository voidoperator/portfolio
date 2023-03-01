import { useEffect, useRef } from 'react'
import { addEffect, useFrame } from '@react-three/fiber'
import Lenis from '@studio-freight/lenis'
import * as THREE from 'three'

const state = {
  top: 0,
  progress: 0,
  direction: 0,
}

const { damp } = THREE.MathUtils

export default function Scroll({ children, aboutMeRef, experienceRef }) {
  const content = useRef(null)
  const wrapper = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: content.current,
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      smoothTouch: true,
      mouseMultiplier: 2,
      touchMultiplier: 3,
      infinite: false,
    })

    const aboutMeElement = aboutMeRef.current
    // const experienceElement = experienceRef.current

    const aboutClientHeight = aboutMeElement.clientHeight

    const scrollHandler = () => {
      lenis.start()

      const scrollTop = state.top
      const scrollDir = state.direction

      if (scrollTop > 0 && scrollTop < aboutClientHeight && scrollDir > 0) {
        lenis.scrollTo(aboutMeElement)
        lenis.off('scroll', scrollHandler)
        if (scrollTop > aboutClientHeight) {
          lenis.stop()
        }
      }
      // if (scrollTop > aboutClientHeight && scrollDir > 0) {
      //   lenis.scrollTo(experienceElement)
      //   lenis.off('scroll', scrollHandler)
      // }
      // if (scrollTop > aboutClientHeight && scrollDir < 0) {
      //   lenis.scrollTo(aboutMeElement)
      //   lenis.off('scroll', scrollHandler)
      // }
    }

    lenis.on('scroll', ({ scroll, progress, direction }) => {
      state.top = scroll
      state.progress = progress
      state.direction = direction
      scrollHandler()
    })
    const effectSub = addEffect((time) => lenis.raf(time))
    return () => {
      effectSub()
      lenis.destroy()
    }
  }, [aboutMeRef, experienceRef])

  return (
    <div
      ref={wrapper}
      style={{
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        top: 0,
      }}
    >
      <div
        ref={content}
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
