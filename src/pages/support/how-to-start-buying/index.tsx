import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const StartBuying: NextPageWithLayout = (props: Props) => {
    return (
        <div className="primary-content-area container content-padding grid-left-sidebar">
            
        </div>
    )
}
StartBuying.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartBuying