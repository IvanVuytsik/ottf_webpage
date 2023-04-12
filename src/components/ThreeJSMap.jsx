import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/map-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.map} />
    </group>
  )
}

useGLTF.preload('/map-transformed.glb')
