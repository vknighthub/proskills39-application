import routes from '@/config/routes';
import { FetchServiceByCatalogSlug } from '@/data/categories';
import client from '@/data/client';
import Layout from '@/layouts/_layout';
import Seo from '@/layouts/_seo';
import { Mostpopularseller, NextPageWithLayout, SellerInfor, Service, ServicePaginator } from '@/types';
import { getPagination, pagination } from '@/utils/util';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import invariant from 'tiny-invariant';
import { Swiper, SwiperSlide } from "swiper/react";
import { categoriesBar } from '@/components/styles/sliderProps';
import NiceSelect from '@/components/styles/NiceSelect';


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

    const [creator, setCreator] = useState('')

    const [filter, setFilter] = useState({
        industry: undefined,
        frbudget: undefined,
        tobudget: undefined,
        deliverytime: undefined
    })

    const { data, refetch, totalpage } = FetchServiceByCatalogSlug({
        page: active,
        limit: 12,
        slug: servicesSlug,
        language: locale,
        seller: creator,
        industry: filter.industry,
        frbudget: filter.frbudget,
        tobudget: filter.tobudget,
        deliverytime: filter.deliverytime

    }, initServiceData)

    const servicesDetail = initServiceData.result.data
    const listService = data.listservice

    const totalPage = totalpage

    useEffect(() => {
        pagination(".news-item", 12, active);
        setstate(getPagination(totalPage, 12));
    }, [active, creator, totalPage]);

    useEffect(() => {
        refetch()
    }, [active, creator, totalPage])

    const filterCatagory_ = (value: string) => {
        setCreator(value)
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        refetch()
    };

    const onChange = (name: any, value: any) => {
        setFilter({ ...filter, [name]: value });
    };

    const onChangeFilterIndustry = (name: any, value: any) => {
        setFilter({ ...filter, [name]: value });
    }
    const onChangeFilterBugetFrom = (name: any, value: any) => {
        setFilter({ ...filter, [name]: value });
    }
    const onChangeFilterBugetTo = (name: any, value: any) => {
        setFilter({ ...filter, [name]: value });
    }
    const onChangeFilterDeliveryTime = (name: any, value: any) => {
        setFilter({ ...filter, [name]: value });
    }  

    useEffect(() => {
        refetch()
    }, [filter])

    const listindustry = data.listindustry

    
    return (
        <>
            <Seo title="ProSkills39 - Service"
                description={servicesDetail.categoriesname}
                url={routes.service.servicelist(servicesDetail.categoriesslug)}
                image_url={servicesDetail.image} />


            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>
                        <span className="gradient-text"> {servicesDetail.categoriesname}</span>
                    </h2>
                </div>

                <Swiper {...categoriesBar} className="categories-bar">
                    <div className="categories-nav">
                        <a href="#" className="arrow arrow-left swiper-button-prev">
                            <svg className="crumina-icon">
                                <use xlinkHref="#arrow-left2-icon" />
                            </svg>
                        </a>
                        <a href="#" className="arrow arrow-right swiper-button-next">
                            <svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon" />
                            </svg>
                        </a>
                    </div>
                    <div className="categories-wrapper swiper-wrapper">
                        {data.listsellerpopular.map((item: Mostpopularseller, index: number) => (
                            <SwiperSlide className="category-item swiper-slide" key={index}>
                                <a href="#" onClick={() => filterCatagory_(item.tagName)} >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 16 15"
                                    >
                                        <defs />
                                        <image
                                            width={16}
                                            height={15}
                                            xlinkHref={item.avatar}
                                        />
                                    </svg>
                                    {item.creator}
                                </a>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>


                <div className="filterable-bar">
                    <form id="artworks-filter-form" onSubmit={(e)=>onSubmit(e)}>
                        <div className="filter-item">
                            <NiceSelect
                                arr={listindustry}
                                ChangeFilterData={onChangeFilterIndustry}
                                name={"industry"}
                            />
                        </div>
                        <div className="filter-item">
                            <NiceSelect
                                arr={[
                                    { name: "Buget From", value: "" },
                                    { name: "From 10 v2p", value: "10" },
                                    { name: "From 20 v2p", value: "20" },
                                    { name: "From 50 v2p", value: "50" },
                                ]}
                                ChangeFilterData={onChangeFilterBugetFrom}
                                name={"frbudget"}
                            />
                        </div>
                        <div className="filter-item">
                            <NiceSelect
                                arr={[
                                    { name: "Budget To", value: "" },
                                    { name: "To 100 v2p", value: "100" },
                                    { name: "To 200 v2p", value: "200" },
                                    { name: "To 500 v2p", value: "500" },
                                ]}
                                ChangeFilterData={onChangeFilterBugetTo}
                                name={"tobudget"}
                            />
                        </div>
                        <div className="filter-item">
                            <NiceSelect
                                arr={[
                                    { name: "Delivery time", value: "" },
                                    { name: "Express 24h", value: "1" },
                                    { name: "Up to 3 days", value: "3" },
                                    { name: "Up to 7 days", value: "7" }
                                ]}
                                ChangeFilterData={onChangeFilterDeliveryTime}
                                name={"deliverytime"}
                            />
                        </div>

                        
                    </form>
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
                                            <Link href={`/categories/services/servicedetail/${service.slug}`}>
                                                {service.sellerInfor.fullname}
                                            </Link>
                                            <span>, {service.create_at.toString()}</span>
                                            <div className="news-title h6">
                                                {" "}
                                                <Link href={`/categories/services/servicedetail/${service.slug}`}>
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