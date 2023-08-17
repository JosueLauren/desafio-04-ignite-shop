import Image from "next/image"

import { useContext, useEffect, useMemo, useState } from 'react'
import { CartContext } from '@/contexts/CartContexts'

import { PanelBackground, PanelContainer, PanelBody, PanelHeader, PanelFooter, } from "@/styles/components/panel"
import { PanelItem } from "./PanelItem"

import imageClose from './../assets/IconClose.svg'
import axios from "axios"

export function Panel(){
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { setIsOpenPanel, isOpenPanel, productsIntheCart } = useContext(CartContext)

    const quantityItemsInCart = productsIntheCart.length

    let productsFromApi = useMemo(() => {
        return productsIntheCart.map((product) => {
            return { quantity: 1,  price: product.defaultPriceId }
        })
    }, [productsIntheCart])

    let valueTotal = useMemo(() => {
        return productsIntheCart.reduce((acc, product) => {
        
            let priceNumber = product.price?.substring(3).split(',').join('.')
    
            acc += Number(priceNumber)
    
            return acc
    
        }, 0)
    }, [productsIntheCart])

    async function handleBuyProduct() {
        try {

            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                products: productsFromApi
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl

        } catch (err) {

            setIsCreatingCheckoutSession(false)

            alert('Falha ao redirecionar ao checkout !')
        }
    }

    return (

        <>
            {/* { isOpenPanel && ( */}
                <PanelBackground className={isOpenPanel ? 'show' : ''}>
                <PanelContainer className={isOpenPanel ? 'show' : ''}>
                    <PanelHeader>
                        <button onClick={() => setIsOpenPanel(false)}>
                            <Image src={imageClose} alt=""/>
                        </button>
                    </PanelHeader>
                    <PanelBody>
                        <p>Sacola de compras</p>
                        { productsIntheCart.length ? productsIntheCart.map(product => {
                            return (
                                <PanelItem key={product.id}  product={product}/>
                            )
                        }) : 'Nenhum item no carrinho!' }
                    </PanelBody>

                    <PanelFooter>
                        <p>
                            <label>Quantidade</label>
                            <span>{`${quantityItemsInCart} ${quantityItemsInCart > 1 ? 'itens' : 'item'}`}</span>
                        </p>
                        <div>
                            <label>Valor total</label>
                            <span>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                }).format(valueTotal)}
                            </span>
                        </div>
                        <button
                            onClick={handleBuyProduct}
                            disabled={isCreatingCheckoutSession || productsFromApi.length === 0}
                        >
                            Finalizar compra
                        </button>
                    </PanelFooter>
                </PanelContainer>
                </PanelBackground>
            {/* )} */}
        </>
    )
}