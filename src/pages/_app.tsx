import '@/assets/css/globals.css'
import DefaultSeo from '@/layouts/_default-seo'
import { NextPageWithLayout } from '@/types'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const PrivateRoute = dynamic(() => import('@/layouts/_private-route'), {
  ssr: false,
})

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())
  const authenticationRequired = Component.authorization ?? false

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <>
          <DefaultSeo />
          {authenticationRequired ? (
            <PrivateRoute>
              {getLayout(<Component {...pageProps} />)}
            </PrivateRoute>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}
export default CustomApp
