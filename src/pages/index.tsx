import { NewestService } from '@/components/services/newst-service'
import { HomePopularCategory } from '@/components/services/popular-categories'
import HomePopularService from '@/components/services/popular-service'
import HomeTopCreators from '@/components/services/top-creator'
import routes from '@/config/routes'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Seo
        title="ProSkills39 - Pro Skills For Your Success"
        description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
        url={routes.home}
        image_url='https://api.proskills39.com/system/logo/logotest.png'
      />
      <div className="primary-content-area bottom-padding-70">
        <HomePopularService />
        <HomeTopCreators />
        <HomePopularCategory />
        <NewestService />
      </div>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common','footer'])),
    },
    revalidate: 60, // In seconds
  };
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
