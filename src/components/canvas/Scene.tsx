import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'
import type { MeshProps } from '@react-three/fiber'
import { Model } from './MusicVerse'

const { damp } = THREE.MathUtils

function Box(props: MeshProps) {
  const ref = useRef(null)

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  return (
    <>
      <mesh ref={ref} {...props}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export const ScrollTicker = ({ smooth = 999999 }): any => {
  const { scroll } = useScrollOffset()
  // useFrame(({camera, viewport}, delta) => {
  //   camera.position.y = damp(camera.position.y, scroll / (viewport.height * 100), 1, delta)
  // })
  useFrame((state, delta) => {
    // const offset = scroll / 7782
    const offset = damp(state.camera.position.y, scroll / 9000, smooth, delta)
    state.camera.position.set(
      Math.sin(offset) * -0.2,
      Math.atan((offset * Math.PI) / 6) * 0.5,
      Math.cos((offset * Math.PI) / 3) * -10,

      state.camera.lookAt(0, (scroll / 1000 / state.viewport.height) * 0.1, 0),
    )
  })
}

export default function Scene({ children, ...props }) {
  return (
    <Canvas
      {...props}
      camera={{
        far: 100,
        near: 0.1,
        fov: 30,
        zoom: 1,
        rotation: [0, -0.25, 0],
        position: [-0.05, -1.75, 4],
      }}
    >
      <axesHelper args={[1000]} />
      <ScrollTicker />
      <Model rotation={[180, 90, 90]} position={[-0.825, -1.5, -5.5]} />
      <Environment files={'/StudioGlow_BW.hdr'} background={false} />
      <hemisphereLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <fog attach='fog' args={['#ff5020', 5, 18]} />
      <Box scale={0.25} position={[2.5, 3.5, 0]} />
      <Box scale={0.25} position={[-2.5, -3.5, 0]} />
      <Box scale={0.25} position={[-2.5, 3.5, 0]} />
      <Box scale={0.25} position={[2.5, -3.5, 0]} />
      {children}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

// camera={{
//   position: [-0.41, 1.52, 0.37],
//   rotation: [-Math.PI / 2, 0, 0],
//   scale: [1.01, 1, 0.92],
//   far: 100,
//   near: 0.1,
//   fov: 122.9,
// }}
