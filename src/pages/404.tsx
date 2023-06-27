import type { NextPageWithLayout } from '@/types';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">
                  Look like you re lost
                </h3>
                <p>the page you are looking for not avaible!</p>
                <Link href="/" className="link_404">Go to Home</Link>
              </div>
            </div>
          </div>   
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'footer'])),
    },
    revalidate: 60, // In seconds
  };
};

export default ErrorPage;
