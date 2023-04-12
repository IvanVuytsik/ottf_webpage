import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/seal-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.SealTexture} position={[-0.01, 0, -0.05]} />
      </group>
    </group>
  )
}

useGLTF.preload('/seal-transformed.glb')
