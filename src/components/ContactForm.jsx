'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const initialState = {
  name: '',
  phone: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm(initialState);
      } else {
        // Manejar errores específicos de la API
        if (data.error === 'Missing required fields') {
          alert(t('contact.messages.missingFields'));
        } else if (data.error === 'Invalid email format') {
          alert(t('contact.messages.invalidEmail'));
        } else {
          alert(t('contact.messages.error'));
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t('contact.messages.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">{t('contact.title')}</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="contact-form-row">
          <label htmlFor="name">{t('contact.form.name')}</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="contact-form-row">
          <label htmlFor="phone">{t('contact.form.phone')}</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="contact-form-row">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="contact-form-row">
          <label htmlFor="company">{t('contact.form.company')}</label>
          <input type="text" id="company" name="company" value={form.company} onChange={handleChange} />
        </div>
        <div className="contact-form-row">
          <label htmlFor="subject">{t('contact.form.subject')}</label>
          <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
        </div>
        <div className="contact-form-row">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} />
        </div>
        <button 
          type="submit" 
          className="contact-submit-btn" 
          disabled={loading}
        >
          {loading ? t('contact.form.sending') : t('contact.form.submit')}
        </button>
        {submitted && <div className="contact-success">{t('contact.messages.success')}</div>}
      </form>
    </section>
  );
};

export default ContactForm; 