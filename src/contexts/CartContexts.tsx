import { ReactNode, createContext, useState } from 'react';

interface ProductProps {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
}

interface CartcontextType {
    productsIntheCart: ProductProps[]
    isOpenPanel: boolean
    insertProduct: (product: ProductProps) => void
    removeProduct: (id: string) => void
    setIsOpenPanel: (option: boolean) => void

}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartcontextType)

export function CartContextProvider({children}:CartContextProviderProps) {
    const [productsIntheCart, setProductsIntheCart] = useState<ProductProps[]>([])
    const [isOpenPanel, setIsOpenPanel] = useState(false)

    function insertProduct(product: ProductProps){

       let isProduct =  productsIntheCart.find((productParam) => productParam.id === product.id)

       if(isProduct) {
            window.alert('Produto já inserido no carrinho!')
            return 
       }

       setProductsIntheCart([...productsIntheCart, product])
    }


    function removeProduct(productId: string) {
        const newList = productsIntheCart.filter((product) => product.id !== productId)

        setProductsIntheCart(newList)
    }
    
    return (
        <CartContext.Provider 
            value={{
                isOpenPanel,
                productsIntheCart,
                insertProduct,
                removeProduct,
                setIsOpenPanel,
                }}
            >
            {children}
        </CartContext.Provider>
    )
}