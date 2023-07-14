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
        type: "website",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${url}`,
        description: description,
        images: [
          {
            url: image_url ? image_url : "https://api.proskills39.com/system/logo/logo-seo.png",
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
        book: {
          authors: [
            "https://anhben.com",
          ]
        }
      }}
      twitter={{
        handle: "@vknighthub",
        site: "@vknighthub",
        cardType: "summary_large_image",
      }}
      canonical={process.env.NEXT_PUBLIC_WEBSITE_URL_CANONICAL}
      {...props}
    />
  )
}

export default Seo
