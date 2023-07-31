import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { NextPageWithLayout, PopolarCategory } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import buying from '@/assets/images/buybing.png'
import Image from 'next/image';
import SupportBuyingFAQs from '@/layouts/info/support/SupportBuyingFAQs'
import { FetchTopCategories } from '@/data/categories';
import Link from 'next/link';



export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const StartBuying: NextPageWithLayout = () => {

    const { data } = FetchTopCategories({
        language: 'en'
    })

    console.log(data)

    return (
        <>
            <Seo
                title="ProSkills39 - How to start buying on Proskills39"
                description="Whether you're a graphic designer, programmer, content writer, translator, or voice-over artist, Proskills39 is the place for you.
                Below, you can find great tips to start selling on Proskills39."
                url={routes.how_to_start_buying_page}
                image_url='https://api.proskills39.com/system/logo/logo-seo.png'
            />
            <div className="primary-content-area  background-content">
                <div className="container content-padding">

                    <div className="main-content-area">
                        <div className="page-title">
                            <h2 className='text-center'>
                                How to start buying on <span className="gradient-text">ProSkills39</span>
                            </h2>
                        </div>


                        <div className="page-title section-padding">
                            <h4>
                                Giới thiệu ProSkills39
                            </h4>
                            <p className='fs-6'>
                                Proskills39 là thị trường kết nối dịch vụ (service marketplace)  đầu tiên dùng  nền tảng web 3.0.
                            </p>
                            <p className='fs-6'>
                                Kết nối và chia sẻ kỹ năng của bạn với cộng đồng - dễ dàng tăng thêm thu nhập.
                                Không giới hạn ngành nghề từ thiết kế đồ hoạ, lập trình viên, kế toán viên cho đến những ngành nổi tiếng như blockchain và công nghệ tiên tiến khác, tất cả đều có ở Proskills39.
                            </p>
                            <p className='text-center'>
                                <iframe
                                    src="https://drive.google.com/file/d/1vkOb3-2j52rrzWIDhrbi_f3mlgPai9Ss/preview"
                                    width="980"
                                    height="480" allow="autoplay"
                                >
                                </iframe>
                            </p>
                        </div>

                        <div className="page-title section-padding">
                            <h4>
                                3 Bước đặt dịch vụ có sẵn trên Proskills39
                            </h4>
                            <span className='fs-6'>
                                Bạn đang tìm kiếm dịch vụ phù hợp cho dự án của mình. Tại Proskills39 bạn sẽ rút ngắn được thời gian tìm kiếm và đặt dịch vụ nhưng vẫn đảm bảo chất lượng tuyệt đối.
                            </span>
                            <br />
                            <span className='fs-6'>When you create your Gig, you&apos;ll have the opportunity to show off your talents, and provide buyers with all the information they could need to help them decide to do business with you.</span>
                            <p className='text-center'>
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: 0,
                                        paddingTop: "56.2500%",
                                        paddingBottom: 0,
                                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                                        marginTop: "1.6em",
                                        marginBottom: "0.9em",
                                        overflow: "hidden",
                                        borderRadius: 8,
                                        willChange: "transform"
                                    }}
                                >
                                    <iframe
                                        loading="lazy"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            top: 0,
                                            left: 0,
                                            border: "none",
                                            padding: 0,
                                            margin: 0
                                        }}
                                        src="https://www.canva.com/design/DAFofCXluVg/view?embed"
                                        allowFullScreen={true}
                                        allow="fullscreen"
                                    ></iframe>
                                </div>

                            </p>
                            <h4>
                                Mẹo đặt hàng trên ProSkills39
                            </h4>
                            <br />
                            <span className='fs-6'> Cùng tham khảo 3 mẹo sau để đặt dịch vụ một cách dễ dàng và trở thành nhà tuyển dụng thông thái nhé </span>
                            <Image src={buying} alt="buying" />
                        </div>

                        <div className="page-title section-padding">
                            <h4>
                                Dịch vụ được đặt nhiều nhất
                            </h4>
                            <span className='fs-6'>
                                Lấy cảm hứng từ các danh mục được yêu cầu nhiều nhất của chúng tôi
                            </span>
                            <br />
                            <div className="latest-news-box grid-3-columns">
                                {data && data.map((explore: PopolarCategory, index: number) => (
                                    <div className="component-categories-explore" key={explore.id}>
                                        <Image className="vector" alt="Vector" src={explore.image} width={337} height={310} />
                                        <Link
                                className={`item-1`}
                                href={`/categories/services/${explore.slug}`}
                                rel="noopener noreferrer" target="_blank"
                                key={explore.id}>
                                {explore.name}
                            </Link>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <SupportBuyingFAQs />

                    </div>
                </div>
            </div >
        </>
    )
}
StartBuying.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartBuying