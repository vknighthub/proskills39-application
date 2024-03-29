import '@/assets/css/globals.css'
import DefaultSeo from '@/layouts/_default-seo'
import { NextPageWithLayout } from '@/types'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'
import { ToastProvider } from '@/components/utils/Toast'
import { Toaster } from 'react-hot-toast'
import { MeshProvider } from "@meshsdk/react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import FacebookMsg from '@/components/plugin/facebookmsg'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const PrivateRoute = dynamic(() => import('@/layouts/_private-route'), {
  ssr: false,
})

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {

  const { locale } = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())
  const authenticationRequired = Component.authorization ?? false



  return (
    <>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MeshProvider>
            <ToastProvider>
              <SessionProvider>
                <>

                  <DefaultSeo />
                  <GoogleAnalytics trackPageViews gaMeasurementId='G-PEV1Z2KBFH' />

                  {authenticationRequired ? (
                    <PrivateRoute>
                      {getLayout(<Component {...pageProps} />)}
                    </PrivateRoute>
                  ) : (
                    getLayout(<Component {...pageProps} />)
                  )}
                  <FacebookMsg />

                  <Toaster
                    position="top-right"
                    reverseOrder={false} />
                </>
              </SessionProvider>
            </ToastProvider>
          </MeshProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider >
    </>
  )
}
export default appWithTranslation(CustomApp);
