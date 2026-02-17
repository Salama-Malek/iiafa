import emailjs from "@emailjs/browser";

export class ContactEmailConfigError extends Error {
  constructor(missingKeys) {
    super(`Missing EmailJS configuration: ${missingKeys.join(", ")}`);
    this.name = "ContactEmailConfigError";
    this.code = "CONTACT_EMAIL_CONFIG";
    this.missingKeys = missingKeys;
  }
}

function getEmailConfig() {
  const config = {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  };

  const missingKeys = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    throw new ContactEmailConfigError(missingKeys);
  }

  return config;
}

export async function sendContactEmail(form) {
  const { publicKey, serviceId, templateId } = getEmailConfig();

  const templateParams = {
    full_name: form.full_name?.trim() || "",
    phone: form.phone?.trim() || "",
    email: form.email?.trim() || "",
    service_type: form.service_type?.trim() || "",
    message: form.message?.trim() || "",
    to_email: form.to_email?.trim() || "",
    reply_to: form.email?.trim() || "",
    submitted_at: new Date().toISOString(),
    source: "iiafa-law-firm-contact-form",
  };

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
}

