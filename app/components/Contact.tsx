'use client'
import React, { useEffect, useState } from "react";

export default function Contact(){
  const [mounted, setMounted] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const [submitted, setSubmitted] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const element = document.getElementById('SubmitForm');
    setMounted(true)
  }, [])

  useEffect(() => {
    if(email.length > 0 && firstName.length > 0 && lastName.length > 0 && org.length > 0 && message.length > 0 ){
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [email, firstName, lastName, org, message])

  async function handleSubmit(event: any){
    const element = document.getElementById('SubmitForm');
    event.preventDefault();
    const data = {
      email: String(event.target.email.value),
      firstName: String(event.target.firstName.value),
      lastName: String(event.target.lastName.value),
      org: String(event.target.org.value),
      message: String(event.target.message.value)
    }
    const response = await fetch("/api/contact", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (response.ok){
      setSubmitted("Thank you, your message was successfully sent")
      setFirstName('')
      setLastName('')
      setEmail('')
      setMessage('')
      setOrg('')
    }
    if (!response.ok){
      console.log("Message failed to send")
    }
  }
  return (
    <div className="w-full px-4 my-10">
      <h1 className="text-2xl text-gold uppercase pb-4">Contact</h1>
      <form className="rounded-lg flex flex-col items-center w-full" onSubmit={handleSubmit} id='SubmitForm'>
        <div className="w-full flex flex-col md:flex-row rounded-lg gap-2 justify-between">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="visuallyHidden" htmlFor="email">Email</label>
            <input type="email" className='dark:bg-gray-800 rounded dark:text-white' autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='*Email' id='email' required minLength={3} maxLength={150} />
            <label className="visuallyHidden" htmlFor="firstName">First Name</label>
            <input type="text" className='dark:bg-gray-800 rounded' autoComplete='off' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='*First Name' id='firstName' required minLength={3} maxLength={50} />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="visuallyHidden" htmlFor="lastName">Last Name</label>
            <input type="text" className='dark:bg-gray-800 rounded dark:text-white' autoComplete='off' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="*Last Name" id='lastName' required minLength={3} maxLength={50} />
            <label className="visuallyHidden" htmlFor="org">Organization</label>
            <input type="text" className='dark:bg-gray-800 rounded dark:text-white' autoComplete='off' value={org} onChange={(e)=>{setOrg(e.target.value)}} placeholder='*Organization' id='org' required minLength={3} maxLength={50} />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="visuallyHidden" htmlFor="message">Message</label>
            <textarea autoComplete='off' className='dark:bg-gray-800 rounded dark:text-white' rows={ 4 } value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="*Message" id='message' required minLength={3} maxLength={600}>
            </textarea>
          </div>
        </div>
        <button type="submit" className={`text-center px-4 py-2 w-36 bg-gray-700 dark:bg-gray-200 dark:text-gray-700 text-white rounded ease duration-700 ${canSubmit && "hover:-translate-y-1 hover:bg-gold hover:dark:bg-gold"}`} disabled={!canSubmit}>Send Message</button>
        <div><p>{submitted}</p></div>
      </form>
    </div>
  )
}