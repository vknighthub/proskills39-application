import { NextSeo, NextSeoProps } from 'next-seo'
interface SeoProps extends NextSeoProps {
  url: string,
  image_url: string
}
const Seo = ({ title, description, url, image_url, ...props }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        site_name: title,
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${url}`,
        description: description,
        images: [
          {
            url: image_url,
            width: 800,
            height: 600,
            alt: title,
          }
        ],
        book: {
          authors: [
            'https://anhben.com',
          ]
        }
      }}
      twitter={{
        handle: '@vknighthub',
        site: '@vknighthub',
        cardType: 'summary_large_image',
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
      canonical={process.env.NEXT_PUBLIC_WEBSITE_URL}
      facebook={{
        appId: '563576815726679',
      }}
      {...props}
    />
  )
}

export default Seo
