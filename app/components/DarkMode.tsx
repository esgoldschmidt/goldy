"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const element = document.getElementById('main');
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  

  const submit = () => {
    // Toggle theme between "light" and "dark"
     // Get the element with id "main"
     const element = document.getElementById('main');

     // Add or remove the "dark" class based on the theme
     if (element) {
       if (theme === 'dark') {
         element.classList.remove('dark');
       } else {
         element.classList.add('dark');
       }
     }

    setTheme(theme === 'dark' ? 'light' : 'dark');

   
  };

  return (
    <button className='fixed right-2 bottom-2 text-white' onClick={submit}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default DarkModeButton