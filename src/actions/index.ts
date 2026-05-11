import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    handler: async () => {
      const { data, error } = await resend.emails.send({
  from: "Test <youremail@testing-grounds.csmtec.com.br>",
  to: "delivered@resend.dev",
  subject: "It works!",
  html: "<p> Hello from Resend! This email was sent using the Resend API.</p>",
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};



