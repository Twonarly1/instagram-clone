import '../styles/globals.css'
import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

const infuraId = process.env.INFURA_ID

// Chains for connectors to support
const chains = defaultChains

const connectors = () => {
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
  ]
}

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (

<SessionProvider session={session}> 
 <Provider autoConnect connectors={connectors}>
 <RecoilRoot> 
   <Component {...pageProps} />
   </RecoilRoot>
 </Provider>
</SessionProvider>
 
  )
}

export default MyApp
