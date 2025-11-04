const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY;

export const emailConfig = {
    service: SERVICE_ID,
    template: TEMPLATE_ID,
    publickey: PUBLIC_KEY,
    recapchakey: RECAPTCHA_KEY
};