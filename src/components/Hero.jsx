import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';  

const Section = styled.div`
    height: 100vh; 
    width: 100vw; 
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #42210d; 

    @media only screen and (max-width: 768px) { 
        width: 100%; 
        height: 100%; 
    } 
`
const Container = styled.div` 
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between; 
 
    @media only screen and (max-width: 768px) { 
        height: 100%;
        display: grid;
        align-items: center;
        justify-content: center; 
    } 

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        flex: 10;
    }
`

const Left = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1rem; 
` 

const Title = styled.h1`
    flex: 1;
    font-size: 4rem; 

    @media only screen and (max-width: 768px) { 
        font-size: 1.5rem; 
        text-align: center;
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        font-size: 2.5rem; 
        text-align: center; 
        flex: 1;
    }
`

const WhatItIs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    gap: 0.5rem;
    padding: 0 2rem 0 2rem ;

`

const Line = styled.img` 
    height: 1rem;
    width: 2rem;


    @media only screen and (max-width: 768px) { 
        height: 0.5rem;
        width: 1rem;
    }
`

const Subtitle = styled.h2`
    font-size: 3rem;


    @media only screen and (max-width: 768px) { 
       font-size: 1rem; 
    }
`

const Desc = styled.p`
    text-align: center;
    font-size: 2rem;

    @media only screen and (max-width: 768px) { 
        font-size: 1rem; 
    }
`

const Button = styled.button` 
    width: auto;
    padding: 0.5rem;
    background-color: #ffc082;
    color: #42210d;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;

    @media only screen and (max-width: 768px) { 
        font-size: 1rem; 
        padding: 0.25rem;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    width: 100%;
    height: 100%;  

    @media only screen and (max-width: 768px) { 
        width: 100%;
        height: 10rem;  
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        width: 100%;
        height: 20rem; 
    }
`

const Img = styled.img` 
    width: 30rem;
    height: 25rem;
    position: absolute;
    object-fit: container; 
    background: transparent;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(0.5rem); 
        }
    }

    @media only screen and (max-width: 768px) { 
        width: 7.5rem;
        height: 7.5rem;
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        width: 20rem;
        height: 20rem;
    }
`

const Hero = () => {
  return (
    <Section className ="hero" id="hero">
        <Navbar />
        <Title>Adventure. Strategy. Immersion</Title> 
        <Container>
            <Left>
                <WhatItIs>
                    <Line src="./img/line.png" />
                    <Subtitle>What Is It</Subtitle>
                    <Desc>A First Person Adventure Game with elements of strategy and cRPG</Desc>
                    <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}><Button>Learn More</Button></Link>
                </WhatItIs>
            </Left>
            <Right>
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={1} />
                    <directionalLight position = {[2, 2, 2]} />
                    <Sphere args={[1, 50, 100]} scale={2.5}>
                            <MeshDistortMaterial 
                                color="#c0874e" 
                                attach="material" 
                                distort={0.5} 
                                speed={0.5} 
                            />
                    </Sphere>
                </Canvas>
                <Img src="./img/characters_collage.png" />
            </Right>
        </Container>
    </Section>
  )
}

export default Hero