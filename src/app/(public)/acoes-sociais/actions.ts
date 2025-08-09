'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession() {
  const origin = 'http://localhost:3000'; // Em produção, substitua pelo seu domínio

  // IMPORTANTE: Substitua este valor pelo ID do Preço (Price ID) do seu produto no Stripe.
  // Ele geralmente começa com "price_...". Você pode encontrá-lo no painel do Stripe,
  // na página de detalhes do seu produto "Doação de Cesta Básica".
  const priceId = 'price_1RuLfmCKYoCACmnb0XzTVlDA'; // <--- ID DO PREÇO DO STRIPE

  if (!priceId.startsWith('price_')) {
    throw new Error('O ID do preço do Stripe não foi configurado corretamente. Ele deve começar com "price_".');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'pix', 'boleto'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/missoes?success=true`,
      cancel_url: `${origin}/acoes-sociais?canceled=true`,
    });

    // Retorna um objeto JSON simples, que é serializável.
    return {
      id: session.id,
      url: session.url,
    };
  } catch (err) {
    const error = err as Error;
    console.error(`Error creating Stripe session: ${error.message}`);
    // Lançar um erro aqui para que o catch no front-end possa capturá-lo.
    throw new Error('Could not create Stripe checkout session');
  }
}
