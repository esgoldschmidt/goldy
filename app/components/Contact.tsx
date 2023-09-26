'use client';
import React, { useState } from 'react'

type Props = {}

const Contact = (props: Props) => {
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ errors, setErrors ] = useState([])
  const [ success, setSuccess ] = useState([])
  const [ emailField, setEmailField ] = useState("")
  const [ firstNameField, setFirstNameField ] = useState("")
  const [ lastNameField, setLastNameField ] = useState("")
  const [ orgField, setOrgField ] = useState("")
  const [ messageField, setMessageField ] = useState("")

  interface MyApiResponse {
    isValid: boolean;
    errors: string[]; // Adjust the type if 'errors' has a different structure
  }

  // email to info@glimpsegroup.io
  async function sendEmail(email: string, firstName: string, lastName: string, org: string, message: string){
    await fetch(`/api/form/schemaValidation`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          org: org,
          message: message,
        })
      })
      .then((response) => response.json())
      .then(response => response.isValid 
        ? 
          fetch(`/api/send-email/contact-form?email=${ email }&firstName=${ firstName }&lastName=${ lastName }&org=${ org }&message=${ message }`)
          .then(response => !response.ok &&
            setErrors(errors.concat(response.errors))
          )
        :
          setErrors(errors.concat(response.errors))
      )
  }

  return (
    <div className='scroll-pt-2 p-4 text-gold uppercase text-2xl' id="contact">
        Contact
    </div>
  )
}

export default Contact