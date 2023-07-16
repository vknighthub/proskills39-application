import React, { useState } from "react";
import { Accordion } from 'react-bootstrap'
import parse from 'html-react-parser'

const SupportBuyingFAQs = () => {

    const [activeFaq, setActiveFaq] = useState("1st");
    const onClick = (value) =>
        activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
        classNameChange = (value) => (value === activeFaq ? "" : "show");

    const data = [
        {
            id: 1,
            order: 1,
            question: '1. Làm cách nào tôi có thể nâng cao tính chuyên nghiệp và phát triển hơn nữa sự nghiệp làm việc tự do của mình?',
            anwser: `
            <ul>
                <li>Điều này có thể đạt được với ProSkills39 academy, một nền tảng video trực tuyến, theo yêu cầu, được thiết kế đặc biệt cho những người làm việc tự do và các chuyên gia.</li>
                <li>Tất cả các lớp học được giảng dạy bởi các chuyên gia hàng đầu, những người được phân biệt trong các lĩnh vực tương ứng của họ.</li>
                <li>Các khóa học này chứa kiến ​​thức thực tế và toàn diện, bài tập, mini game và bài kiểm tra.</li>
                <li>Bằng cách tham gia một khóa học, bạn sẽ nâng cao kỹ năng của mình và phát triển chuyên nghiệp. Và bằng cách vượt qua thành công bài kiểm tra cuối cùng của khóa học, một huy hiệu sẽ được thêm vào hồ sơ của bạn (thể hiện những kỹ năng bạn vừa học được trên ProSkills39).
                </li>
            </ul>
            `
        },
        {
            id: 2,
            order: 2,
            question: '2.  Bạn có muốn biết cách phát triển sự nghiệp của mình với tư cách là một người làm việc tự do trực tuyến và mang lại trải nghiệm vượt trội cho mọi khách hàng không?',
            anwser: `
            <ul>
                <li>Không có gì bí mật khi công việc tự do trực tuyến đang trao quyền cho hàng triệu người phát triển sự nghiệp, kiểm soát lịch trình của họ và trải nghiệm chất lượng cuộc sống đang dần được cải thiện.                </li>
                <li>ProSkills39 đang dẫn đường cho rất nhiều Freelancer tự do tài năng và thích sự trải nghiệm, và đây mới chỉ là bước khởi đầu.</li>
                <li>
                    <ul>
                        <li style="margin-left: 15px">Đó là lý do tại sao khóa học này nên là lựa chọn số một của bạn khi phát triển doanh nghiệp của mình trên Proskills39.</li>
                    </ul>
                </li>
                <li>Khóa học này dựa trên kinh nghiệm của các chuyên gia hàng đầu, những người được phân biệt trong các lĩnh vực tương ứng của họ, cũng như sự hiểu biết sâu sắc về thị trường và tất cả các công cụ có sẵn cho bạn trên nền tảng.                </li>
                <li>Tìm hiểu cách thức hoạt động của ProSkills39, cách tạo gói Dịch vụ của bạn đúng cách (với các mô tả và hình ảnh Dịch vụ hấp dẫn), chuyển đổi khách hàng tiềm năng, quản lý và phân phối dự án thành công, v.v trên ProSkills39.com nhé?</li>
            </ul>
            `
        },
        {
            id: 3,
            order: 3,
            question: '3. Làm thế nào để xác định giá cho sản phẩm của tôi trên Proskill39?',
            anwser: `
            <ul>
                <li>Khi đăng sản phẩm, bạn sẽ được yêu cầu cung cấp giá cho sản phẩm của mình. Bạn có thể xem xét các yếu tố như giá thành, chi phí vận chuyển, cạnh tranh và lợi nhuận mong muốn để xác định mức giá phù hợp.</li>
            </ul>
            `
        },
        {
            id: 4,
            order: 4,
            question: '4. Làm thế nào để quảng bá sản phẩm và thu hút khách hàng trên Proskill39?',
            anwser: `
            <ul>
                <li>Proskill39 cung cấp các công cụ và tính năng để quảng bá sản phẩm của bạn. Bạn có thể tận dụng các tính năng quảng cáo, khuyến mãi, đánh giá sản phẩm, và tương tác với khách hàng để tạo sự quan tâm và tăng khả năng thu hút khách hàng.</li>
            </ul>
            `
        },
        {
            id: 5,
            order: 5,
            question: '5. Làm thế nào để xử lý đơn hàng và giao hàng cho khách hàng trên Proskill39?',
            anwser: `
            <ul>
                <li>Khi bạn nhận được đơn hàng từ khách hàng, bạn cần xử lý đơn hàng đúng hẹn và gửi hàng cho khách hàng theo phương thức vận chuyển được thỏa thuận. Proskill39 có thể cung cấp hướng dẫn chi tiết về quy trình xử lý đơn hàng và giao hàng.</li>
            </ul>
            `
        },
        {
            id: 6,
            order: 6,
            question: '6. Làm thế nào để quản lý đơn hàng và thanh toán trên Proskill39?',
            anwser: `
            <ul>
                <li>Proskill39 cung cấp một hệ thống quản lý đơn hàng và thanh toán tích hợp. Bạn có thể theo dõi đơn hàng, xác nhận thanh toán và quản lý tình trạng giao dịch thông qua tài khoản người bán của mình. Thông thường, Proskill39 sẽ giữ một phần tiền thanh toán từ khách hàng và chuyển tiền cho bạn sau khi đơn hàng được hoàn thành.</li>
            </ul>
            `
        },
        {
            id: 7,
            order: 7,
            question: '7. Làm thế nào để xử lý trường hợp đổi trả hoặc hoàn tiền trên Proskill39?',
            anwser: `
            <ul>
                <li>Trong trường hợp khách hàng yêu cầu đổi trả hoặc hoàn tiền, bạn cần tuân thủ chính sách đổi trả và hoàn tiền của Proskill39. Thông thường, bạn và khách hàng sẽ thỏa thuận về điều khoản đổi trả hoặc hoàn tiền trước khi thực hiện giao dịch. Proskill39 cũng cung cấp hỗ trợ và giải quyết tranh chấp trong trường hợp cần thiết.</li>
            </ul>
            `
        },
        {
            id: 8,
            order: 8,
            question: '8. Làm thế nào để tăng khả năng bán gói dịch vụ thành công trên Proskill39?',
            anwser: `
            <ul>
                <li>Để tăng khả năng bán dịch vụ thành công trên Proskill39, bạn có thể thực hiện các biện pháp sau:</li>
                <ul>
                    <li style:"margin-left:15px">
                        Tạo mô tả gói dịch vụ hấp dẫn và chất lượng, đi kèm với hình ảnh chất lượng cao.
                    </li>
                    <li style:"margin-left:15px">
                        Xác định một mức giá cạnh tranh và hấp dẫn cho dịch vụ của bạn.
                    </li>
                    <li style:"margin-left:15px">
                        Tạo mối quan hệ tốt với khách hàng bằng cách cung cấp dịch vụ chăm sóc khách hàng tốt và tương tác tích cực với họ.
                    </li>
                    <li style:"margin-left:15px">
                        Theo dõi các xu hướng và nhu cầu của thị trường để cung cấp những sản phẩm dịch vụ phù hợp.
                    </li>
                </ul>
            </ul>
            `
        }
    ]

    return (
        <div className="primary-content-area section-medium content-padding">
            <div className="page-title text-center">
                <h2>
                    <span className="gradient-text">Câu hỏi thường gặp</span>
                </h2>
            </div>
            <Accordion defaultActiveKey={activeFaq} className="accordion">
                {data && data && data.map((faq) => (
                    <div className="accordion-card" key={faq.id}>
                        <div className="card-header">
                            <Accordion.Toggle
                                onClick={() => onClick(faq.order)}
                                as={"div"}
                                eventKey={faq.order}
                                className="card-button"
                            >
                                <div className="card-title">
                                    {faq.question}
                                </div>
                                <div className="icon-box">
                                    <svg
                                        className={`crumina-icon plus-icon ${classNameChange(
                                            faq.order
                                        )}`}
                                    >
                                        <use xlinkHref="#minus-icon" />
                                    </svg>
                                    <svg className="crumina-icon minus-icon">
                                        <use xlinkHref="#minus-icon" />
                                    </svg>
                                </div>
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey={faq.order} className="card-body">
                            <div className="card-info">
                                {parse(faq.anwser)}
                            </div>
                        </Accordion.Collapse>
                    </div>
                ))}
            </Accordion>
        </div>
    );
};
export default SupportBuyingFAQs;
