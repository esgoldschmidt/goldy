import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      colors: {
        "gold": "#bd9a2a",
        "forest": "#063821"
      },
      fontSize: {
        '2xs': '.5rem',
        "xs": '0.75rem',
        "sm": '0.875rem',
        "base": '1rem',
        "lg": '1.125rem',
        "xl": '1.25rem',
        '1.5xl': '1.375rem',
        "2xl": '1.5rem',
        "2.5xl": '1.685rem',
        "3xl": '1.875rem',
        "4xl": '2.25rem',
        "4.5xl": '2.45rem',
        "5xl": '3rem',
        "6xl": '3.75rem',
        "7xl": '4.5rem',
        "8xl": '6rem',
        "9xl": '8rem',
      },
      margin: {
        '20': '88px',
      },
      maxWidth: {
        "screen-xs": '480px',
        "screen-xxs": '360px',
        '8xl': '88rem', // 1408px
        '9xl': '98rem', // 1568px
      },
      opacity: {
        '15': '.15',
      },
      screens: {
        "fiveHundred": "500px",
        "thousand": "1000px",
        'xs': '448px',
        'xs_sm': '576px',
        'md_lg': '896px',
        'lg_xl': '1190px',
        "xl_2xl": '1408px',
      },
      scale: {
        '101': '1.01',
        '175': '1.75',
        '200': '2.00',
        '250': '2.50',
        '300': '3.00',
        '350': '3.50',
        '400': '4.00',
        '450': '4.50',
        '500': '5.00',
      },
      skew: {
        '15': '15deg',
        '17': '17deg',
        "20": "20deg"
      },
      spacing: {
        "18" : "4.5rem", // 72px
        "19" : "4.75rem", // 80px
        '22' : '5.5rem',  // 88px
        '25' : '6.25rem',
        '26' : '6.5rem',  // 104px
        "34" : "8.5rem",  // 136px
        '76' : "19rem",
        "84" : "21rem",   // 336px
        "86" : "21.5rem", // 344px
        "88" : "22rem",   // 352px
        "92" : "23rem",   
        "100": "25rem",
        '104': '26rem',   // 416px
        '112': '28rem',   // 448px
        '120': '30rem',   // 500px
        '128': '32rem',   // 512px
        '136': '34rem',   // 554px
        '144': '36rem',   // 576px
        '160': '40rem',   // 640px
        '180': '45rem',   // 720px
        '190': '47.5rem', // 760px
        '200': '50rem',   // 800px
        '220': '55rem',   // 880px
        '240': '60rem',   // 960px
        '244': '61rem',   // 976px
      },
      translate: {
        '0.25': '0.0625rem',
      },

    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
