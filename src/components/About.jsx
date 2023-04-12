import React from 'react'
import styled from 'styled-components'; 
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-scroll';
import { OrbitControls, Stage } from '@react-three/drei'; 
import ThreeJSMap from "./ThreeJSMap";

const Section = styled.div`
    height: 100vh;  
    width: 100vw; 
    display: flex; 
    justify-content: space-between; 
    background-color: #42210d; 

    @media only screen and (max-width: 768px) { 
        width: 100%; 
        height: 100%;
    }

`
const Container = styled.div` 
    height: 100vh;  
    width: 100vw; 
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) { 
        display: grid; 
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 100%; 
    }
`

const Left = styled.div`
    flex: 2; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media only screen and (max-width: 768px) { 
      padding: 0 0 2rem 0;
      margin: 0;
      border: 0; 
    } 
` 

const Title = styled.h1` 
    font-size: 4rem;
    text-align: center;
    padding: 0 2rem 0 2rem;

    @media only screen and (max-width: 768px) { 
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
      font-size: 3rem;
    }
`

const WhatItIs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    gap: 0.5rem;

`

const Line = styled.img` 
    height: 1rem;
    width: 2rem;
`

const Subtitle = styled.h2`
    font-size: 3rem;

    @media only screen and (max-width: 768px) { 
      font-size: 1.5rem;
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
    flex: 3; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative; 
    background: transparent;

    @media only screen and (max-width: 768px) { 
        width: 100%;
        height: 90%; 
    }
`
 
const About = () => {
  return (
    <Section className='about' id='about'>  
        <Container>
          <Right>
            <Canvas camera={{fov:80, position:[12,0,0]}}>
              <OrbitControls enableZoom={false} /> 
              <Stage preset="rembrandt" intensity={1} environment="city">
                <ThreeJSMap />
              </Stage> 
            </Canvas>
          </Right>
          <Left>
            <WhatItIs>
              <Title>The lands of Pax Cairn</Title> 
              <Line src="./img/line.png"/>
              <Subtitle>Await you</Subtitle>
              <Desc>To dive into their mysteries</Desc>
              <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}><Button>Learn More</Button></Link>
            </WhatItIs>
          </Left>

        </Container> 

    </Section>

  )
}

export default About