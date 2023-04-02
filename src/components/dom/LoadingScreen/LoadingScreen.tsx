import React from 'react'
import { Loader } from '@react-three/drei'

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

type Props = {
  identifier: string
}

export default function LoadingScreen({ identifier }: Props) {
  return (
    <Loader
      key={identifier}
      containerStyles={container}
      innerStyles={inner}
      barStyles={bar}
      dataStyles={data}
      initialState={(active) => active}
      dataInterpolation={(percent) => `Loading ${percent.toFixed(0)}%`}
    />
  )
}
