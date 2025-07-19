import React from 'react';
import { ContactHero, ContactForm, ContactMap } from './components';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default ContactUs;
