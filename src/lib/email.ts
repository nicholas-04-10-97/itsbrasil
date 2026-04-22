import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, text }) {
  try {
    const response = await resend.emails.send({
      from: "ITS Site <nicholas.nagel@csmtec.com.br>",
      to,
      subject,
      text,
    });

    console.log("EMAIL RESPONSE:", response);
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  }
}