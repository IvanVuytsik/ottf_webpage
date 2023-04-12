import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/book-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="book001" geometry={nodes.book001.geometry} material={materials.staff_book} position={[0.06, 1.27, -0.46]} rotation={[-0.88, 0.17, 1.78]} scale={-3.47} />
      </group>
    </group>
  )
}

useGLTF.preload('/book-transformed.glb')
