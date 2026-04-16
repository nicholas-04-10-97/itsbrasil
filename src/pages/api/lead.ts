import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  console.log("Dados recebidos:", data);

  // 👉 aqui você pode salvar no banco depois

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
};