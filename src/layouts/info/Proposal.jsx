import ProposalInfo from './Proposal/Proposalnfo'
import ProposalMedia from './Proposal/ProposalMedia'
import ProposalMeta from './Proposal/ProposalMeta'
import ProposalDetail from './Proposal/ProposalDetail'


const Proposal = ({ data }) => {

  const proposal = data.result.data

  return (
    <div className="primary-content-area container content-padding">
      <div className="product-page product-version-3">
        {/*  PRODUCT HEADER AREA */}
        <div className="page-title-section">
          <div className="social-share-box">
            <div className="share-icons">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#link-icon" />
                </svg>
              </a>{" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>{" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>{" "}
              <a href="">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>{" "}
            </div>
          </div>
          <div className="product-title">
            <h1>{proposal[0].challengeName}</h1>
          </div>
          <div className="favourite-section">
            <div className="product-fav-counter">
              <svg className="crumina-icon">
                <use xlinkHref="#heart-icon" />
              </svg>
              <span className="count">105</span>
            </div>
            <div className="more-link">
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#dots-icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>



        <div className="product-main-info">
          <ProposalInfo data={proposal} />
          <ProposalMedia data={proposal} />
          <ProposalMeta data={proposal} />
        </div>


        <ProposalDetail data={proposal} />



      </div>
    </div>
  );
};
export default Proposal;
