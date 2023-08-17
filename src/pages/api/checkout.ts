import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   const { products } = req.body
   

    if(!products) {
        return res.status(400).json({ error: 'Price not found.'})
    }

    if(req.method !== 'POST'){
        return res.status(405).json({error: 'Method not allowed'})
    }

    const sucessUrl = `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `http://localhost:3000/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: products,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}