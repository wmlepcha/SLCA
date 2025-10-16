"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 fredericka-the-great-regular">Contact Us</h1>
          <div className="h-1 w-32 brand-gradient rounded-full mx-auto" />
        </div>
        
        <p className="text-lg max-w-3xl mx-auto text-center mb-12">
          Have questions about our organization or want to get involved? 
          We&apos;d love to hear from you. Use the form below or reach out directly.
        </p>
      </section>
      
      {/* Contact Information and Form */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="mb-8">
              <div className="flex items-start mb-6">
                <div className="mr-4 p-3 bg-[var(--dark-green)] text-[var(--butter-yellow)] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="mb-1">For general inquiries:</p>
                  <a className="text-[var(--brand-green)] hover:underline" href="mailto:info@slca-sikkim.org">info@slca-sikkim.org</a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="mr-4 p-3 bg-[var(--dark-green)] text-[var(--butter-yellow)] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p>Dzongu Passingdang, P.O Passingdang & P.S,</p>
                  <p>Mangan · Mangan District, Sikkim</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-[var(--dark-green)] text-[var(--butter-yellow)] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="lepcha-border mb-8"></div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM (By appointment only)</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="mb-4">Thank you for contacting us. We&apos;ll respond to your message as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
                  className="px-4 py-2 bg-[var(--brand-green)] text-white rounded hover:opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Membership">Membership</option>
                    <option value="Events">Events</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Donations">Donations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="px-6 py-3 bg-[var(--brand-green)] text-white rounded-md font-medium hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Find Us</h2>
        <div className="lepcha-border mb-8"></div>
        
        <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Map will be embedded here</p>
            <p className="text-sm text-gray-400">Add Google Maps or other map service integration</p>
          </div>
        </div>
      </section>
    </div>
  );
}
