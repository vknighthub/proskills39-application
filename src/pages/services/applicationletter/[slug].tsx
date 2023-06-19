import Layout from '@/layouts/_layout';
import { ApplyLetterInput, DealProjectInput, NextPageWithLayout, ServiceDealResponse } from '@/types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import invariant from 'tiny-invariant';
import { Editor } from '@tinymce/tinymce-react';
import { useMutation, useQuery } from 'react-query';
import client from '@/data/client';
import { useEffect, useState } from 'react';
import image_deal from '@/assets/images/service/deal.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler } from 'react-hook-form/dist/types';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';


export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params!
    return {
        props: {
            service: slug,
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const ApplicationLetter: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ service }) => {

    const router = useRouter()
    const Service = (serviceid: string) => {

        const { data, error, refetch } = useQuery<ServiceDealResponse, Error>(
            ['service-deal'],
            () => client.services.deal({ slug: serviceid }),
        )
        return {
            service_deal: data?.result.data,
            error,
            refetch
        }
    }

    const [value, setValue] = useState('');


    const { service_deal, refetch } = Service(service)

    useEffect(() => {
        refetch()
    }, [service])


    const dealprojectValidationSchema = yup.object().shape({
        price: yup.string().required(),
        duedt: yup.date().required(),
    });



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ApplyLetterInput>({
        resolver: yupResolver(dealprojectValidationSchema)
    });


    const { mutate: SubmitLetter } = useMutation(client.services.applyletter, {
        onSuccess: (data) => {
            if (data.errorcode === 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    color: 'green',
                    title: 'Apply Letter',
                    text: 'Thank your apply letter. Please going to admin web page to management project',
                }).then((response) => {
                    if (response) {
                        router.push('/')
                    }
                })
            }

        },
        onError: (errorAsUnknown) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                color: 'red',
                title: 'Oops...',
                text: `${'Error: ' + errorAsUnknown}`,
            })

        }
    });

    const onSubmit: SubmitHandler<ApplyLetterInput> = (data) => {

        const dataSubmit = {
            serviceid: service_deal?.id,
            descriptions: value,
            price: data.price,
            duedt: data.duedt
        }
        SubmitLetter(dataSubmit)
    };

    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(true)
    }, [render])

    return (
        <div className="primary-content-area container content-padding shopping-cart-page">
            <div className="page-title-section">
                <h2>
                    Application <span className="gradient-text">letter</span>
                </h2>
            </div>
            <div className="checkout-area">
                <form className="cryptoki-form grid-columns" id="checkout-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-column">
                        <div className="summary-section">
                            <div className="small-title">Summary</div>
                            <div className="products-in-cart">
                                <div className="product-in-cart">
                                    <div className="product-info">
                                        <div className="product-thumb">
                                            <Image src={service_deal?.listfile[0]?.link ? service_deal.listfile[0].link : image_deal} alt="" width={82} height={50} />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                {parse(service_deal?.descriptions ? service_deal?.descriptions : '-')}
                                            </div>
                                            <div className="license-type">Regular License</div>
                                        </div>
                                    </div>
                                    <div className="product-price">v2p {service_deal?.price}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="form-column">

                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="name">Price Deal?</label>
                                <input type="text" id="price" defaultValue={service_deal?.price} {...register('price')} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="duedt">Delivery time</label>
                                <input type="date" id="duedt" {...register('duedt')} />
                            </div>
                        </div>


                    </div>

                    <div className="form-column">
                        <div className="form-field">
                            <label htmlFor="state">Application letter</label>
                        </div>
                        {render &&
                            <Editor
                                apiKey="zymq2zigjpp216t3ih6tzj3rbtceqfwg169r6laxs2z6enbg"
                                init={{
                                    height: 600,
                                    menubar: true,
                                    plugins: [
                                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'table', 'help', 'wordcount',
                                    ],
                                    toolbar:
                                        "undo redo | formatselect | code |link | image | bold italic backcolor | alignleft aligncenter alignright alignjustify |  \n" +
                                        "bullist numlist outdent indent | removeformat | help | link image media table mergetags",
                                    content_style: 'body { color: #7e7e7e }'
                                }}
                                onEditorChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        }
                    </div>
                    <div className="complete-order-button text-center">
                        <button
                            className="btn btn-wide gradient-background mt-5 w-200"
                            type="submit"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
ApplicationLetter.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async (
    {
        locales,
    }
) => {
    invariant(locales, 'locales is not defined');
    return { paths: [], fallback: 'blocking' };
};


export default ApplicationLetter