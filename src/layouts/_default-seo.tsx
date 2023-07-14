import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import { useSettings } from '@/data/settings'

const DefaultSeo = () => {
  const { settings } = useSettings()
  return (
    <NextDefaultSeo
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1 maximum-scale=1',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          name: "google-site-verification",
          content: "rxpEgRNKWEX3LEHdmS712_PxAwygWDoCK69N0AOouNA"
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          href: 'icons/apple-icon-180.png',
        }
      ]}
      title="Proskills39"
      titleTemplate={`Proskills39`}
      defaultTitle="ProSkills39"
      description="ProSkills39 is a Service Marketplace that connects pro-skills freelancers and provides support services for project owners to start up and expand their businesses at a reasonable cost."
      canonical="https://www.proskills39.com/"
      twitter={{
        handle: '@vknighthub',
        site: '@vknighthub',
        cardType: 'summary_large_image',
      }}
      robotsProps={{
        nosnippet: false,
        notranslate: false,
        noimageindex: false,
        noarchive: false,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
    />
  )
}

export default DefaultSeo
