import routes from '@/config/routes';
import { FetchServiceByCatalogSlug } from '@/data/categories';
import client from '@/data/client';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { NextPageWithLayout, Service, ServicePaginator } from '@/types';
import { getPagination, pagination } from '@/utils/util';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';



type ParsedQueryParams = {
    servicesSlug: string;
};

type PageProps = {
    services: ServicePaginator;
    servicesSlug: string
};


export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};


export const getStaticProps: GetStaticProps<
    PageProps,
    ParsedQueryParams
> = async ({ params, locale }) => {
    const { servicesSlug } = params!; //* we know it's required because of getStaticPaths
    try {
        const services = await client.services.get({
            page: 1,
            limit: 12,
            slug: servicesSlug,
            language: locale
        });
        return {
            props: {
                services,
                servicesSlug,
                locale,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        console.error(error)
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

const ServicesPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ services, servicesSlug }) => {

    const { locale } = useRouter()
    const [active, setActive] = useState(1);

    const [state, setstate] = useState<number[]>([]);
    const initServiceData = services



    const { data, refetch } = FetchServiceByCatalogSlug({
        page: active,
        limit: 12,
        slug: servicesSlug,
        language: locale
    }, initServiceData)

    const servicesDetail = initServiceData.result.data
    const listService = data.listservice


    const totalPage = services.result?.totalpage


    useEffect(() => {
        pagination(".news-item", 12, active);
        setstate(getPagination(totalPage, 12));
    }, [active]);

    useEffect(() => {
        refetch()
    }, [active])

    return (
        <>
            <Seo title="ProSkills39 - Service"
                description={servicesDetail.categoriesname}
                url={routes.service.servicelist(servicesDetail.categoriesslug)}
                image_url={servicesDetail.image} />
            {/* <ServicePagination service={servicesDetail} /> */}


            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text"> {servicesDetail.categoriesname}</span>
                    </h2>
                </div>
                {(listService.length > 0) ?
                    <>
                        <div className="news-feed grid-3-columns">
                            {listService.map((service: Service) => (
                                <div className="news-item" key={service.id}>
                                    <div className="news-thumb" >
                                        {" "}
                                        <Link href={`/categories/services/servicedetail/${service.slug}`} >
                                            <Image
                                                src={service.overviews.files[0].url}
                                                alt={service.overviews.files[0].filename}
                                                width={324}
                                                height={200}
                                            />
                                        </Link>{" "}
                                    </div>
                                    <div className="news-content" >
                                        <div className="news-meta">
                                            by{" "}
                                            <Link href="/08-profile-page">
                                                {service.sellerInfor.fullname}
                                            </Link>
                                            <span>, {service.create_at.toString()}</span>
                                            <div className="news-title h6">
                                                {" "}
                                                <Link href="/14-blog-post-centered">
                                                    {service.overviews.introduce}
                                                </Link>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination-section flex-center">
                            <ul className="pagination-list">
                                <li className="page-item page-nav-prev">
                                    <a
                                        href="#"
                                        className="muted3-color"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActive(active === 1 ? 1 : active - 1);
                                        }}
                                    >
                                        Prev
                                    </a>
                                </li>
                                {state &&
                                    state.map((s, i) => (
                                        <li key={i} className={`page-item ${active === s ? "active" : ""}`}>
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setActive(s);
                                                }}
                                            >
                                                {s}
                                            </a>
                                        </li>
                                    ))}
                                <li className="page-item page-nav-next">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActive(active === state.length ? state.length : active + 1);
                                        }}
                                        className="page-item page-nav-next"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                    :
                    <>
                        <div className="call-to-action-box">
                            <div className="animated-img" />
                            <div className="call-to-action-text">
                                <div className="subtitle">Let start become to seller to come up your ideal</div>
                                <div className="h2">This categories have no service.</div>
                            </div>
                        </div>
                    </>
                }



            </div>
        </>
    )
}
ServicesPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default ServicesPage