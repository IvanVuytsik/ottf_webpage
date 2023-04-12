import React, { useState } from 'react'; 
import styled from 'styled-components';
import ExploreComponent from "./ExploreComponent";
import BattleComponent from "./BattleComponent";
import RiddleComponent from "./RiddleComponent";
import StoryComponent from "./StoryComponent";

const data = [
  "Explore the World",
  "Enjoy its Stories",
  "Battle its Dangers",
  "Solve its Riddles",
] 

const Section = styled.div`
  height: 100vh;
  width: 100vw; 
  background-color: #42210d; 
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

    @media only screen and (max-width: 768px) { 
        width: 100%; 
        height: 100%;
    }
`
const Container = styled.div` 
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0 5rem 0 5rem ;

  @media only screen and (max-width: 768px) {  
      display: grid;  
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 0;
    }
`

const Left = styled.div` 
  flex: 1;  
  display: flex;
  align-items: center; 
  

  @media only screen and (max-width: 768px) {  
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 2rem 0 2rem 0 ;
      margin: 0;
      border: 0;
  }
`

const List = styled.ul` 
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left; 
  gap: 4rem;

  @media only screen and (max-width: 768px) {  
      gap: 1rem;
      padding: 0;
      margin: 0;
      border: 0;
      text-align: center; 
  }
`

const ListItem = styled.li` 
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  color: transparent;
    -webkit-text-stroke: 1px #ffc082;

  ::after{
    content: "${(props) => props.text}"; 
    position: absolute;
    top: 0;
    left: 0;
    color: #ffc082;
    width: 0;
    overflow: hidden;
    white-space: nowrap; 
  }

  &:hover{
    ::after{ 
      animation: fillText 0.5s linear both; 
      @keyframes fillText {
        to{
          width: 100%;  
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {  
      font-size: 1.5rem;
    }

  @media only screen and (min-width: 769px) and (max-width: 1180px) { 
    font-size: 2rem;
  }
`

const Right = styled.div` 
  flex: 1; 
  position: relative;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) { 
      height: 50vh;
      width: 100wh; 
  }
`
 
const Project = () => {
  const [element, setElement] = useState("Explore the World");

  return (
    <Section className='project' id='project'>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setElement(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {element === "Explore the World" ? (
          <ExploreComponent />
          ) : element === "Enjoy its Stories" ? (
          <StoryComponent />
          ) : element === "Solve its Riddles" ? (
          <RiddleComponent />
          ) : (
          <BattleComponent />
          )} 
        </Right>
      </Container>
    </Section>
  )
}

export default Project