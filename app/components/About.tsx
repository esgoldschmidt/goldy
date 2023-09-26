import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='min-h-48 p-3 flex flex-col gap-2 pb-12' id="about">
        <h1 className='uppercase text-gold text-2xl'>About Eric</h1>
        <h2 className='text-cyan-600 dark:text-green-200'>My Curious Pursuit | A Journey in Tech</h2>
        <p >Hi. I&#39;m Eric. I design and develop web experiences that aim to simplify lives. 
            I bring a fresh perspective, insatiable curiousity and unrelenting 
            determination in finding the best possible solution for a problem.
        </p>
        <p>I&#39;ve spent the past 3 years developing full-stack web applications and have extensive
            experience developing in JavaScript utilizing Next framework, a React | Node 
            hybrid. I also have built applications utilizing Python utilizing the Flask 
            framework. I have developed applications connecting to a headless Content 
            Management Service (CMS) as well as connecting to databases including MongoDB 
            and PostgreSQL. I have experience connecting to outside applications through the
            use of their API including Insightly, Emailjs, Socrata and Google. My projects are hosted
            and launched through Amazon Web Services (AWS) utilizing tools
            including Amplify, CloudFront, Lambda, Route53, S3, Simple Email Service and 
            EventBridge. All projects are version controlled using Git and housed on GitHub.
        </p>
        <p>Let&#39;s connect, I&#39;d love to get started on our next big project</p>
    </div>
  )
}

export default About