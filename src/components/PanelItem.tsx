
import { PanelItemContainer } from './../styles/components/panelItem'
import Image from 'next/image'

import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContexts'

interface PanelItemProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        defaultPriceId: string,
    }
}

export function PanelItem({ product }: PanelItemProps) {

    const { removeProduct } = useContext(CartContext)

    return (
        <PanelItemContainer>
            <div className='imageContainer'>
            <Image src={product.imageUrl} alt=""  width={94} height={94}/>
            </div>
           
            <div>
                <p>{product.name}</p>
                <span>{product.price}</span>
                <button onClick={() => removeProduct(product.id)}>Remover</button>
            </div>
        </PanelItemContainer>
    )
}