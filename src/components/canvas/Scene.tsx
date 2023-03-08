import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      <hemisphereLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      {children}
    </Canvas>
  )
}
