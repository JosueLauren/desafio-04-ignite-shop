import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer, AllImagesContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { useRouter } from "next/router";


interface SuccessProps {
    customerName: string,
    products: {
        name: string,
        imageUrl: string,
    }[]
}

export default function Success({customerName, products }: SuccessProps) {
    

    return (

        <>  
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head> 
            <SuccessContainer>
                
                <AllImagesContainer>

                {
                    products.map(product => {
                        return (
                            <ImageContainer key={product.name}>
                                <Image src={product.imageUrl} width={120} height={110} alt=""/>
                            </ImageContainer>
                        )
                    })
                }
                </AllImagesContainer>
                
                <h1>Compra efetuada!</h1>

                <p>
                    Uhull <strong>{customerName}</strong>, 
                    sua compra de {products.length} 
                    {products.length > 1 ? ' camisetas ' : ' camiseta '} 
                    já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent:false,
            }
        }
    }
    
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product

    const products = session.line_items.data.map(item => {
        let product = item.price.product as Stripe.Product
        return {
            name: product.name,
            imageUrl: product.images[0]
        }
    })

    console.log(session.line_items.data)

    return {
        props: {
            customerName,
            products: products
        }
    }
}