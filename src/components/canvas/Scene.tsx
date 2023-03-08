// import { useRef } from 'react'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'
import type { MeshProps } from '@react-three/fiber'

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
        <boxBufferGeometry />
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
    const offset = damp(state.camera.position.y, scroll / 7782, smooth, delta)
    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 2) * 5,
      Math.cos((offset * Math.PI) / 3) * -10,
    )
    state.camera.lookAt(0, 0, 0)
  })
}

export default function Scene({ children, ...props }) {
  const canvasRef = useRef(null)
  return (
    <Canvas {...props} ref={canvasRef} style={{ height: '100vh' }}>
      <ScrollTicker />
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
