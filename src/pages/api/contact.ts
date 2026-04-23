import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // TODO: store in DB
  console.log({ name, email, message });

  // TODO: send email

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/?success=true',
    },
  });
};

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@yourdomain.com',
  to: 'nicholas.nagel@csmtec.com.br',
  subject: 'New contact form submission',
  html: `<p>${name} (${email}) says: ${message}</p>`,
});