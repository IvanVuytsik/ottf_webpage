import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/axe-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Handaxe.geometry} material={materials.HandAxe} />
    </group>
  )
}

useGLTF.preload('/axe-transformed.glb')
