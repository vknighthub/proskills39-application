import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const StartSelling: NextPageWithLayout = () => {
    return (
        <>
            <Seo
                title="ProSkills39 - How to start selling on ProSkills39"
                description="Whether you're a graphic designer, programmer, content writer, translator, or voice-over artist, Proskills39 is the place for you.
                Below, you can find great tips to start selling on Proskills39."
                url={routes.how_to_start_sellings_page}
                image_url='https://api.proskills39.com/system/logo/logo-seo.png'
            />
            <div className="primary-content-area  background-content">
                <div className="container content-padding">

                    <div className="main-content-area">
                        <div className="page-title">
                            <h2 className='text-center'>
                                How to start selling on <span className="gradient-text">Proskills39</span>
                            </h2>
                        </div>


                        <div className="page-title section-padding">
                            <h4>
                                Bắt đầu công việc tự do trên ProSkills39
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
                                Cách tạo hồ sơ freelancers trên ProSkills39
                            </h4>
                            <span className='fs-6'>
                                Hãy xem hồ sơ của bạn như là một phần mô tả năng lực và kinh nghiệm bản thân trên ProSkills39. Tận dụng cơ hội tuyệt vời này để tạo hồ sơ của mình trên ProSkills39! Với nền tảng uy tín và đa dạng các công việc, ProSkills39 giúp bạn thể hiện khả năng làm việc chuyên nghiệp và thu hút nhiều nhà tuyển dụng.
                            </span>
                            <br />
                            <span className='fs-6'>When you create your Gig, you&apos;ll have the opportunity to show off your talents, and provide buyers with all the information they could need to help them decide to do business with you.</span>
                            <p className='text-center'>
                                <>
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
                                            src="https://www.canva.com/design/DAFofn1R8vU/view?embed"
                                            allowFullScreen={true}
                                            allow="fullscreen"
                                        ></iframe>
                                    </div>
                                </>

                            </p>
                        </div>

                        <div className="page-title section-padding">
                            <h4>
                                Cách kết nối ví
                            </h4>
                            <span className='fs-6'>
                                Kết nối ví Nami, Eternl, Flint và Lace với ProSkills39 giúp bạn dễ dàng quản lý giao dịch tài chính và thuận tiện trong quá trình làm việc freelancer. Bạn chỉ cần làm theo các bước sau để kết nối các tài khoản của mình:
                            </span>
                            <br />
                            <p className='text-center'>
                                <>
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
                                        {" "}
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
                                            src="https://www.canva.com/design/DAFoeG_QpNk/view?embed"
                                            allowFullScreen={true}
                                            allow="fullscreen"
                                        >
                                            {" "}
                                        </iframe>
                                    </div>
                                </>

                            </p>
                        </div>

                        <div className="page-title section-padding">
                            <h3>
                                Cách tạo dịch vụ trên ProSkills39
                            </h3>
                            <span className="fs-6">
                                Proskills39 là một nền tảng trực tuyến tuyệt vời cho phép bạn tạo ra các dịch vụ chất lượng và chia sẻ kiến thức của mình với mọi người trên toàn thế giới. Với Proskills39, bạn có thể tạo ra và quảng bá các dịch vụ của mình một cách dễ dàng và thuận tiện.
                                Để tạo một gói dịch vụ trên ProSkill39, hãy thực hiện theo các bước sau đây:
                            </span>
                            <ul>
                                <li>
                                    Bước 1: Đăng nhập vào tài khoản ProSkill39 của bạn.
                                </li>
                                <li>Bước 2: Kích vào Avatar ở góc phải màn hình.</li>
                                <li>Bước 3: Tiếp tục bằng việc đăng nhập vào phần Ecommerce.</li>
                                <li>Bước 4: Chọn tùy chọn &quot;Trở thành người bán&quot; (Become a seller).</li>
                                <li>Bước 5: Kích vào avatar của bạn một lần nữa, sau đó chọn &quot;switch to seller&quot;.</li>
                                <li>Bước 6: Đăng một tương tác, nghĩa là tạo một dịch vụ mới.</li>
                                <li>Bước 7: Điền và lưu thông tin về dịch vụ mà bạn muốn cung cấp.</li>
                            </ul>
                            <span className='fs-6'>
                                Vậy là bạn đã hoàn thành việc tạo gói dịch vụ trên ProSkill39 rồi đó. Chúc bạn thành công và có nhiều giao dịch trên ProSkill39!
                            </span>
                            <p className='text-center'>
                                <>
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
                                            src="https://www.canva.com/design/DAFohiBgkCk/view?embed"
                                            allowFullScreen={true}
                                            allow="fullscreen"
                                        ></iframe>
                                    </div>

                                </>

                            </p>
                        </div>

                        <div className="page-title section-padding">
                            <h3>
                                Tạo nhiều sự lựa chọn cho khách hàng
                            </h3>
                            <span className="fs-6">
                                Tạo nhiều sự lựa chọn cho khách hàng thông qua việc cung cấp ba gói dịch vụ khác nhau để bán trên các gói dịch vụ của mình. Đó là một cách tuyệt vời để cung cấp cho người mua của bạn nhiều sự lựa chọn hơn và giúp đẩy giá trị đơn hàng của bạn lên cao hơn! Và để làm được điều này, bạn cần:
                            </span>
                            <ul>
                                <li>
                                    Bước 1: Xác định 3 gói dịch vụ: Bạn có thể chọn để tạo các gói dịch vụ cơ bản, tiêu chuẩn, và cao cấp. Mỗi gói nên bao gồm một số lượng dịch vụ cụ thể và giá của từng gói nên phản ánh giá trị mà bạn cung cấp.
                                </li>
                                <li>Bước 2: Mô tả chi tiết cho từng gói: Rõ ràng mô tả những gì bạn cung cấp trong mỗi gói. Hãy cung cấp chi tiết càng nhiều càng tốt để khách hàng hiểu rõ họ sẽ nhận được gì từ mỗi gói.</li>
                                <li>Bước 3: Đặt giá cho từng gói: Đặt giá cho từng gói dịch vụ. Giá cả nên phản ánh giá trị mà mỗi gói cung cấp. Hãy nhớ rằng giá cả cao hơn không chỉ giúp bạn kiếm được nhiều tiền hơn, mà còn cho thấy giá trị mà bạn đặt ra cho công việc của mình.</li>

                            </ul>
                            <span className='fs-6'>
                                <>
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
                                            src="https://www.canva.com/design/DAFolwhyQ0g/view?embed"
                                            allowFullScreen={true}
                                            allow="fullscreen"
                                        ></iframe>
                                    </div>
                                </>

                            </span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}
StartSelling.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default StartSelling