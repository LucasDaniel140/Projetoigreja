'use server';

import Stripe from 'stripe';
import { z } from 'zod';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const createCheckoutSessionSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  paymentMethod: z.enum(['card', 'pix', 'boleto']),
  amount: z.number().positive(),
  productName: z.string(),
});

type CreateCheckoutSessionParams = z.infer<typeof createCheckoutSessionSchema>;

export async function createCheckoutSession(params: CreateCheckoutSessionParams) {
  const validatedParams = createCheckoutSessionSchema.safeParse(params);

  if (!validatedParams.success) {
    throw new Error('Invalid parameters for checkout session');
  }

  const { name, email, paymentMethod, amount, productName } = validatedParams.data;
  
  const origin = 'http://localhost:3000'; // Em produção, substitua pelo seu domínio

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [paymentMethod],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: 'payment',
      success_url: `${origin}/missoes?success=true`,
      cancel_url: `${origin}/acoes-sociais?canceled=true`,
    });

    return {
      id: session.id,
      url: session.url,
    };
  } catch (err) {
    const error = err as Error;
    console.error(`Error creating Stripe session: ${error.message}`);
    throw new Error('Could not create Stripe checkout session');
  }
}
