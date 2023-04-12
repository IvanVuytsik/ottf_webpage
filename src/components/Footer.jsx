import React from 'react';
import styled from 'styled-components';


const Text = styled.h1`
    font-weight: 400;
    font-size: 2rem; 
    text-align: center; 

    @media only screen and (max-width: 768px) { 
      font-size: 0.75rem; 
    } 

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        font-size: 1.5rem;
    }
`

const Footer = () => {
  return ( 
      <Text>©2023. Powered by Powerhamster. All rights reserved.</Text>
  )
}

export default Footer