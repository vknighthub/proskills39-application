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
      title={settings?.seo?.metaTitle}
      titleTemplate={`${settings?.seo?.metaTitle || settings?.siteTitle || 'Proskills39'
        } | %s`}
      defaultTitle="ProSkills39"
      description={settings?.seo?.metaDescription || settings?.siteSubtitle}
      canonical={settings?.seo?.canonicalUrl}
      twitter={{
        handle: settings?.seo?.twitterHandle,
        site: settings?.siteTitle,
        cardType: settings?.seo?.twitterCardType,
      }}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
      facebook={{
        appId: '563576815726679',
      }}
    />
  )
}

export default DefaultSeo
