import { useEffect, useRef, useState, useMemo, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, useCursor } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'

export default function AsciiTorus() {
  return (
    <Canvas>
      <color attach='background' args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      {/* @ts-ignore */}
      <AsciiRenderer fgColor='white' bgColor='transparent' />
    </Canvas>
  )
}

function Torusknot(props) {
  const { nodes } = useGLTF('/suzanne-draco.glb')
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  //   useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 4))
  return (
    <mesh
      geometry={nodes.Suzanne.geometry}
      //   {...props}
      //   ref={ref}
      //   scale={clicked ? 1.5 : 1.25}
      //   onClick={() => click(!clicked)}
      //   onPointerOver={() => hover(true)}
      //   onPointerOut={() => hover(false)}
    >
      {/* <torusKnotGeometry args={[1, 0.2, 128, 32]} /> */}
      <meshStandardMaterial color='orange' />
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
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    effect.domElement.style.zIndex = '-1'
    return effect
  }, [characters, invert, color, resolution, gl])

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor, effect.domElement.style])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode.removeChild(effect.domElement)
    }
  }, [effect, gl.domElement.style, gl.domElement.parentNode])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it is a purely logical
}
