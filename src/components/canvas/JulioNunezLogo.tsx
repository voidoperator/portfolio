import { useRef } from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
// import { useColorModeContext } from '@/templates/hooks/useColorMode'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export default function JulioNunezLogo(props: MeshProps) {
  // const { isDarkMode } = useColorModeContext()
  // const color = isDarkMode ? 'white' : 'black'

  const ref = useRef<MeshProps>()

  const { nodes }: GLTF = useGLTF('/Logo.gltf')

  useFrame((state, delta) => (ref.current.rotation.y = ref.current.rotation.y += delta / 4))

  return (
    <group dispose={null}>
      <mesh
        {...props}
        castShadow
        receiveShadow
        geometry={nodes.Logo.geometry}
        material={nodes.Logo.material}
        ref={ref}
      />
    </group>
  )
}
useGLTF.preload('/Logo.gltf')
