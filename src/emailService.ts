import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}


export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project: formData.project,
        message: formData.message,
      },
      PUBLIC_KEY
    );
  } catch (error) {
    throw new Error('Failed to send email');
  }
}
