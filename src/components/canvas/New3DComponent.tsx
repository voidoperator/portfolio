import { useRef } from 'react'
import { MeshProps, useLoader, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three-stdlib'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export default function New3DComponent(props: MeshProps) {
  useLoader.preload(GLTFLoader, '/Logo.gltf')
  const { nodes }: GLTF = useGLTF('/Logo.gltf')
  const ref = useRef<MeshProps>()
  //   useFrame((state, delta) => (ref.current.rotation.y = ref.current.rotation.y += delta / 4))
  return (
    <mesh geometry={nodes.Logo.geometry} {...props} ref={ref} scale={1.5}>
      <meshStandardMaterial color='orange' bgColor='transparent' />
    </mesh>
  )
}
