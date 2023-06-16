import React from 'react'
import styled from 'styled-components';
import "./gallery.css"
  
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import scr_0 from '/img/0.jpg'
import scr_1 from '/img/1.jpg'
import scr_2 from '/img/2.jpg'
import scr_3 from '/img/3.jpg'
import scr_4 from '/img/4.jpg'
import scr_5 from '/img/5.jpg'
import scr_6 from '/img/6.jpg'
import scr_7 from '/img/7.jpg'
import scr_8 from '/img/8.jpg'
import scr_9 from '/img/9.jpg'
import scr_10 from '/img/10.jpg'
import scr_11 from '/img/11.jpg'
import scr_12 from '/img/12.jpg'

const data = [
  { screenshot: scr_9, },
  { screenshot: scr_0, }, 
  { screenshot: scr_1, },
  { screenshot: scr_2, },
  { screenshot: scr_3, },
  { screenshot: scr_4, },
  { screenshot: scr_5, },
  { screenshot: scr_6, },
  { screenshot: scr_7, },
  { screenshot: scr_8, },
  { screenshot: scr_10, },
  { screenshot: scr_11, },
  { screenshot: scr_12, },
] 
 
const Section = styled.div`
    height: 100vh;
    width: 100vw; 
    background-color: #42210d; 
    display: flex; 
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) { 
        width: 100%; 
        height: 100%;
    }
`
const Container = styled.div`
    height: 100vh; 
    background-color: #42210d;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;

    @media only screen and (max-width: 768px) {  
        width: 100%; 
        height: 50%;
    } 
`
 
const Title = styled.h1` 
    font-size: 4rem;
    text-align: center;

    @media only screen and (max-width: 768px) {  
       font-size: 2rem;
    } 

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        font-size: 3rem;
    }
`
 const ImgContainer = styled.div`
    width: auto;
    height: auto;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none; 
    display: flex; 
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {  
        padding: 0.5rem;
        border-radius: 0;
    } 
`

const SwiperImg = styled.img` 
    width: 80rem;
    height: 40rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 1rem;
    margin: 0 auto 1rem;
    border: 0.4rem solid #ffc082; 

    @media only screen and (max-width: 768px) {  
        width: 100%; 
        height: auto;
        border: 0;
        margin: 0;
    } 

    @media only screen and (min-width: 769px) and (max-width: 1180px) { 
        width: 100%; 
        height: auto;
        border: 0;
        margin: 0;
    }
`

const Gallery = () => {
  return (
    
    <Section classname="gallery" id='gallery'>  
        <Title>Gallery</Title> 
        <Container>
             
            <Swiper
                modules={[Pagination]}
                spaceBetween={60}
                slidesPerView={1}
                pagination={{ clickable: true }}> 
                    {
                    data.map(({screenshot}, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <ImgContainer>
                                <SwiperImg src={screenshot} />
                            </ImgContainer> 
                        </SwiperSlide> 
                        )
                    })
                    } 
            </Swiper> 
        </Container> 

    </Section>

  )
}

export default Gallery;