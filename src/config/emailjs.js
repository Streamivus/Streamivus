/* eslint-disable linebreak-style */

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_h4gtndg';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_a9tvs7a';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'lXiCUDOtu8_WY_Zw4';

export const emailJsConfig = {
  serviceId: SERVICE_ID,
  templateId: TEMPLATE_ID,
  publicKey: PUBLIC_KEY,
  isConfigured: Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY),
};

export default emailJsConfig;
