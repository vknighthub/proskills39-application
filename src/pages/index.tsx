import { NewestService } from '@/components/services/newst-service'
import { HomePopularCategory } from '@/components/services/popular-categories'
import HomePopularService from '@/components/services/popular-service'
import HomeTopCreators from '@/components/services/top-creator'
import routes from '@/config/routes'
import client from '@/data/client'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ homeinfo }) => {

  const homepageinfo = homeinfo?.result.data

  return (
    <>
      <Seo
        title="ProSkills39 - Pro Skills For Your Success"
        description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
        url={routes.home}
        image_url='https://api.proskills39.com/system/logo/logotest.png'
      />
      <div className="primary-content-area bottom-padding-70">
        <HomePopularCategory data={homepageinfo.popuparcategories} />
        <HomePopularService />
        <HomeTopCreators data ={homepageinfo.mostpopularseller}/>
        <NewestService data = {homepageinfo.newestservice} />
      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const formattedparams = {
      language: locale,
    };
    const homeinfo = await client.settings.homepage(formattedparams);
    return {
      props: {
        homeinfo,
        ...(await serverSideTranslations(locale!, ['common', 'footer'])),
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    console.log(error)
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
