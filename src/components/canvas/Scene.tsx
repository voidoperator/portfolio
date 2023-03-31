import React, { useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Loader } from '@react-three/drei'
import * as THREE from 'three'
import { useColorModeContext } from '@/templates/hooks/useColorMode'
import CameraControls from 'camera-controls'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const container = {
  display: 'flex',
  height: '100svh',
  width: '100vw',
  fontSize: '1.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'TitlingGothicFBExtLight',
}
const data = {
  textAlign: 'center',
  width: '100%',
  fontFamily: 'TitlingGothicFBExtLight',
}
const inner = {
  width: '50vw',
  fontFamily: 'TitlingGothicFBExtLight',
}
const bar = {
  borderRadius: '16px',
  height: '1rem',
  fontFamily: 'TitlingGothicFBExtLight',
}

CameraControls.install({ THREE })

function Controls({ look = new THREE.Vector3() }) {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [camera, gl.domElement])
  return useFrame((state, delta) => {
    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
    )
    return controls.update(delta)
  })
}

export default function Scene({ children, ...props }) {
  const [isMobile, setIsMobile] = useState(false)
  const { isDarkMode } = useColorModeContext()
  const fogColor = isDarkMode ? '#420606' : '#e7e7e7'
  const bloomIntensity = isDarkMode ? 2 : 1

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  return (
    <>
      <Canvas {...props} linear camera={{ fov: 70, far: 10000 }}>
        <hemisphereLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Controls />
        <OrbitControls
          autoRotateSpeed={0.35}
          maxDistance={50}
          minDistance={18}
          autoRotate
          enableRotate={!isMobile}
          enableZoom={false}
          enablePan={false}
          dampingFactor={1}
          zoomSpeed={0}
          rotateSpeed={0.035}
        />
        <Environment files={'/img/QuasarEnv.hdr'} background={true} />
        {children}
        <fog attach='fog' args={[`${fogColor}`, 0, 175]} />
        <EffectComposer>
          <Bloom intensity={bloomIntensity} kernelSize={5} luminanceThreshold={0.5} luminanceSmoothing={0.35} />
        </EffectComposer>
      </Canvas>
      <Loader
        containerStyles={container}
        innerStyles={inner}
        barStyles={bar}
        dataStyles={data}
        dataInterpolation={(percent) => `Loading ${percent.toFixed(0)}%`}
      />
    </>
  )
}
