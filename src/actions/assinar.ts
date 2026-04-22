import { defineAction } from "astro:actions";
import { z } from "zod";
import { sendEmail } from "../lib/email";

import node from "@astrojs/node";

export default {
  adapter: node({
    mode: "standalone",
  }),
};

export const server = {
  assinar: defineAction({
    accept: "form",
    input: z.object({
      plano: z.string().min(1),

      nome: z.string().min(3, "Nome obrigatório"),
      email: z.string().email("Email inválido"),
      cpf: z.string().min(11, "CPF inválido"),
      celular: z.string().min(8, "Celular inválido"),

      cep: z.string().min(8),
      cidade: z.string().min(2),
      endereco: z.string().min(3),
      numero: z.string().min(1),

      pagamento: z.string(),
    }),

    handler: async (data) => {
      console.log("FORM DATA:", data);

  await sendEmail({
    to: "nicholas.nagel@csmtec.com.br",
    subject: "Novo Pedido",
    text: JSON.stringify(data),
  });

      return {
        success: true,
      };
    },
  }),
};