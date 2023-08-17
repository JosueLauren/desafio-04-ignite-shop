
import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'

globalStyles()

import { Panel } from '@/components/Panel'
import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/app'
import { CartContextProvider } from '@/contexts/CartContexts'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
      <Container>
        <Panel/>
        <Header/>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
    
  )
}
