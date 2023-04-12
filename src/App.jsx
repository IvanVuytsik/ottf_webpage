import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'
import Gallery from './components/Gallery';
import styled from 'styled-components'; 
import './App.css'; 
 
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #ffc082;
  background: url("./img/"); 
  &::-webkit-scrollbar{
    display: none;
  } 
`;

function App() { 

  return (
    <>
        <Hero />
        <About />
        <Project /> 
        <Gallery />
        <Contact />
    </>
  )
}

export default App
