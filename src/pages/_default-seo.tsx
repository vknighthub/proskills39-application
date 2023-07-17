import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import SEO from 'next-seo.config';
const DefaultSeo = () => {

  return (
    <NextDefaultSeo
      {...SEO}

    />
  )
}

export default DefaultSeo
