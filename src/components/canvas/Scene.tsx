import React, { useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'
import { Model } from './VZSceneTest'
import { useColorModeContext } from '@/templates/hooks/useColorMode'
// import ColorMode

import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

const { damp } = THREE.MathUtils

// export const ScrollTicker = ({ smooth = 999999 }): any => {
//   const { scroll } = useScrollOffset()
//   // useFrame(({camera, viewport}, delta) => {
//   //   camera.position.y = damp(camera.position.y, scroll / (viewport.height * 100), 1, delta)
//   // })
//   useFrame((state, delta) => {
//     // const offset = scroll / 7782
//     const offset = damp(state.camera.position.y, scroll / 9000, smooth, delta)
//     state.camera.position.set(
//       Math.sin(offset) * -0.2,
//       Math.atan((offset * Math.PI) / 6) * 0.5,
//       Math.cos((offset * Math.PI) / 3) * -10,

//       state.camera.lookAt(0, (scroll / 1000 / state.viewport.height) * 0.1, 0),
//     )
//   })
// }

function Controls({ zoom = 0, focus = { x: 10, y: 0, z: 0 }, pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [camera, gl.domElement])
  return useFrame((state, delta) => {
    zoom ? pos.set(focus.x, focus.y, focus.z + 0.2) : pos.set(0, 10, -15)
    zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0.02, 1.23, 0.15)

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true,
    )
    return controls.update(delta)
  })
}

export default function Scene({ children, ...props }) {
  const { isDarkMode } = useColorModeContext()
  const fogColor = isDarkMode ? '#420606' : '#fefff6'
  // useFrame(() => {
  //   ref.current.rotation.x += 0.01
  //   ref.current.rotation.y += 0.01
  // })
  return (
    <Canvas {...props} linear camera={{ fov: 70, far: 100000 }}>
      <Model position={[0, -2.5, 0]} />
      {/* <axesHelper args={[5000]} /> */}
      <Environment files={'/HDRI_VZEnv.hdr'} background={false} />
      <hemisphereLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls enableZoom={false} />
      <Controls />
      <fog attach='fog' args={[`${fogColor}`, 5, 175]} />
      {/* {children} */}
    </Canvas>
  )
}
