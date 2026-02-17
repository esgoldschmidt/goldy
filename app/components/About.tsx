import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='p-3 w-full gap-4 flex flex-col md:w-3/4' id='about'>
        <h1 className='uppercase text-gold text-2xl'>About Eric</h1>

        <h2 className='text-cyan-600 dark:text-green-200 italic text-lg'>
          Full Stack Product Engineer <span className='not-italic'>|</span>{' '}
          <span className='text-sm'>Building real production systems</span>
        </h2>

        <p>
          Hi — I’m Eric, a full-stack engineer focused on building reliable,
          scalable web applications that simplify operational workflows and
          support real business needs.
        </p>

        <p>
          Over the past 4+ years, I’ve designed and deployed production
          applications using <strong>TypeScript, Next.js, MongoDB, Prisma,
          and AWS</strong>. My work includes systems for vendor ordering,
          inventory management, reporting automation, and customer workflow
          platforms used in daily operations across multi-location businesses.
        </p>

        <p>
          I enjoy owning projects end-to-end — from requirements and system
          architecture through development, deployment, and iteration — and
          working directly with stakeholders to transform complex or manual
          processes into dependable software solutions.
        </p>

        <p>
          Core stack: <strong>Next.js, React, TypeScript, Node.js, MongoDB,
          Prisma, AWS</strong>
        </p>

        <p>
          If you’re building something interesting or need a product-focused
          engineer, let’s connect.
        </p>
    </div>
  )
}

export default About
