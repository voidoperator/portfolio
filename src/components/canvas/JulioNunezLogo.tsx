import { useEffect, useRef, useMemo, useLayoutEffect } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { AsciiEffect, GLTFLoader } from 'three-stdlib'
import { useColorModeContext } from '@/templates/hooks/useColorMode'
import type { MeshProps } from '@react-three/fiber'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export default function JulioNunezLogo(props: MeshProps) {
  const { isDarkMode } = useColorModeContext()
  const color = isDarkMode ? 'white' : 'black'

  const ref = useRef<MeshProps>()

  useLoader.preload(GLTFLoader, '/Logo.gltf')
  const { nodes }: GLTF = useGLTF('/Logo.gltf')

  useFrame((state, delta) => (ref.current.rotation.y = ref.current.rotation.y += delta / 4))

  return (
    <mesh geometry={nodes.Logo.geometry} {...props} ref={ref} scale={1.5} position={[0, 0, 0]}>
      <meshStandardMaterial color='hotpink' transparent opacity={0.5} />
    </mesh>
  )
}
