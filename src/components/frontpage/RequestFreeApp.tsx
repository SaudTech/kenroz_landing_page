'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '../FormFields/TextField';
import TextArea from '../FormFields/TextArea';

interface FormState {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  schoolName: string;
  numberOfStudents: string;
  contactMethod: string;
  currentSoftware: string;
  specificRequirements: string;
}

interface Errors {
  [key: string]: string | undefined;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  schoolName?: string;
  numberOfStudents?: string;
  contactMethod?: string;
  currentSoftware?: string;
  specificRequirements?: string;
}

const fields = [
  { label: 'Full name', name: 'name', type: 'text', required: true, placeholder: 'Enter your full name' },
  { label: 'Email address', name: 'email', type: 'email', required: true, placeholder: 'Enter your email address' },
  { label: 'Phone number', name: 'phone', type: 'tel', required: true, placeholder: 'Enter your phone number' },
  { label: 'Role', name: 'role', type: 'text', required: true, placeholder: 'What is your role?', description: 'What position do you hold at the school? (e.g., principal, teacher)' },
  { label: 'School name', name: 'schoolName', type: 'text', required: true, placeholder: 'Enter your school name' },
  { label: 'Number of students', name: 'numberOfStudents', type: 'text', required: true, placeholder: 'Enter the number of students' },
  { label: 'Preferred contact method', name: 'contactMethod', type: 'text', placeholder: 'Enter your preferred contact method' },
  { label: 'Current software used (if any)', name: 'currentSoftware', type: 'text', placeholder: 'Enter current software used (if any)' },
  { label: 'Specific requirements or features needed', name: 'specificRequirements', type: 'textarea', placeholder: 'Enter specific requirements or features needed' },
];

const RequestFreeApp: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    role: '',
    schoolName: '',
    numberOfStudents: '',
    contactMethod: '',
    currentSoftware: '',
    specificRequirements: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    fields.forEach(field => {
      if (field.required && !form[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.name === 'email' && form.email && !/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = 'Email address is invalid';
      }
    });
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Handle form submission, e.g., send data to the server
      console.log('Form data submitted:', form);
    }
  };

  return (
    <div className="text-black min-h-[70vh] flex items-center justify-center">
      <div className="bg-gray-200 text-black border border-black md:w-[50%] rounded-sm p-6 shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Get Our School Management App for Free
        </h1>
        <p className="mb-6">
          Fill in the details below to receive a demo version of Kenroz.
        </p>

        {isSubmitted ? (
          <div className="text-green-600">
            Thank you! Your request has been submitted. We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {fields.map(field => (
              field.type === 'textarea' ? (
                <TextArea
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              ) : (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  description={field.description}
                  value={form[field.name]}
                  onChange={handleChange}
                  error={errors[field.name]}
                />
              )
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-sm mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestFreeApp;