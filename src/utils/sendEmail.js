/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import emailjs from '@emailjs/browser';
import emailJsConfig from '../config/emailjs';

let initialized = false;

function ensureEmailJsInit() {
  if (initialized || !emailJsConfig.isConfigured) return;
  emailjs.init({
    publicKey: emailJsConfig.publicKey,
    blockHeadless: true,
  });
  initialized = true;
}

/**
 * Send a message via EmailJS using the shared contact template.
 * @returns {Promise<import('@emailjs/browser').EmailJSResponseStatus>}
 */
export default function sendContactEmail({
  fromName,
  message,
  toName = 'Streamivus',
}) {
  if (!emailJsConfig.isConfigured) {
    return Promise.reject(new Error('EmailJS is not configured.'));
  }

  ensureEmailJsInit();

  return emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.templateId,
    {
      from_name: fromName,
      to_name: toName,
      message,
    },
    { publicKey: emailJsConfig.publicKey },
  );
}

export function getEmailJsSetupHint() {
  return 'Add streamivus.com and www.streamivus.com to EmailJS → Account → Security → Domains, then set REACT_APP_EMAILJS_* in Vercel.';
}
