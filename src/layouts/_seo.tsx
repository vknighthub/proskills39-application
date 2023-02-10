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
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${url}`,
        title: title,
        description: description,
        images: [
          {
            url: image_url,
            width: 800,
            height: 600,
            alt: title,
          },
        ]
      }}
      {...props}
    />
  )
}

export default Seo
