import Image from 'next/image'

import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContexts'

import { HeaderComponent } from '@/styles/pages/header'


import logoImg from './../assets/Logo (3).svg'
import iconBag from './../assets/IconBag.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
    const { pathname } = useRouter()
    
    const {setIsOpenPanel, productsIntheCart } = useContext(CartContext)

    const quantityItemsInCart = productsIntheCart.length

    console.log(pathname)

    return (
        <>
            <HeaderComponent className={pathname === '/success' ? 'center' : ''} >

                <Link href={'/'}>
                    <Image src={logoImg} alt="" />
                </Link>
            

                <button className={pathname === '/success' ? 'hide' : ''} onClick={() => setIsOpenPanel(true)}> 
                    <span>{quantityItemsInCart}</span>
                    <Image src={iconBag}  alt=""/> 
                </button>
            </HeaderComponent>
        </>
    )
}