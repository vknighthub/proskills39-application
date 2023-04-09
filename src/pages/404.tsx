import Layout from '@/layouts/_layout';
import type { NextPageWithLayout } from '@/types';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const ErrorPage: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='authincation h-100 p-meddle'>
      <div className='container h-100'>
        <div className='row justify-content-center h-100 align-items-center'>
          <div className='col-md-8'>
            <div className='form-input-content text-center error-page'>
              <h1 className='error-text font-weight-bold'>404</h1>
              <h4>
                <i className='fa fa-exclamation-triangle text-warning' /> The
                page you were looking for is not found!
              </h4>
              <p>
                You may have mistyped the address or the page may have moved.
              </p>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common','footer'])),
    },
    revalidate: 60, // In seconds
  };
};

export default ErrorPage;
