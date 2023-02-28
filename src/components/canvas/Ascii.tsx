import { useEffect, useRef, useState, useMemo, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'

export default function AsciiTorus() {
  return (
    <Canvas>
      <color attach='background' args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <JNLogo />
      <OrbitControls enableZoom={false} />
      {/* @ts-ignore */}
      <AsciiRenderer fgColor={'white'} bgColor='transparent' resolution={0.185} />
    </Canvas>
  )
}

function JNLogo(props) {
  const { nodes } = useGLTF('/Logo.gltf')
  const ref = useRef()
  /* @ts-ignore */
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 4))
  return (
    <mesh geometry={nodes.Logo.geometry} {...props} ref={ref} scale={1.5}>
      <meshStandardMaterial color='white' />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = ' .:-+*=%@#',
  invert = true,
  color = false,
  resolution = 0.15,
}) {
  const { size, gl, scene, camera } = useThree()
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    effect.domElement.style.zIndex = '-1'
    return effect
  }, [characters, invert, color, resolution, gl])

  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor, effect.domElement.style])

  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode.removeChild(effect.domElement)
    }
  }, [effect, gl.domElement.style, gl.domElement.parentNode])

  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)
}
