import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const POST: APIRoute = async () => {
const {data, error} = await resend.emails.send({
  from: "Test <youremail@testing-grounds.csmtec.com.br>",
  to: "delivered@resend.dev",
  subject: "It works!",
  html: "<p> Hello from Resend! This email was sent using the Resend API.</p>",
});

if(error) {
    return new Response (JSON.stringify({ error }));
}

  return new Response (JSON.stringify(data));

};