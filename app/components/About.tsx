import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='p-3 w-full gap-3 flex flex-col md:w-3/4' id='about'>
        <h1 className='uppercase text-gold text-2xl'>About Eric</h1>
        <h2 className='text-cyan-600 dark:text-green-200 italic text-lg'>Curious Pursuit <span className='not-italic'>|</span> <span className='text-sm'>life in code</span></h2>
        <p >Hello, I&#39;m Eric. My passion lies in designing and developing web solutions that enhance and simplify lives. I bring a fresh perspective, insatiable curiosity, and an unwavering commitment to finding the best possible solutions to complex problems.
        </p>
        <p>Over the past three years, I have honed my skills in full-stack web development, specializing in JavaScript and leveraging the Next.js framework—a powerful React | Node hybrid. Additionally, I have hands-on experience crafting applications using Python and the Flask framework. My expertise extends to developing solutions that integrate with headless Content Management Services (CMS) and connect to databases such as MongoDB and PostgreSQL.
        </p>
        <p>I thrive on interfacing with external applications via APIs, including platforms like Insightly, Emailjs, Socrata, and Google. My projects are hosted and launched through Amazon Web Services (AWS), where I harness the power of tools like Amplify, CloudFront, Lambda, Route53, S3, Simple Email Service, and EventBridge.</p>
        <p>Each of my projects is meticulously version controlled using Git and securely stored on GitHub.</p>
        <p>Let's connect — I'm excited to embark on our next project together.</p>
    </div>
    
  )
}

export default About