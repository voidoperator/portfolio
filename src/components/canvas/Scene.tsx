import { ScrollTicker } from '@/templates/Scroll'
import { Canvas } from '@react-three/fiber'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      <ScrollTicker />
      <color attach='background' args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
    </Canvas>
  )
}
