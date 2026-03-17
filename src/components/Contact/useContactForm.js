import { useState, useCallback } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

/**
 * Contact form hook — manages form state, validation, and submission.
 * @param {Function} t — translation function from useLanguage()
 */
export function useContactForm(t) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = useCallback(() => {
    const next = { name: null, email: null, message: null };
    let valid = true;

    if (!formData.name.trim()) {
      next.name = t('contact.required');
      valid = false;
    }

    if (!formData.email.trim()) {
      next.email = t('contact.required');
      valid = false;
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      next.email = t('contact.invalidEmail');
      valid = false;
    }

    if (!formData.message.trim()) {
      next.message = t('contact.required');
      valid = false;
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      next.message = t('contact.required');
      valid = false;
    }

    setErrors(next);
    return valid;
  }, [formData, t]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on edit
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '', website: '' });
    setErrors({ name: null, email: null, message: null });
    setStatus('idle');
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validate()) return;

      setStatus('submitting');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            website: formData.website, // honeypot value
          }),
        });

        if (response.ok) {
          setStatus('success');
          setTimeout(() => {
            resetForm();
          }, 3000);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    },
    [formData, validate, resetForm],
  );

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
