import { useEffect, useRef, useMemo, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { useColorModeContext } from '@/templates/hooks/useColorMode'
import type { MeshProps } from '@react-three/fiber'

export function JNLogoAscii() {
  const { isDarkMode } = useColorModeContext()
  const color = isDarkMode ? 'white' : 'black'
  return (
    <>
      <hemisphereLight />
      <JNLogoGeometry position={[0, 0.5, 0]} />
      <OrbitControls enableZoom={false} touches={false} />
      <AsciiRenderer fgColor={color} bgColor='transparent' resolution={0.125} />
    </>
  )
}

function JNLogoGeometry(props) {
  const { nodes } = useGLTF('/Logo.gltf')
  const ref = useRef<MeshProps>()
  useFrame((state, delta) => (ref.current.rotation.y = ref.current.rotation.y += delta / 4))
  return (
    <mesh geometry={nodes.Logo.geometry} {...props} ref={ref} scale={1.5}>
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}

export function Test(props) {
  const { nodes } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-low-poly/model.gltf',
  )
  const ref = useRef<MeshProps>()
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 4))
  return (
    <mesh geometry={nodes.Suzanne.geometry} position={[0, -4, 1.5]} ref={ref} scale={1.5}>
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = ' .:-+*=@;',
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

  return null
}
