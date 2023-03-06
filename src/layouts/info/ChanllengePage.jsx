import Chanllengelnfo from './Chanllenge/Chanllengelnfo';
import ChanllengeMedia from './Chanllenge/ChanllengeMedia';
import ChanllengeMeta from './Chanllenge/ChanllengeMeta';
import ProposalList from './Proposal/ProposalList';


const ChanllengePage = ({ data }) => {
  const chanllenge = data.result.data

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
            <h1>{chanllenge.challengeName}</h1>
          </div>
          <div className="favourite-section">
            <div className="product-fav-counter">
              <svg className="crumina-icon">
                <use xlinkHref="#heart-icon" />
              </svg>
              <span className="count">{chanllenge.voteCount}</span>
            </div>
          </div>
        </div>
        
        <div className="product-main-info">
          <Chanllengelnfo data={chanllenge} />
          <ChanllengeMedia data={chanllenge} />
          <ChanllengeMeta data={chanllenge} />
        </div>
        <ProposalList data={chanllenge} />
      </div>
    </div>
  );
};
export default ChanllengePage;
