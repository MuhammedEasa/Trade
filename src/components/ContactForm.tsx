'use client';

import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

const ContactForm: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    return /^[\+]?[\d\s\-\(\)]{10,}$/.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim() && !formData.mobile.trim()) {
      newErrors.email = 'Email or mobile number is required';
      newErrors.mobile = 'Email or mobile number is required';
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.mobile && !validatePhone(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSUBMIT_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast.error('Failed to send message. Please try again.', {
        style: {
          background: 'var(--cream-50)',
          color: 'var(--cream-900)',
          border: '1px solid var(--cream-200)',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            resetForm();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showSuccess]);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
    setErrors({});
    setShowSuccess(false);
    setCountdown(10);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, var(--cream-50) 0%, var(--cream-100) 100%)', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}>
        <div className="w-full max-w-lg">
          {!showSuccess ? (
            <div className={styles.formContainer}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--cream-900)' }}>
                  Start Trading Today
                </h1>
                <p style={{ color: 'var(--cream-700)' }} className="text-lg">
                  Connect with our expert brokers and begin your trading journey
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder=""
                    required
                  />
                  <label className={styles.formLabel}>Full Name *</label>
                  {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
                </div>

                <div className={styles.gridResponsive}>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder=""
                    />
                    <label className={styles.formLabel}>Email Address</label>
                    {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder=""
                    />
                    <label className={styles.formLabel}>Mobile Number</label>
                    {errors.mobile && <div className={styles.errorMessage}>{errors.mobile}</div>}
                  </div>
                </div>

                <p className="text-sm mb-6" style={{ color: 'var(--cream-600)' }}>
                  * Either email or mobile number is required
                </p>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder=""
                  />
                  <label className={styles.formLabel}>Trading Goals (Optional)</label>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className={styles.loadingSpinner}></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                      Connect with Our Brokers
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm" style={{ color: 'var(--cream-600)' }}>
                  🔒 Secure & Confidential • Response within 24 hours
                </p>
              </div>
            </div>
          ) : (
            <div className={`${styles.successContainer} ${styles.fadeIn}`}>
              <div className={styles.iconCheck}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h2>
              <p className="text-green-700 mb-2">Thank you for your interest in our trading services.</p>
              <p className="text-green-600 mb-6">
                Our expert broker team will contact you within 24 hours to discuss your trading goals and get you started.
              </p>
              <div className="inline-flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm font-medium">Form will reset in <span>{countdown}</span> seconds</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--cream-50)',
            color: 'var(--cream-900)',
            border: '1px solid var(--cream-200)',
          },
        }}
      />
    </>
  );
};

export default ContactForm;
