import emailjs from "emailjs-com";


const SERVICE_ID = "service_ixpwnky";
const TEMPLATE_ID = "template_53tymdj";
const PUBLIC_KEY = "XpwlYpgOgVOf3FuQd";


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
