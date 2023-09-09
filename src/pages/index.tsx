import FacebookMsg from '@/components/plugin/facebookmsg'
import { HomeAcademy } from '@/components/services/academy'
import { HomeFreelancer } from '@/components/services/freelancer'
import { NewestService } from '@/components/services/newst-service'
import { OtherService } from '@/components/services/other-service'
import { HomePopularCategory } from '@/components/services/popular-categories'
import HomePopularService from '@/components/services/popular-service'
import routes from '@/config/routes'
import client from '@/data/client'
import Layout from '@/layouts/_layout'
import Seo from '@/pages/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'


const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ homeinfo }) => {

  const homepageinfo = homeinfo?.result.data

  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title="ProSkills39 - Pro Skills For Your Success"
        description="ProSkills39 is a Service Marketplace that connects pro-skills freelancers and provides support services for project owners to start up and expand their businesses at a reasonable cost."
        url={routes.home}
        image_url='https://api.ProSkills39.com/system/logo/logo-seo.png'
      />
      <div className="primary-content-area background-content">
        <div className="single-post medium-section mt-6">
          <div className="post-heading">
            <h1 className="home-page-title">
              ProSkills39
            </h1>
            <div className="news-meta">
              <svg className="svg-home" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                    <stop stopColor="#0061D3" offset="0" />
                    <stop stopColor="#04CDF9" offset="1" />
                  </linearGradient>
                </defs>
                <g>
                  <text id="text" y="100"
                    fontStyle="normal"
                    letterSpacing="0.15rem"
                    strokeWidth="1.5"
                    stroke="url(#gradient)"
                    fill="none"
                    fontFamily='Quicksand'
                    style={{ fontFamily: 'sans-serif' }}
                  >
                    A Web Service MarketPlace
                  </text>
                </g>
              </svg>
            </div>
            <p style={{
              fontWeight: 400,
              fontSize: 24
            }}>
              {t('text-introduce')}
            </p>
            <div className="collection-box" style={{ justifyContent: 'center' }}>
              <Link
                href="#"
                className="btn btn-normal btn-dark create-collection"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <HomePopularCategory data={homepageinfo.popuparcategories} />

        <HomeAcademy />
        
        <HomeFreelancer data={homepageinfo.freelancerlevel} />


        <div className="container-all-service">
          <div className="section-title">
            All service on ProSkills39
          </div>
        </div>

        <HomePopularService data={homepageinfo.mostpopularservice} />

        <NewestService data={homepageinfo.newestservice} />

        <OtherService />


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
