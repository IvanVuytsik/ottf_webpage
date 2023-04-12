import styled from 'styled-components';
import MapChart from "./Map";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"; 
import Footer from './Footer';

const Section = styled.div`
  height: 100vh;
  width: 100vw; 
  background-color: #42210d;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 

  @media only screen and (max-width: 768px) {  
    width: 100%; 
    height: 100%;
    margin: 0;
    border: 0;
    padding: 0;
  } 
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media only screen and (max-width: 768px) {  
    width: 100%; 
    height: 100%; 
    align-items: center;
    text-align: center;
    justify-content: center; 
    gap: 0;
  } 
`
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {  
    width: 100%; 
    height: auto; 
    align-items: center;
    text-align: center;
    justify-content: center; 
    padding: 0 2rem 0 2rem;
  } 
`
const Form = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem; 

  @media only screen and (max-width: 768px) {  
    gap: 0.5rem; 
    font-size: 1rem;
    margin: 0;
    border: 0;
    padding: 0;
    width: 100%
  } 
`
const Title = styled.h1`
  font-weight: 400;
  font-size: 3rem;

  @media only screen and (max-width: 768px) { 
    font-size: 2rem;
  } 
`
const Input = styled.input`
  padding: 1.5rem;
  background-color: #ffc082;
  color: #42210d;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  ::placeholder {
    color: #80401b;
  }

  @media only screen and (max-width: 768px) { 
    font-size: 1rem;
    padding: 0.25rem;
  } 
`
const TextArea = styled.textarea`
  padding: 1.5rem;
  background-color: #ffc082;
  color: #42210d;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  ::placeholder {
    color: #80401b;
  }

  @media only screen and (max-width: 768px) { 
    font-size: 1rem; 
    padding: 0.25rem;
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
    font-size: 2rem;
    font-weight: 500;

  @media only screen and (max-width: 768px) { 
    font-size: 1rem; 
  } 

  @media only screen and (min-width: 769px) and (max-width: 1180px) { 
      font-size: 1.5rem;
  }
`
const Right = styled.div`
  flex: 3;

  @media only screen and (max-width: 768px) { 
    display: none;
  } 
`

const Contact = () => {
 
  const ref = useRef()
  const [success, setSuccess] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbz64hd', 'template_v2t7c9l', ref.current, 'ZcPgQwObgtyp-YMWi')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }
 
  return (
    <Section className='contact' id='contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder='Name' name='name'></Input>
            <Input placeholder='Email' name="email"></Input>
            <TextArea placeholder='Message' name="message" rows={10}></TextArea>
            <Button type="submit">Submit</Button>
            {success && "You message has been sent."}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
      <Footer />
    </Section>
    
  )
}

export default Contact