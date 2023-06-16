import React from 'react';
import styled from 'styled-components'; 
import { Link } from 'react-scroll';

const Section = styled.div`
    height: 100vh; 
    width: 100vw; 
    display: flex;
    justify-content: center;
    font-size: 2rem; 
    height: auto;
 
    @media only screen and (max-width: 768px) {
        width: 100%;  
    }
`

const Container = styled.div` 
    width: 100vw; 
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    background-color: #572c11; 
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    background-color: transparent;
    background: transparent;
    
    @media only screen and (max-width: 768px) { 
        gap: 0; 
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        gap: 1.5rem; 
    }
`

const Logo = styled.img`
    height: 10rem;
    width: 40rem;
    background-color: transparent;
    background: transparent;

    @media only screen and (max-width: 768px) {
        height: 1rem;
        width: 4rem;
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        height: 4rem;
        width: 14rem;
    }
` 

const List = styled.ul` 
    display: flex;
    gap: 0.5rem;
    list-style: none; 
    background-color: #572c11;
    padding: 0;
    margin: 0; 
`   

const ListItem = styled.ul` 
    cursor: pointer;
    background-color: transparent; 
    
    @media only screen and (max-width: 768px) {
        width: 0.25rem; 
        padding: 0.25rem;
        margin: 0.5rem;
        font-size: 0.5rem;;
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        width: 2rem; 
        padding: 0rem;
        margin: 1rem;
        font-size: 1rem;;
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem; 
    padding-left: 2rem;
    background-color: #572c11; 
    
    @media only screen and (max-width: 768px) {  
        padding-left: 1rem;
        margin: 0; 
        gap: 0.25rem; 
    }

    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        padding-left: 1.5rem; 
    }
`

const Icon = styled.img` 
    width: 2rem;
    cursor: pointer;
    background-color: #572c11;
    
    @media only screen and (max-width: 768px) {
        width: 0.5rem;
    }
    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        width: 1.5rem;
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
        font-size: 0.5rem;
        padding: 0.25rem;
    }
    @media only screen and (min-width: 769px) and (max-width: 1180px) {
        font-size: 1rem;
        padding: 0.5rem;
    }
` 

const Navbar = () => { 
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="/img/ottf.png" />
                <List>
                    <ListItem><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></ListItem>
                    <ListItem><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></ListItem>
                    <ListItem><Link to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link></ListItem>
                    <ListItem><Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>Gallery</Link></ListItem>
                    <ListItem><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="/img/search.png" />
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><Button>Vacancies</Button></Link>
            </Icons> 
        </Container>
    </Section>
  )
}

export default Navbar