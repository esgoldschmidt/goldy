import { NextApiRequest, NextApiResponse } from 'next';
import * as Yup from "yup";

// Define a type for the contactUsValidationSchema
type ContactUsSchema = Yup.Schema<{
    email: string;
    firstName: string;
    lastName: string;
    org: string;
    message: string;
  }>;

export const contactUsValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .max(75, 'Email Too Long')
    .required("Email Required"),
  firstName: Yup.string()
    .min(2, 'First Name Too Short')
    .max(50, 'First Name Too Long')
    .required("First Name Required"),
  lastName: Yup.string()
    .min(2, 'Last Name Too Short')
    .max(50, 'Last Name Too Long')
    .required("Last Name Required"),
  org: Yup.string()
    .min(2, 'Organization Too Short')
    .max(50, 'Organization Too Long')
    .required("Organization Required"),
  message: Yup.string()
    .min(2, 'Message Too Short')
    .max(600, 'Message Too Long')
    .required("Message Required"),
});

// helper
async function validation(scheme: ContactUsSchema, data:any){
    try {
      await scheme.validate(data, { abortEarly: false });
      return { isValid: true, errors: null };
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = error.inner.map((e) => ({ path: e.path, message: e.message }));
          return { isValid: false, errors };
        } else {
          // Handle other types of errors if needed
          return { isValid: false, errors: [{ path: '', message: 'Validation failed' }] };
        }
    }
    
}

export default async function schemaValidation(request: NextApiRequest, response: NextApiResponse) {
    const { method, body } = request;
    const { errors, isValid } = await validation(contactUsValidationSchema, body);
  
    if (errors) {
        response.status(422).json({ errors });
        return;
    } else if (isValid) {
        response.status(200).json({ isValid });
        return;
    } else {
        response.status(406).json("Not Acceptable");
        return;
    }

  }