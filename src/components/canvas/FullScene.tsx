/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 vzscene.gltf --transform
*/

import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    circle2_constant2_0: THREE.Mesh
    circle1_constant2_0: THREE.Mesh
    circle_HoloFillDark_0: THREE.Mesh
    circle_constant1_0: THREE.Mesh
    geo1_HoloFillDark_0: THREE.Mesh
    geo1_constant1_0: THREE.Mesh
    Sphere_Core_0: THREE.Mesh
    VoronoiDynoBake_Material_0: THREE.Mesh
    Sphere_Core_0001: THREE.Mesh
    Sphere_Core_0002: THREE.Mesh
    Sphere_Core_0003: THREE.Mesh
    Sphere_Core_0004: THREE.Mesh
    Sphere_Core_0005: THREE.Mesh
    Sphere_Core_0006: THREE.Mesh
    Sphere_Core_0007: THREE.Mesh
    Sphere_Core_0008: THREE.Mesh
    Sphere_Core_0009: THREE.Mesh
    Sphere_Core_0010: THREE.Mesh
    Sphere_Core_0011: THREE.Mesh
    Sphere_Core_0012: THREE.Mesh
    Sphere_Core_0013: THREE.Mesh
    Sphere_Core_0014: THREE.Mesh
    Sphere_Core_0015: THREE.Mesh
    Sphere_Core_0016: THREE.Mesh
    Logo: THREE.Mesh
    dome: THREE.Mesh
    Genesis3MaleShape1: THREE.Mesh
  }
  materials: {
    constant2: THREE.MeshStandardMaterial
    HoloFillDark: THREE.MeshPhysicalMaterial
    constant1: THREE.MeshStandardMaterial
    Core: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Core.001']: THREE.MeshStandardMaterial
    ['Core.002']: THREE.MeshStandardMaterial
    ['Core.003']: THREE.MeshStandardMaterial
    ['Core.004']: THREE.MeshStandardMaterial
    ['Core.006']: THREE.MeshStandardMaterial
    ['Core.007']: THREE.MeshStandardMaterial
    ['Core.008']: THREE.MeshStandardMaterial
    ['Core.009']: THREE.MeshStandardMaterial
    ['Core.010']: THREE.MeshStandardMaterial
    ['Core.011']: THREE.MeshStandardMaterial
    ['Core.012']: THREE.MeshStandardMaterial
    ['Core.013']: THREE.MeshStandardMaterial
    ['Core.014']: THREE.MeshStandardMaterial
    ['Core.015']: THREE.MeshStandardMaterial
    ['Core.016']: THREE.MeshStandardMaterial
    ['Core.017']: THREE.MeshStandardMaterial
    Material: THREE.MeshPhysicalMaterial
  }
}

export default function FullScene(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d/vzscene-transformed.glb') as GLTFResult
  const texture = useLoader(THREE.TextureLoader, '/img/vzbg.webp')

  const hdrMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
      }),
    [texture],
  )
  const refCircsConstOne = useRef(null)
  const refCircsConstTwo = useRef(null)
  const refsHoloFillOne = useRef(null)
  const refsHoloFillTwo = useRef(null)
  const refLogo = useRef(null)

  useFrame(() => {
    refCircsConstOne.current.rotation.x += 0.0025
  })
  useFrame(() => {
    refCircsConstTwo.current.rotation.x -= 0.0025
  })
  useFrame(() => {
    refsHoloFillOne.current.rotation.x -= 0.0025
  })
  useFrame(() => {
    refsHoloFillTwo.current.rotation.x += 0.0025
  })
  useFrame(() => {
    refLogo.current.rotation.y += 0.005
  })

  return (
    <group {...props} dispose={null}>
      <group position={[-0.39, 12.05, -7.22]} scale={5}>
        <mesh ref={refCircsConstOne} geometry={nodes.circle1_constant2_0.geometry} material={materials.constant2} />
        <mesh ref={refCircsConstTwo} geometry={nodes.circle2_constant2_0.geometry} material={materials.constant2} />
        <mesh ref={refsHoloFillOne} geometry={nodes.circle_constant1_0.geometry} material={materials.constant1} />
        <mesh ref={refsHoloFillTwo} geometry={nodes.circle_HoloFillDark_0.geometry} material={materials.HoloFillDark} />
        <mesh geometry={nodes.geo1_constant1_0.geometry} material={materials.constant1} />
        <mesh geometry={nodes.geo1_HoloFillDark_0.geometry} material={materials.HoloFillDark} />
      </group>
      <group position={[6.17, 5.03, -1.12]} scale={0.75}>
        <mesh geometry={nodes.Sphere_Core_0.geometry} material={materials.Core} />
        <mesh
          geometry={nodes.VoronoiDynoBake_Material_0.geometry}
          material={materials['Material.002']}
          position={[-8.76, 5.38, -5.94]}
          scale={0.15}
        />
      </group>
      <mesh
        geometry={nodes.Genesis3MaleShape1.geometry}
        material={materials.Material}
        position={[-0.82, 1.86, 1.3]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh geometry={nodes.dome.geometry} material={hdrMaterial} position={[-1.52, 7.17, 0]} />
      <mesh
        geometry={nodes.Sphere_Core_0001.geometry}
        material={materials['Core.001']}
        position={[-5.57, -2.65, 0.93]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0002.geometry}
        material={materials['Core.001']}
        position={[-8.36, 4.16, -1.14]}
      />
      <mesh geometry={nodes.Sphere_Core_0003.geometry} material={materials['Core.001']} position={[6.62, 3.04, 2.4]} />
      <mesh
        geometry={nodes.Sphere_Core_0004.geometry}
        material={materials['Core.001']}
        position={[3.94, -0.96, 6.16]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0005.geometry}
        material={materials['Core.001']}
        position={[-3.02, -0.96, 8.07]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0006.geometry}
        material={materials['Core.001']}
        position={[2.77, 3.04, 7.13]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0007.geometry}
        material={materials['Core.001']}
        position={[0.17, 4.16, -4.19]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0008.geometry}
        material={materials['Core.001']}
        position={[-1.47, -2.65, -2.67]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0009.geometry}
        material={materials['Core.001']}
        position={[-1.47, 6.37, -2.96]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0010.geometry}
        material={materials['Core.001']}
        position={[0.17, 14.74, -0.61]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0011.geometry}
        material={materials['Core.001']}
        position={[0.65, 11.23, 4.02]}
        rotation={[0, -1.21, 0]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0012.geometry}
        material={materials['Core.001']}
        position={[-3.02, 9.62, 4.96]}
        rotation={[0, -1.21, 0]}
      />
      <mesh geometry={nodes.Sphere_Core_0013.geometry} material={materials['Core.001']} position={[3.94, 9.62, 3.05]} />
      <mesh
        geometry={nodes.Sphere_Core_0014.geometry}
        material={materials['Core.001']}
        position={[4.36, 13.63, -0.71]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0015.geometry}
        material={materials['Core.001']}
        position={[-6.41, 14.74, 2.81]}
      />
      <mesh
        geometry={nodes.Sphere_Core_0016.geometry}
        material={materials['Core.001']}
        position={[-5.57, 7.93, -2.19]}
      />
      <mesh
        ref={refLogo}
        geometry={nodes.Logo.geometry}
        material={materials.Core}
        position={[-4.32, 7.45, 5.04]}
        scale={0.35}
      />
    </group>
  )
}

useGLTF.preload('/3d/vzscene-transformed.glb')
