"use client";

import { useState } from 'react';
import axios from 'axios';
import { ClockIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /(?:\+1[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}|(?:\+91[-.\s]?\d{10}|\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}))/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';

    // Handle errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact-form-websites`, {
        data: {
          Name: formData.name,
          Email: formData.email,
          Mobile: formData.mobile,
          Message: formData.message,
        },
      });

      setResponseMessage('Your message is sent successfully!');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error.response?.data?.error?.message || error.message || 'Failed to your send message. Try again later!';
      setResponseMessage(errorMessage);
    }

  };

  return (
    <section className='lg:mx-36 mx-6 my-16'>
      <div className='lg:flex lg:gap-24 lg:items-start'>
        <div className='lg:w-2/4 lg:grid lg:justify-center pb-12'>
          <div className='mb-6'>
            <h2 className='text-3xl font-bold'>Contact Us</h2>
          </div>
          <div>
            <div className='mb-6 flex gap-4'>
              <div>
                <MapPinIcon className='w-6' />
              </div>
              <div>
                <h4 className='font-semibold'>Our Address:</h4>
                <p>30 N Gould St ste 23746, <br />Sheridan, WY 82801, United States</p>
              </div>
            </div>
            <div className='mb-6 flex gap-4'>
              <div>
                <DevicePhoneMobileIcon className='w-6' />
              </div>
              <div>
                <h4 className='font-semibold'>Phone:</h4>
                <p>USA +1 (307) 207-1072</p>
                <p>INDIA +91 89788 52912</p>
              </div>
            </div>
            <div className='mb-6 flex gap-4'>
              <div>
                <EnvelopeIcon className='w-6' />
              </div>
              <div>
                <h4 className='font-semibold'>Email:</h4>
                <p>info@fiduciatax.com</p>
                <p>contact@fiduciatax.com</p>
              </div>
            </div>
            <div className='mb-6 flex gap-4'>
              <div>
                <ClockIcon className='w-6' />
              </div>
              <div>
                <h4 className='font-semibold'>Working Hours:</h4>
                <p>6 AM to 9 PM US Eastern Time</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-secondary lg:w-2/4 lg:p-16 py-9 px-6'>
          <div className=''>
            <form onSubmit={handleSubmit}>
              <div className='pb-6'>
                <input
                  type="text"
                  name="name"
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='block w-full px-10 py-3 rounded-lg'
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <div className='pb-6'>
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='block w-full px-10 py-3 rounded-lg'

                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className='pb-6'>
                <input
                  type="text"
                  name="mobile"
                  placeholder='Mobile'
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className='block w-full px-10 py-3 rounded-lg'

                />
                {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
              </div>
              <div className='pb-6'>
                <textarea
                  name="message"
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='block w-full min-h-32 px-10 py-3 rounded-lg'

                />
                {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
              </div>
              <button type="submit" className='bg-text text-background block w-full px-10 py-3 rounded-lg'>Send</button>
            </form>
          </div>
          <div className='pt-6'>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
