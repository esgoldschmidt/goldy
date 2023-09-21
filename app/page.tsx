import DarkModeButton from "./components/DarkMode";
import Header from './components/Header'
import About from './components/About'
import Dev from "./components/Dev";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Dev />
      <Resume />
      <Contact />
      <DarkModeButton />
    </>
  )
}
