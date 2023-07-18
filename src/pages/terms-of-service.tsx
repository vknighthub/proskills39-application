import routes from '@/config/routes';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const TermOfService: NextPageWithLayout = () => {
    return (
        <>
            <Seo
                title="ProSkills39 - Term of service"
                description="Thank you for using our Service Marketplace platform (the &ldquo;Platform&rdquo;).  These terms of service (&ldquo;Terms&rdquo;) govern your access and use of the Platform, including any content, features, functionality, and services provided through or in connection with the Platform."
                url={routes.terms_of_service}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="primary-content-area container content-padding background-content">
                <div className="single-post medium-section">
                    <div className="post-heading">
                        <h2>PROSKILLS39’S TERMS OF SERVICE</h2>
                        <div className="news-meta">
                            <div className="post-author">
                                <p>Thank you for using our Service Marketplace platform (the &ldquo;Platform&rdquo;).  These terms of service (&ldquo;Terms&rdquo;) govern your access and use of the Platform, including any content, features, functionality, and services provided through or in connection with the Platform.
                                </p>
                                <p>By accessing or using the Platform, you agree to be bound by these Terms, our Privacy Policy, and any other policies or guidelines posted on the Platform. If you do not agree with any of these terms, please do not use the Platform.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="post-content">
                        <h4 className="content-heading">1.	Overview</h4>
                        <p>The Platform is a marketplace where users can buy and sell services (&ldquo;Services&rdquo;). The Platform does not provide the Services, but instead acts as a platform for Service Providers to offer their Services to Service Consumers.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">2.	User Accounts</h4>
                        <p>To use the Platform, you must create a user account. You agree to provide accurate, complete, and current information when registering for an account and to update such information promptly if it changes. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or mobile device.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">3.	Children</h4>
                        <p>The Platform is offered and available to users who are at least 18 years of age and of legal age to form a binding contract. If you are under 18 and at least 13 years of age, you are only permitted to use the Platform through an account owned by a parent or legal guardian with their appropriate permission. If you are under 13 you are not permitted to use the Platform or the ProSkills39 services. By using the Platform, you represent and warrant that you meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Platform.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">4.	Services</h4>
                        <p>Service Providers are solely responsible for the quality, delivery, and performance of their Services. Service Consumers are solely responsible for reviewing and selecting Services that meet their needs. The Platform does not endorse, guarantee, or assume any responsibility for any Service or Service Provider.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">5.	Payments</h4>
                        <p>The Service Consumer will pay the service implementation amount to the Service Provider through the deposit and payment feature on our Service Marketplace platform. The service implementation amount will be transferred to the Service Provider after the Service Consumer confirms that the service has been completed and after deducting the Service Marketplace connection fee.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">6.	User Content</h4>
                        <p>Users may post or upload content to the Platform, including but not limited to descriptions of Services, reviews, and feedback. You are solely responsible for the content you post, and you represent and warrant that you have all necessary rights to post such content. The Platform reserves the right to remove any content that violates these Terms or is otherwise inappropriate or objectionable.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">7.	Intellectual Property</h4>
                        <p>The Platform and its content are protected by copyright, trademark, and other laws of Vietnam and foreign countries. You agree not to copy, modify, distribute, or create derivative works based on the Platform or its content without the prior written consent of the Platform.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">8.	Disclaimers</h4>
                        <p>THE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, THE PLATFORM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">9.	Limitation of Liability</h4>
                        <p>IN NO EVENT WILL THE PLATFORM OR ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF THE PLATFORM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">10.	Indemnification</h4>
                        <p>You agree to indemnify, defend, and hold harmless the Platform and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys fees) arising out of or relating to your use of the Platform, your breach of these Terms, or your violation of any law or the rights of a third party.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">11.	Governing Law and Jurisdiction</h4>
                        <p>These Terms shall be governed by and construed in accordance with the laws of Vietnam, without giving effect to any principles of conflicts of law. You agree that any action or proceeding arising out of or relating to these Terms or your use of the Platform shall be filed exclusively in the courts located in Vietnam and you hereby consent and submit to the personal jurisdiction of such courts for the purpose of litigating any such action or proceeding.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">12.	Termination</h4>
                        <p>The Platform may terminate your access to the Platform or suspend or terminate your account at any time, with or without cause, without notice, and without liability to you. Upon termination, you will immediately cease all use of the Platform.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">13.	Confidentiality</h4>
                        <h5 className='content-heading ml-lg-1'>13.1. Confidentiality for Service Consumer and Service Provider</h5>
                        <p>The Service Consumer and Service Provider agree to maintain the confidentiality of all information provided to each other that is marked as confidential or is otherwise identified as confidential at the time of disclosure, or which would reasonably be considered to be confidential under the circumstances (the &ldquo;Confidential Information&rdquo;). Each party agrees not to use or disclose any Confidential Information of the other party except as necessary to perform its obligations under these Terms or as required by law.</p>
                        <p>The obligations of confidentiality set forth in this Section shall survive any termination or expiration of these Terms and shall continue in effect for a period of five (5) years from the date of disclosure of the Confidential Information. Each party shall take reasonable measures to protect the Confidential Information of the other party from unauthorized use, disclosure or dissemination, using at least the same degree of care as it uses to protect its own confidential information of a similar nature.</p>
                        <h5 className='content-heading ml-lg-1'>13.2. Disclosure by Service Provider</h5>
                        <p>Notwithstanding the foregoing, the Service Provider may disclose the Confidential Information of the Service Consumer to the extent necessary to provide the Service, including to its employees, contractors, and professional advisors who have a need to know such information and are bound by obligations of confidentiality at least as restrictive as those set forth in these Terms.</p>
                        <h5 className='content-heading ml-lg-1'>13.3. Disclosure by Service Consumer</h5>
                        <p>Notwithstanding the foregoing, the Service Consumer may disclose the Confidential Information of the Service Provider to the extent necessary to receive the Service, including to its employees, contractors, and professional advisors who have a need to know such information and are bound by obligations of confidentiality at least as restrictive as those set forth in these Terms.</p>
                        <h5 className='content-heading ml-lg-1'>13.4. Exceptions</h5>
                        <p>The obligations of confidentiality set forth in this Section shall not apply to any information that: (a) is or becomes generally available to the public through no fault of the receiving party; (b) was in the possession of the receiving party prior to its disclosure by the disclosing party, without restriction as to use or disclosure; (c) is obtained by the receiving party from a third party without restriction as to use or disclosure; or (d) is independently developed by the receiving party without use of or reference to the disclosing party Confidential Information.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">14.	Languages and Translation</h4>
                        <p>Translations of basic content on the Platform are provided by experienced interpreters and translation software by Amazon or Google. Such translations are provided &ldquo;as is&rdquo; and no warranty of any kind is given for accuracy, reliability, or correctness. User-generated content may not be translated correctly or at all due to translation software limitations. The English version of the Platform is the official text and any discrepancy in translations has no legal effect.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">15.	Changes to these Terms</h4>
                        <p>The Platform reserves the right to modify or update these Terms at any time, without notice, and in its sole discretion. Your continued use of the Platform after any such modifications or updates constitutes your acceptance of such changes.</p>
                    </div>
                    <div className="post-content">
                        <h4 className="content-heading">16.	Miscellaneous</h4>
                        <p>These Terms constitute the entire agreement between you and the Platform with respect to the subject matter hereof and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and the Platform. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. The failure of the Platform to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.</p>
                        <p>The Platform may assign or delegate these Terms, in whole or in part, at any time without notice to you. You may not assign or delegate these Terms or any of your rights or obligations under these Terms without the prior written consent of the Platform. The headings in these Terms are for convenience only and shall not affect the interpretation of these Terms. Any rights not expressly granted herein are reserved by the Platform.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
TermOfService.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default TermOfService