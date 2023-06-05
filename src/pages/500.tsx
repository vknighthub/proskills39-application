import type { NextPageWithLayout } from '@/types';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <section className="page_500">
        <div className='authincation h-100 p-meddle'>
          <div className='container h-100'>
            <div className='row justify-content-center h-100 align-items-center'>
              <div className='col-md-8'>
                <div className='form-input-content text-center error-page'>
                  <h1 className='error-text font-weight-bold'>500</h1>
                  <h3>
                    <i className='fa fa-exclamation-triangle text-warning' /> Internal Server Error!
                  </h3>
                  <div>
                    <Link className='btn btn-primary' href='/'>
                      Back to Home
                    </Link>
                  </div>
                </div>
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
