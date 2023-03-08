// import { useRef } from 'react'
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ScrollControls, Scroll, OrthographicCamera, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'

const { damp } = THREE.MathUtils

const state = {
  top: 0,
  progress: 0,
  direction: 0,
}

function Box() {
  const ref = useRef(null)
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })
  // useFrame(({ viewport, camera }, delta) => {
  //   camera.position.y = damp(camera.position.y * viewport.height, 9999, delta)
  // })
  // useFrame(({ viewport, camera }, delta) => {
  //   state.top = viewport.height
  // })
  // console.log('position', state.top)
  return (
    <>
      <mesh ref={ref} position={[0, 0, 1]}>
        <boxBufferGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

function Test(props) {
  const ref = useRef()
  const data = useScroll()
  useFrame((state, delta) => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened

    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    const a = data.range(0, 1 / 3)
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    const b = data.range(1 / 3, 1 / 3)
    // Same as above but with a margin of 0.1 on both ends
    const c = data.range(1 / 3, 1 / 3, 0.1)
    // Will move between 0-1-0 for the selected range
    const d = data.curve(1 / 3, 1 / 3)
    // Same as above, but with a margin of 0.1 on both ends
    const e = data.curve(1 / 3, 1 / 3, 0.1)
    // Returns true if the offset is in range and false if it isn't
    const f = data.visible(2 / 3, 1 / 3)
    // The visible function can also receive a margin
    const g = data.visible(2 / 3, 1 / 3, 0.1)
    // console.log('e', e)
  })
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export const ScrollTicker = ({ smooth = 10 }) => {
  const { scroll } = useScrollOffset()
  useFrame(({ viewport, camera }, delta) => {
    camera.position.y = damp(camera.position.y, scroll / (viewport.height * 100), smooth, delta)
  })
  return null
}

export default function Scene({ children, ...props }) {
  const { scroll } = useScrollOffset()
  const canvasRef = useRef(null)
  return (
    <Canvas {...props} ref={canvasRef} style={{ position: 'fixed', height: '100vh' }}>
      <ScrollTicker />
      <ScrollControls pages={6} damping={0.1}>
        {/* <Scroll> */}
        <Box />
        {/* <Test position={[0, 0, 0]} />
          <Test position={[0, 7.67, 0]} />
          <Test position={[0, 7.67 * 1, 0]} />
        </Scroll> */}
        <Scroll>
          <hemisphereLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          {children}
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}
