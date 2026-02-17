"use client"
import DarkModeButton from "./components/DarkMode";
import Header from './components/Header'
import About from './components/About'
import Dev from "./components/Dev";
import Contact from "./components/Contact";
import Resume2 from "./components/Resume2";
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
    <div className="relative flex w-full overflow-hidden position-right">
      
      <div className="z-10 w-full max-w-screen-xxs xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl overflow-hidden">
        <Flowbite>
          <Header />
          <About />
          <Dev />
          <Resume2 />
          <Contact />
          <DarkModeButton />
          <Foot />
        </Flowbite>
      </div>
      
    </div>
  )
}
