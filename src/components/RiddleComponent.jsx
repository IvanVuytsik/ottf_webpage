import React from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei'; 
import Seal from "./Seal";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Desc = styled.div`
  padding: 2rem;
  position: absolute; 
  background-color: #ffc082;
  color: #42210d;
  font-size: 2rem;
  border-radius: 0.5rem;
  width: 25rem;
  height: auto; 
  text-align: center;
  bottom: 5rem;

  @media only screen and (max-width: 768px) {  
    width: auto;
    height: auto;
    font-size: 1rem; 
    bottom: 20rem;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1180px) { 
    width: auto;
    height: auto;
    font-size: 1.5rem; 
    bottom: 20rem;
    padding: 0.75rem;
  }
`
const RiddleComponent = () => {
  return (
    <Container>
        <Canvas camera={{fov: 100}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <Stage preset="rembrandt" intensity={1} environment="city">
                <Seal />
            </Stage> 
        </Canvas>
         <Desc>...to hone the deadliest weapon of all - your mind</Desc>
    </Container>
  )
}

export default RiddleComponent