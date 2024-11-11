"use client"

import Logo from "@/constants/Logo"
import GoogleIcon from "@/icons/GoogleIcon"
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true); // Initialize to true or false based on your needs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      const updatedData = { ...prevData, [name]: value };
      // Check if passwords match
      if (name === 'password' || name === 'confirmPassword') {
        setPasswordsMatch(updatedData.password === updatedData.confirmPassword);
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      // Handle form submission logic (e.g., send data to server)
      console.log('Form submitted with:', formData);
    }
  };

  return (
    <div className='flex justify-center mt-12'>
      <div className='flex justify-center bg-secondary border-b-8 border-b-accent p-9 w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center p-3'>
            <Logo />
          </div>
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold py-2'>Sign Up</h1>
          </div>
          <div>
            <div className="relative flex items-center py-2">
              <span className="absolute p-2">
                <AtSymbolIcon className="w-6 h-6" />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-10 py-3 border rounded-lg"
                placeholder="Email ID"
              />
            </div>

            <div className="relative flex items-center py-2">
              <span className="absolute p-2">
                <LockClosedIcon className="w-6 h-6" />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full px-10 py-3 border rounded-lg"
                placeholder="Password"
              />
            </div>

            <div className="relative flex items-center py-2">
              <span className="absolute p-2">
                <LockClosedIcon className="w-6 h-6" />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="block w-full px-10 py-3 border rounded-lg"
                placeholder="Confirm Password"
              />
            </div>

            {!passwordsMatch && (
              <p style={{ color: 'red' }}>Passwords do not match</p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-10 py-3 bg-primary text-background rounded-lg hover:scale-105 transition ease-in-out"
              >
                Sign up
              </button>

              <p className="mt-4 text-center">or sign up with</p>

              <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 border rounded-lg hover:scale-105 transition ease-in-out">
                <GoogleIcon />
                <span className="mx-2">Sign up with Google</span>
              </a>

              <div className="mt-6 text-center hover:scale-105 transition ease-in-out">
                <a href="/signin" className="text-sm">
                  Already have an account? <span className='font-bold'>Sign In</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
