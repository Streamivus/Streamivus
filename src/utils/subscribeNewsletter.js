/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import sendContactEmail from './sendEmail.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

/**
 * Subscribe an email to the newsletter.
 * Uses the Vercel /api/subscribe route in production; falls back to client EmailJS locally.
 */
export default async function subscribeNewsletter(email) {
  const normalized = normalizeEmail(email);

  if (!normalized || !EMAIL_REGEX.test(normalized)) {
    throw new Error('Please enter a valid email address.');
  }

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalized }),
    });

    if (response.ok) {
      return;
    }

    if (response.status === 400) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || 'Please enter a valid email address.');
    }
  } catch (error) {
    // Network error or missing API route — fall through to client EmailJS.
  }

  // If server-side subscribe fails (common when EMAILJS_PRIVATE_KEY isn't set),
  // fall back to the browser EmailJS SDK so the user can still subscribe.
  await sendContactEmail({
    fromName: `Newsletter signup: ${normalized}`,
    message: `New newsletter subscriber: ${normalized}`,
  });
}
