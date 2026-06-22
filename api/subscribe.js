const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getEmailJsConfig() {
  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  return { serviceId, templateId, publicKey, privateKey };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const { serviceId, templateId, publicKey, privateKey } = getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    return res.status(503).json({ error: 'Newsletter service is not configured.' });
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: `Newsletter signup: ${email}`,
      to_name: 'Streamivus',
      message: `New newsletter subscriber: ${email}`,
      reply_to: email,
      subscriber_email: email,
    },
  };

  if (privateKey) {
    payload.accessToken = privateKey;
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'Unable to complete subscription.' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Unable to complete subscription.' });
  }
};
