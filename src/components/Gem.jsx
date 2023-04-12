import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/gem-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plane010" position={[0.01, 0.04, -0.01]}>
          <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={materials.CoinTexture} />
          <mesh name="Plane013_1" geometry={nodes.Plane013_1.geometry} material={materials.Staff} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gem-transformed.glb')
