'use client'

import React, { useMemo, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button, Modal } from 'flowbite-react'

type ProjectId = 'ezfood' | 'goldylocks' | 'glimpse'

type Project = {
  id: ProjectId
  title: string
  subtitle: string
  stackLine: string
  highlights: string[]
  proof?: { label: string; bullets: string[] }[] // used to show DFS proof inside EZFood
  cardImage: string
  modalImage?: string
  links?: { label: string; href: string; tone?: 'primary' | 'secondary' }[]
}

type Props = {}

function Dev({}: Props) {
  const [openId, setOpenId] = useState<ProjectId | null>(null)

  const projects: Project[] = useMemo(
    () => [
      {
        id: 'ezfood',
        title: 'EZ Food Service Platform',
        subtitle: 'Operational platform for vendor ordering, inventory, and reporting (SaaS-ready)',
        stackLine: 'Next.js • TypeScript • Prisma • MongoDB • AWS',
        highlights: [
          'Built end-to-end platform for vendor ordering workflows, inventory visibility, and reporting automation',
          'Designed modular data model to support vendors, venues, products, and operational workflows',
          'Built with production patterns: authentication, role-based access, and scalable API structure',
        ],
        proof: [
          {
            label: 'Production deployment (DFS, Jan 2025 – Jan 2026)',
            bullets: [
              'Used daily across two locations; supports 15–25 weekly vendor orders (~$3M annual purchasing)',
              'Replaced heavy Excel-based workflows while preserving emailed ordering process for adoption',
              'Automated reporting + inventory tracking to improve consistency, reduce errors, and save staff time',
              'Owned full lifecycle: requirements, schema, development, AWS deployment, and production support',
              'Leading migration to company AWS infrastructure for long-term scalability',
            ],
          },
        ],
        cardImage: '/resources/cardEZFood.png', // create or reuse a placeholder
        modalImage: '/resources/moreEZFood.png', // optional
        links: [{ label: 'Visit ezfoodservice.io', href: 'https://ezfoodservice.io', tone: 'primary' }],
      },
      {
        id: 'goldylocks',
        title: 'Goldylocks Rental Tools',
        subtitle: 'Real-estate workflow platform built and deployed independently',
        stackLine: 'Next.js • TypeScript • MongoDB • Prisma • AWS',
        highlights: [
          'Implemented authentication and application intake workflows',
          'Built automation for notifications and workflow handoffs',
          'Deployed and maintained production infrastructure and database',
        ],
        cardImage: '/resources/cardGoldylocks.png',
        modalImage: '/resources/moreGoldylocks.png',
        links: [{ label: 'Visit goldylocks.io', href: 'https://goldylocks.io', tone: 'primary' }],
      },
      {
        id: 'glimpse',
        title: 'The Glimpse Group',
        subtitle: 'Full-stack engineering for production web applications and marketing systems',
        stackLine: 'Next.js • React • TypeScript • AWS • CMS/CRM Integrations',
        highlights: [
          'Built production web applications and integrated CMS, CRM APIs, and analytics tooling',
          'Maintained AWS deployments and CI/CD pipelines',
          'Delivered features contributing to ~40% conversion improvement',
        ],
        cardImage: '/resources/cardGlimpse.png',
        modalImage: '/resources/moreGlimpse.png',
        links: [{ label: 'Visit theglimpsegroup.com', href: 'https://theglimpsegroup.com', tone: 'secondary' }],
      },
    ],
    []
  )

  const openProject = projects.find((p) => p.id === openId) ?? null

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
  }

  return (
    <div className='scroll-pt-2 mx-3 gap-y-3 slider-container px-3' id='development'>
      <h1 className='text-2xl text-gold uppercase -ml-3'>Development Projects</h1>

      <Slider {...settings}>
        {projects.map((p) => (
          <div
            key={p.id}
            onClick={() => setOpenId(p.id)}
            className='cursor-pointer outline-none'
            role='button'
            tabIndex={0}
          >
            <Image
              src={p.cardImage}
              width={240}
              height={132}
              alt={`${p.title} Card`}
              className='m-3 outline-none shadow'
            />
          </div>
        ))}
      </Slider>

      <Modal
        show={!!openProject}
        onClose={() => setOpenId(null)}
        size='5xl'
        position='top-center'
        className='bg-transparent'
      >
        <Modal.Body>
          {openProject && (
            <div className='overflow-y-scroll max-h-[85vh]'>
              <div className='w-full relative mt-3 flex flex-col items-center gap-4 p-3'>
                <div className='w-full flex items-start justify-between gap-4'>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>{openProject.title}</h2>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>{openProject.subtitle}</p>
                    <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                      {openProject.stackLine}
                    </p>
                  </div>

                  <Button color='gray' onClick={() => setOpenId(null)} className='rounded-full'>
                    X
                  </Button>
                </div>

                {openProject.links?.length ? (
                  <div className='w-full flex flex-wrap gap-2'>
                    {openProject.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target='_blank'
                        rel='noreferrer'
                        className={
                          l.tone === 'primary'
                            ? 'px-4 py-2 rounded-md bg-gold text-black'
                            : 'px-4 py-2 rounded-md bg-sky-600 text-white'
                        }
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                <div className='w-full'>
                  <h3 className='font-semibold mb-2'>Highlights</h3>
                  <ul className='list-disc pl-5 text-sm leading-6'>
                    {openProject.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                {openProject.proof?.length ? (
                  <div className='w-full'>
                    {openProject.proof.map((section) => (
                      <div key={section.label} className='mt-4'>
                        <h3 className='font-semibold mb-2'>{section.label}</h3>
                        <ul className='list-disc pl-5 text-sm leading-6'>
                          {section.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}

                {openProject.modalImage ? (
                  <img
                    src={openProject.modalImage}
                    alt={`${openProject.title} details`}
                    className='mt-2 w-full object-cover object-top'
                  />
                ) : null}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Dev
