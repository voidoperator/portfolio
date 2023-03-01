import { Canvas } from '@react-three/fiber'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      <color attach='background' args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
    </Canvas>
  )
}
