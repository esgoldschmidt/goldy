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
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
</Head>

type Props = {}

function Dev({}: Props) {
  const [openGoldylocks, setOpenGoldylocks] = useState<string | undefined>();
  const [openEventurous, setOpenEventurous] = useState<string | undefined>();
  const [openSubway, setOpenSubway] = useState<string | undefined>();
  const [openGlimpse, setOpenGlimpse] = useState<string | undefined>();
  const [openLettr, setOpenLettr] = useState<string | undefined>();
  const [openRB, setOpenRB] = useState<string | undefined>();
  const [openRosie, setOpenRosie] = useState<string | undefined>();
  const props = { openEventurous, setOpenEventurous, openSubway, setOpenSubway, openGlimpse, setOpenGlimpse, openLettr, setOpenLettr, openRB, setOpenRB, openRosie, setOpenRosie, openGoldylocks, setOpenGoldylocks };

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
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  
  return (
    
      <div className='scroll-pt-2 mx-3 gap-y-3 slider-container px-3' id='development'>
        <h1 className='text-2xl text-gold uppercase -ml-3'>Development Projects</h1>
        <Slider {...settings}>
          <div onClick={() => props.setOpenGoldylocks('default')} className="cursor-pointer outline-none">
            <Image
              src='/resources/cardGoldylocks.png'
              width={240}
              height={312}
              alt="Goldylocks Card"
              className="m-3 outline-none shadow"
            />
          </div>
         <div onClick={() => props.setOpenGlimpse('default')} className="cursor-pointer outline-none">
            <Image
              src='/resources/cardGlimpse.png'
              width={240}
              height={312}
              alt="Glimpse Card"
              className="m-3 outline-none shadow"
            />
          </div>
          <div onClick={() => props.setOpenEventurous('default')} className="cursor-pointer outline-none">
            <Image
              src='/resources/cardEventurous.png'
              width={240}
              height={312}
              alt="Eventurous Card"
              className="m-3 outline-none shadow"
            />
          
          </div>
          {/* <div onClick={() => props.setOpenLettr('default')} className="cursor-pointer outline-none">
          <Image
              src='/resources/cardLettr.png'
              width={240}
              height={312}
              alt="Lettr Card"
              className="m-3 outline-none shadow"
            />
          </div> */}
          <div onClick={() => props.setOpenSubway('default')} className="cursor-pointer outline-none">
          <Image
              src='/resources/cardSubway.png'
              width={240}
              height={312}
              alt="Subway Card"
              className="m-3 outline-none shadow"
            />
          </div>
          {/* <div onClick={() => props.setOpenRosie('default')} className="cursor-pointer outline-none">
          <Image
              src='/resources/cardRosie.png'
              width={240}
              height={312}
              alt="Rosie Card"
              className="m-3 outline-none shadow"
            />
          </div> */}
          {/* <div onClick={() => props.setOpenRB('default')} className="cursor-pointer outline-none">
          <Image
              src='/resources/cardRB.png'
              width={240}
              height={312}
              alt="Renting Brooklyn Card"
              className="m-3 outline-none shadow"
            />
          </div> */}
        </Slider>
        
      <Modal 
        show={props.openEventurous === 'default'} 
        onClose={() => props.setOpenEventurous(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative">
              <img
                  src='/resources/moreEventurous.png'
                  alt="Eventurous Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenEventurous(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body> 
      </Modal>
      
      <Modal 
        show={props.openSubway === 'default'} 
        onClose={() => props.setOpenSubway(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative">
              <img
                  src='/resources/moreSubway.png'
                  alt="Subway Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenSubway(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body>
      </Modal>
      <Modal 
        show={props.openGlimpse === 'default'} 
        onClose={() => props.setOpenGlimpse(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative mt-3 flex flex-col items-center">
              <a href='https://theglimpsegroup.com' target="_blank" className="flex items-center p-3 bg-sky-600 rounded-md text-white"><p>Visit Glimpse Website</p> <span className="material-icons">open_in_new</span></a>
              <img
                  src='/resources/moreGlimpse.png'
                  alt="Glimpse Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenGlimpse(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body>
      </Modal>
      <Modal 
        show={props.openGoldylocks === 'default'} 
        onClose={() => props.setOpenGoldylocks(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative mt-3 flex flex-col items-center">
              <a href='https://goldylocks.io' target="_blank" className="flex items-center p-3 bg-gold rounded-md"><p>Visit Goldylocks.io</p> <span className="material-icons">open_in_new</span></a>
              <img
                src='/resources/moreGoldylocks.png'
                alt="Goldylocks More"
                className="p-3 object-cover object-top w-full"
              />
              <Button color="gray" onClick={() => props.setOpenGoldylocks(undefined)} className="fixed top-1 right-8 rounded-full ">
                X
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal 
        show={props.openRosie === 'default'} 
        onClose={() => props.setOpenRosie(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative">
              <img
                  src='/resources/moreRosie.png'
                  alt="Rosie Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenRosie(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body>
      </Modal>
      <Modal 
        show={props.openLettr === 'default'} 
        onClose={() => props.setOpenLettr(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative">
              <img
                  src='/resources/moreLettr.png'
                  alt="Lettr Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenLettr(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body>
      </Modal>
      <Modal 
        show={props.openRB === 'default'} 
        onClose={() => props.setOpenRB(undefined)} 
        size="5xl" 
        position="top-center"
        className="bg-transparent"
        >
      
        <Modal.Body>
          <div className="overflow-y-scroll min-h-screen ">
            <div className="w-full relative">
              <img
                  src='/resources/moreRB.png'
                  alt="RB Card"
                  className="p-3 object-cover object-top w-full"
                />
                <Button color="gray" onClick={() => props.setOpenRB(undefined)} className="fixed top-1 right-8 rounded-full ">
                  X
                </Button>
                        </div>
            </div>
        </Modal.Body>
      </Modal>
      </div>
  
  )
}

export default Dev