'use client'
import React, { Component, useState } from "react";
import Slider from "react-slick";
import Head from "next/head";
import Image from 'next/image'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button, Modal } from 'flowbite-react';


<Head>
  <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</Head>

type Props = {}

function Dev({}: Props) {

  const [openEventurous, setOpenEventurous] = useState<string | undefined>();
  const [openSubway, setOpenSubway] = useState<string | undefined>();
  const [openGlimpse, setOpenGlimpse] = useState<string | undefined>();
  const [openLettr, setOpenLettr] = useState<string | undefined>();
  const [openRB, setOpenRB] = useState<string | undefined>();
  const [openRosie, setOpenRosie] = useState<string | undefined>();
  const props = { openEventurous, setOpenEventurous, openSubway, setOpenSubway, openGlimpse, setOpenGlimpse, openLettr, setOpenLettr, openRB, setOpenRB, openRosie, setOpenRosie };

  var settings = {
    dots: true,
    infinite: true,
    arrows: true, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    
      <div className='scroll-pt-2 mx-3 gap-y-3 slider-container px-3' id='development'>
        <h1 className='text-2xl text-gold uppercase -ml-3'>Development Projects</h1>
        <Slider {...settings}>
        <div onClick={() => props.setOpenGliimpse('default')} className="cursor-pointer">
            <Image
              src='/resources/cardGlimpse.png'
              width={240}
              height={312}
              alt="Glimpse Card"
              className="p-3"
            />
          </div>
          <div onClick={() => props.setOpenEventurous('default')} className="cursor-pointer">
            <Image
              src='/resources/cardEventurous.png'
              width={240}
              height={312}
              alt="Eventurous Card"
              className="p-3"
            />
          
          </div>
          <div onClick={() => props.setOpenLettr('default')} className="cursor-pointer">
          <Image
              src='/resources/cardLettr.png'
              width={240}
              height={312}
              alt="Lettr Card"
              className="p-3"
            />
          </div>
          <div onClick={() => props.setOpenSubway('default')} className="cursor-pointer">
          <Image
              src='/resources/cardSubway.png'
              width={240}
              height={312}
              alt="Eventurous Card"
              className="p-3"
            />
          </div>
          <div onClick={() => props.setOpenRosie('default')} className="cursor-pointer">
          <Image
              src='/resources/cardRosie.png'
              width={240}
              height={312}
              alt="Eventurous Card"
              className="p-3"
            />
          </div>
          <div onClick={() => props.setOpenRB('default')} className="cursor-pointer">
          <Image
              src='/resources/cardRB.png'
              width={240}
              height={312}
              alt="Eventurous Card"
              className="p-3"
            />
          </div>
        </Slider>
        
      <Modal show={props.openEventurous === 'default'} onClose={() => props.setOpenEventurous(undefined)} className="h-screen relative">
      
        <Modal.Body className="absolute h-[calc(100vh-2rem)] w-full overflow-scroll">
          <Image
              src='/resources/cardRB.png'
              fill={true}
              alt="Eventurous Card"
              className="p-3 object-contain h-96"
            />
            <Button color="gray" onClick={() => props.setOpenEventurous(undefined)} className="absolute top-0 right-0 rounded-full ">
              X
            </Button>
        </Modal.Body>
        
        
      </Modal>
      </div>
  
  )
}

export default Dev