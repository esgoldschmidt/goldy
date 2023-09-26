"use client"
import DarkModeButton from "./components/DarkMode";
import Header from './components/Header'
import About from './components/About'
import Dev from "./components/Dev";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Foot from './components/Foot'
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};

export default function Home() {
  return (
    <Flowbite>
      <Header />
      <About />
      <Dev />
      <Resume />
      <Contact />
      <DarkModeButton />
      <Foot />
    </Flowbite>
  )
}
