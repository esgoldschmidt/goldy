'use client';
import React, { useEffect } from 'react'
import { Accordion } from 'flowbite-react';


type Props = {}

function Resume({}: Props) {
    useEffect(() => {
        // Select the element by its data-testid attribute
        const element = document.querySelector('[data-testid="flowbite-accordion-heading"]');
        const element2 = document.querySelector('[data-testid="flowbite-accordion"]');
        const element3 = document.querySelector('[data-testid="flowbite-accordion-content"]');
        
        // Check if the element exists before modifying it
        if (element) {
          // Add a new class to the element
          element.classList.add('w-full');
          
        }
        if(element2){
            element2.classList.remove('divide-y');
        }
        if(element3){
            element3.classList.remove('dark:bg-gray-900')
        }
      }, []);

  return (
    <div className='min-h-48 scroll-pt-2 p-4 w-full relative' id="resume">
        <h1 className='text-2xl text-gold uppercase'>Résumé</h1>
        <Accordion collapseAll className='flex flex-col-reverse p-4 my-4 bg-white/80 dark:bg-gray-800/80'>
            <Accordion.Panel className='ease duration-700 flex flex-col'>
            
                <Accordion.Title className="w-full">
                    
                </Accordion.Title>
                <Accordion.Content className=' px-0'>
                <div className="mb-2 text-gray-700 dark:text-white" id='more_exp'>
                    <div id='broker'>
                        <div className="flex justify-between min-w-full">
                            <h3 className='font-semibold'>Renting Brooklyn LLC (Individual Real Estate Brokerage) - New York, NY</h3>
                            <h3 className='font-semibold'>2017 - 2020</h3>
                        </div>
                        <div className="flex justify-between">
                            <h4 className='italic'>Real Estate Broker</h4>
                            <h4 className='italic'>12/17 - 03/20</h4>
                        </div>
                        <ul className='mx-6'>
                            <li className='list-disc'>Full-Stack development experience implementing SQL databases, React.js and Node.js for the collection and maintenance of client details and property information</li>
                            <li className='list-disc'>Managed all pieces of the leasing process: nurtured Landlord relationships, inspecting new listings, marketing, showing Tenants, gathering application details for approval, lease generation and rent collection</li>
                        </ul>
                    </div>
                    <div className='py-4' id='office_manager'>
                        <div className="flex justify-between min-w-full">
                            <h3 className='font-semibold'>Subway Realty Group (Real Estate Firm) - New York, NY</h3>
                            <h3 className='font-semibold'>2013 - 2019</h3>
                        </div>
                        <div className="flex justify-between">
                            <h4 className='italic'>Office Manager</h4>
                            <h4 className='italic'>10/13 - 06/19</h4>
                        </div>
                        <ul className='mx-6'>
                            <li className='list-disc'>Individually oversaw and signed over 250 property rentals generating  $700,000 gross revenue annually</li>
                            <li className='list-disc'>Maintained  all functionality of firm&#39;s website including developing an online tenant application and applicant tracking, featuring database design, graphic design, SSL and email notifications</li>
                            <li className='list-disc'>Directly responsible for managing a 12 person team of agents</li>
                            <li className='list-disc'>Built custom dashboards in CRM to measure sales statistics</li>
                            <li className='list-disc'>Designed all branding materials including Logo, Website and all Marketing Materials using Adobe Suite</li>
                        </ul>
                    </div>
                    <div id='marketing_sales'>
                        <div className="flex justify-between min-w-full">
                            <h3 className='font-semibold'>Eventurous Inc. (Event Planning & Venue Management Firm) - Cincinnati, OH</h3>
                            <h3 className='font-semibold'>2009 - 2013</h3>
                        </div>
                        <div className="flex justify-between">
                            <h4 className='italic'>Marketing & Sales Executive - Pinecroft at Crosley Estate (Event Venue)</h4>
                            <h4 className='italic'>04/12 - 03/13</h4>
                        </div>
                        <ul className='mx-6'>
                            <li className='list-disc'>Personally generated venue sales over $350,000 within first year of operation</li>
                            <li className='list-disc'>Guaranteed over $2,000,000 in gross revenue for managing partner Funky&#39;s Catering within 1 year</li>
                            <li className='list-disc'>Developed property website, using Wordpress, as primary source for information regarding rental of estate</li>
                        </ul>
                        <div className="flex justify-between">
                            <h4 className='italic'>Marketing & Business Development Strategist</h4>
                            <h4 className='italic'>2009 - 2012</h4>
                        </div>
                        <ul className='mx-6'>
                            <li className='list-disc'>Implemented Infusionsoft, marketing and CRM program, reducing misallocation of human capital</li>
                            <li className='list-disc'>Managed internship program ensuring productive collaboration between new employees and management</li>
                        </ul>
                    </div>
                    <div className='pt-4' id='cert_edu'>
                        <h2 className='font-semibold text-lg'>Higher Education | Certifications</h2>
                        <div className='flex justify-between'>
                            <h4 className='font-medium'>HarvardX - CS50 - Introduction to Computer Science</h4>
                            <h4 className='font-medium'>March 2021</h4>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='font-medium'>CodeCademy Pro - Web Development Career Path </h4>
                            <h4 className='font-medium'>May 2020</h4>
                        </div>
                        <div className='flex justify-between'>
                            <h4 className='font-medium'>Ohio State University - Max M. Fisher College of Business </h4>
                            <h4 className='font-medium'>2009</h4>
                        </div>
                        <div className='flex justify-between -mt-1'>
                            <p className='text-sm'>B.S. Business Administration | Marketing</p>
                            <p className='text-sm'>Cum Laude</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium'>New York State Licensed Real Estate Broker</p>
                            <p className='font-medium'>Since 2017</p>
                        </div>
                    </div>
                </div>
                </Accordion.Content>
                <div >
                        <div className='flex flex-col items-center' id='head_name'>
                            <h1 className='text-2xl font-bold'>Eric Goldschmidt</h1>
                            <p className='-mt-1'>New York, New York</p>  
                        </div>
                        <div id='body_experience'>
                            <h2 className='font-semibold text-lg'>Experience</h2>
                            <div className="flex justify-between min-w-full">
                                <h3 className='font-semibold'>The Glimpse Group (Immersive Technologies) - New York, NY </h3>
                                <h3 className='font-semibold'>2022 - 2023</h3>
                            </div>
                            <div className="flex justify-between">
                                <h4 className='italic'>Full-Stack Web Developer</h4>
                                <h4 className='italic'>06/22 - 10/23</h4>
                            </div>
                            <ul className='mx-6'>
                                <li className='list-disc'>Responsible for the development and management of Full-Stack Web Applications for The Glimpse Group&#39;s global marketing team featuring Next.js, a React|Node hybrid framework, written in JavaScript</li>
                                <li className='list-disc'>Experience integrating headless CMS including Hygraph and databases such as MongoDB and PostgreSQL</li>
                                <li className='list-disc'>Extensive experience using AWS services including Route53, Amplify, CloudFront, Lambda, S3 and SES</li>
                                <li className='list-disc'>Comfortable implementing outside resources utilizing API including Insightly, Hygraph and Emailjs</li>
                                <li className='list-disc'>Developed completely self contained Lambda functions to trigger features missing from outside API including AWS Amplify auto-refresh on build failure and Insightly email recipient rerouting</li>
                            </ul>
                        </div>
                    </div>
            </Accordion.Panel>
            </Accordion>
    </div>
  )
}

export default Resume