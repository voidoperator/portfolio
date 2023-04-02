/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx vzscene.glb -t -k s -T -R --weld
*/

import React, { useMemo, useRef } from 'react'
import { Edges, MeshTransmissionMaterial, useGLTF, Loader } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

const container = {
  display: 'flex',
  height: '100svh',
  width: '100vw',
  fontSize: '1.25rem',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'TitlingGothicFBExtLight',
}
const data = {
  textAlign: 'center',
  width: '100%',
  fontFamily: 'TitlingGothicFBExtLight',
}
const inner = {
  width: '50vw',
  fontFamily: 'TitlingGothicFBExtLight',
}
const bar = {
  borderRadius: '16px',
  height: '1rem',
  fontFamily: 'TitlingGothicFBExtLight',
}

type GLTFResult = GLTF & {
  nodes: {
    circle1_constant2_0: THREE.Mesh
    circle2_constant2_0: THREE.Mesh
    circle_constant1_0: THREE.Mesh
    circle_HoloFillDark_0: THREE.Mesh
    geo1_HoloFillDark_0_1: THREE.Mesh
    geo1_HoloFillDark_0_2: THREE.Mesh
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
    Sphere_Core_0017: THREE.Mesh
    Sphere_Core_0018: THREE.Mesh
    Sphere_Core_0019: THREE.Mesh
    Sphere_Core_0020: THREE.Mesh
    Sphere_Core_0021: THREE.Mesh
    Sphere_Core_0022: THREE.Mesh
    Sphere_Core_0023: THREE.Mesh
    Sphere_Core_0024: THREE.Mesh
    Sphere_Core_0025: THREE.Mesh
    Sphere_Core_0026: THREE.Mesh
    Sphere_Core_0027: THREE.Mesh
    Sphere_Core_0028: THREE.Mesh
    Sphere_Core_0029: THREE.Mesh
    Sphere_Core_0030: THREE.Mesh
    Sphere_Core_0031: THREE.Mesh
    Sphere_Core_0032: THREE.Mesh
    vzHumanoid: THREE.Mesh
    dome: THREE.Mesh
    handOrb: THREE.Mesh
    JNLogo: THREE.Mesh
    medulaOrb: THREE.Mesh
  }
  materials: {
    constant2: THREE.MeshStandardMaterial
    constant1: THREE.MeshStandardMaterial
    HoloFillDark: THREE.MeshStandardMaterial
    ['Core.001']: THREE.MeshStandardMaterial
    TransMetal: THREE.MeshStandardMaterial
    hdrMaterial: THREE.MeshBasicMaterial
    Core: THREE.MeshStandardMaterial
    Diamond: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

useGLTF.preload('/3d/vzscene-transformed.glb')

export default function FullScene(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3d/vzscene-transformed.glb') as GLTFResult
  const texture = useLoader(THREE.TextureLoader, '/img/LEDscreen.webp')
  const refLogo = useRef(null)
  const refCircsConstOne = useRef(null)
  const refCircsConstTwo = useRef(null)
  const refsHoloFillOne = useRef(null)
  const refsHoloFillTwo = useRef(null)
  const refGlassOrbs = useRef(null)
  const refsMainFrame = useRef(null)

  const hdrMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
      }),
    [texture],
  )

  useFrame(() => {
    const refGlassOrbsCurrent = refGlassOrbs.current
    const refCircsConstTwoCurrent = refCircsConstTwo.current
    const refCircsConstOneCurrent = refCircsConstOne.current
    const refsHoloFillOneCurrent = refsHoloFillOne.current
    const refsHoloFillTwoCurrent = refsHoloFillTwo.current
    const refsMainFrameCurrent = refsMainFrame.current
    const refLogoCurrent = refLogo.current

    if (refLogoCurrent) {
      refLogo.current.rotation.y += 0.005
    }
    if (refGlassOrbsCurrent) {
      refGlassOrbs.current.rotation.y += 0.0005
    }
    if (refCircsConstTwoCurrent) {
      refCircsConstTwo.current.rotation.x -= 0.0025
    }
    if (refCircsConstOneCurrent) {
      refCircsConstOne.current.rotation.x += 0.0025
    }
    if (refsHoloFillOneCurrent) {
      refsHoloFillOne.current.rotation.x -= 0.0025
    }
    if (refsHoloFillTwoCurrent) {
      refsHoloFillTwo.current.rotation.x += 0.0025
    }
    if (refsMainFrameCurrent) {
      refsMainFrame.current.rotation.x += 0.00175
      refsMainFrame.current.rotation.y += 0.00175
      refsMainFrame.current.rotation.z += 0.00175
    }
  })

  if (!nodes) {
    return (
      <Loader
        key={'canvasLoader'}
        containerStyles={container}
        innerStyles={inner}
        barStyles={bar}
        dataStyles={data}
        initialState={(active) => active}
        dataInterpolation={(percent) => `Loading ${percent.toFixed(0)}%`}
      />
    )
  }

  return (
    <group {...props} dispose={null}>
      <group name='scifiRotate' position={[-0.39, 12.05, -7.22]} scale={5}>
        <mesh
          ref={refCircsConstOne}
          name='circle1_constant2_0'
          geometry={nodes.circle1_constant2_0.geometry}
          material={materials.constant2}
        />
        <mesh
          ref={refCircsConstTwo}
          name='circle2_constant2_0'
          geometry={nodes.circle2_constant2_0.geometry}
          material={materials.constant2}
        />
        <mesh
          ref={refsHoloFillOne}
          name='circle_constant1_0'
          geometry={nodes.circle_constant1_0.geometry}
          material={materials.constant1}
        />
        <mesh
          ref={refsHoloFillTwo}
          name='circle_HoloFillDark_0'
          geometry={nodes.circle_HoloFillDark_0.geometry}
          material={materials.HoloFillDark}
        />
        <group ref={refsMainFrame}>
          <mesh
            name='geo1_HoloFillDark_0_1'
            geometry={nodes.geo1_HoloFillDark_0_1.geometry}
            material={materials.HoloFillDark}
          />
          <mesh
            name='geo1_HoloFillDark_0_2'
            geometry={nodes.geo1_HoloFillDark_0_2.geometry}
            material={materials.constant1}
          />
        </group>
      </group>
      <mesh
        ref={refLogo}
        name='JNLogo'
        geometry={nodes.JNLogo.geometry}
        position={[-4.32, 7.7, 5.04]}
        scale={[0.5, 0.5, 2.25]}
      >
        <meshBasicMaterial transparent opacity={0} />
        {/* @ts-ignore */}
        <MeshTransmissionMaterial
          color='hotpink'
          resolution={128}
          thickness={0.95}
          anisotropy={2}
          temporalDistortion={0.05}
          distortion={10}
          chromaticAberration={1}
        />
        <Edges scale={0.95} threshold={11.2}>
          <lineBasicMaterial color={[1.25, 1.25, 1.25]} toneMapped={true} />
        </Edges>
      </mesh>
      <mesh
        name='vzHumanoid'
        geometry={nodes.vzHumanoid.geometry}
        material={materials.TransMetal}
        position={[-1.46, 9.02, 1.72]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh name='dome' geometry={nodes.dome.geometry} material={hdrMaterial} position={[-1.52, 7.17, 0]} />
      <mesh
        name='handOrb'
        geometry={nodes.handOrb.geometry}
        material={materials.Core}
        position={[6.1, 4.9, -1.16]}
        scale={2}
      />
      <group name='lightOrbs' position={[0, 7.51, 0]}>
        <mesh
          name='Sphere_Core_0001'
          geometry={nodes.Sphere_Core_0001.geometry}
          material={materials['Core.001']}
          position={[-5.57, -10.15, 0.93]}
        />
        <mesh
          name='Sphere_Core_0002'
          geometry={nodes.Sphere_Core_0002.geometry}
          material={materials['Core.001']}
          position={[-8.36, -3.35, -1.14]}
        />
        <mesh
          name='Sphere_Core_0003'
          geometry={nodes.Sphere_Core_0003.geometry}
          material={materials['Core.001']}
          position={[6.62, -4.46, 2.4]}
        />
        <mesh
          name='Sphere_Core_0004'
          geometry={nodes.Sphere_Core_0004.geometry}
          material={materials['Core.001']}
          position={[3.94, -8.47, 6.16]}
        />
        <mesh
          name='Sphere_Core_0005'
          geometry={nodes.Sphere_Core_0005.geometry}
          material={materials['Core.001']}
          position={[-3.02, -8.47, 8.07]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0006'
          geometry={nodes.Sphere_Core_0006.geometry}
          material={materials['Core.001']}
          position={[2.77, -4.46, 7.13]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0007'
          geometry={nodes.Sphere_Core_0007.geometry}
          material={materials['Core.001']}
          position={[0.17, -3.35, -4.19]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0008'
          geometry={nodes.Sphere_Core_0008.geometry}
          material={materials['Core.001']}
          position={[-1.47, -10.15, -2.67]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0009'
          geometry={nodes.Sphere_Core_0009.geometry}
          material={materials['Core.001']}
          position={[-1.47, -1.14, -2.96]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0010'
          geometry={nodes.Sphere_Core_0010.geometry}
          material={materials['Core.001']}
          position={[0.17, 7.23, -0.61]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0011'
          geometry={nodes.Sphere_Core_0011.geometry}
          material={materials['Core.001']}
          position={[0.65, 3.72, 4.02]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0012'
          geometry={nodes.Sphere_Core_0012.geometry}
          material={materials['Core.001']}
          position={[-3.02, 2.11, 4.96]}
          rotation={[0, -1.21, 0]}
        />
        <mesh
          name='Sphere_Core_0013'
          geometry={nodes.Sphere_Core_0013.geometry}
          material={materials['Core.001']}
          position={[3.94, 2.11, 3.05]}
        />
        <mesh
          name='Sphere_Core_0014'
          geometry={nodes.Sphere_Core_0014.geometry}
          material={materials['Core.001']}
          position={[4.36, 6.12, -0.71]}
        />
        <mesh
          name='Sphere_Core_0015'
          geometry={nodes.Sphere_Core_0015.geometry}
          material={materials['Core.001']}
          position={[-6.41, 7.23, 2.81]}
        />
        <mesh
          name='Sphere_Core_0016'
          geometry={nodes.Sphere_Core_0016.geometry}
          material={materials['Core.001']}
          position={[-5.57, 0.43, -2.19]}
        />
      </group>
      <group ref={refGlassOrbs} name='glassOrbs' position={[0, 7.51, 0]}>
        <mesh
          name='Sphere_Core_0017'
          geometry={nodes.Sphere_Core_0017.geometry}
          material={nodes.Sphere_Core_0017.material}
          position={[4.88, 0.19, -2.19]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0018'
          geometry={nodes.Sphere_Core_0018.geometry}
          material={nodes.Sphere_Core_0018.material}
          position={[2.6, 3.93, -1.68]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0019'
          geometry={nodes.Sphere_Core_0019.geometry}
          material={nodes.Sphere_Core_0019.material}
          position={[-1.96, 4.93, -0.71]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0020'
          geometry={nodes.Sphere_Core_0020.geometry}
          material={nodes.Sphere_Core_0020.material}
          position={[-0.46, 1.84, 2.92]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0021'
          geometry={nodes.Sphere_Core_0021.geometry}
          material={nodes.Sphere_Core_0021.material}
          position={[-4.18, -3.12, 3.2]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0022'
          geometry={nodes.Sphere_Core_0022.geometry}
          material={nodes.Sphere_Core_0022.material}
          position={[-6.38, -6.71, 3.05]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0023'
          geometry={nodes.Sphere_Core_0023.geometry}
          material={nodes.Sphere_Core_0023.material}
          position={[1.42, -2.79, 2.71]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0024'
          geometry={nodes.Sphere_Core_0024.geometry}
          material={nodes.Sphere_Core_0024.material}
          position={[-3.54, 1.01, -2.96]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0025'
          geometry={nodes.Sphere_Core_0025.geometry}
          material={nodes.Sphere_Core_0025.material}
          position={[1.33, -8, -2.67]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0026'
          geometry={nodes.Sphere_Core_0026.geometry}
          material={nodes.Sphere_Core_0026.material}
          position={[2.88, -4.48, -2.45]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0027'
          geometry={nodes.Sphere_Core_0027.geometry}
          material={nodes.Sphere_Core_0027.material}
          position={[6.16, -6.65, 2.16]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0028'
          geometry={nodes.Sphere_Core_0028.geometry}
          material={nodes.Sphere_Core_0028.material}
          position={[-6.96, -1, -0.27]}
          rotation={[0, -1.21, 0]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0029'
          geometry={nodes.Sphere_Core_0029.geometry}
          material={nodes.Sphere_Core_0029.material}
          position={[-0.17, -0.78, 6.16]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0030'
          geometry={nodes.Sphere_Core_0030.geometry}
          material={nodes.Sphere_Core_0030.material}
          position={[3.29, -10.94, 2.4]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0031'
          geometry={nodes.Sphere_Core_0031.geometry}
          material={nodes.Sphere_Core_0031.material}
          position={[1.2, -5.27, -5.95]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
        <mesh
          name='Sphere_Core_0032'
          geometry={nodes.Sphere_Core_0032.geometry}
          material={nodes.Sphere_Core_0032.material}
          position={[0.59, -9.27, 4.92]}
        >
          {/* @ts-ignore */}
          <MeshTransmissionMaterial
            color='hotpink'
            resolution={128}
            thickness={0.95}
            anisotropy={2}
            temporalDistortion={0.05}
            distortion={10}
            chromaticAberration={1}
          />
        </mesh>
      </group>
    </group>
  )
}
