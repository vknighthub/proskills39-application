import { format } from 'currency-formatter';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import impact from '@/assets/images/content/impact.jpg';
import feasibility from '@/assets/images/content/feasibility.jpg';
import audit from '@/assets/images/content/audit.jpg';
import Rating from './../../../utils/get-star';

const ProposalDetailnfo = ({ proposal, assessment }) => {
  return (
    <>
      <Link href={proposal.proposalLink} target="_blank">
        <div className="page-title-section">
          <h1>{proposal.proposalName}</h1>
        </div>
      </Link>
      <div className="avatar-block">
        <div className="avatar box-42">
          <Image src={proposal.proposerInfor.avatar} alt={proposal.proposerInfor.username} width={30} height={30} />
          <span className="verified">
            <svg className="crumina-icon">
              <use xlinkHref="#check-icon" />
            </svg>
          </span>
        </div>
        <div className="avatar-meta">
          <div className="avatar-title">
            <span className="gradient-text">
              {proposal.proposerInfor.name}
            </span>
          </div>
          <div className="avatar-meta">@{proposal.proposerInfor.username}</div>
        </div>
      </div>
      <div className="product-meta-section">
        <div className="product-meta-item">
          <div className="label">Current Proposal</div>
          <div className="value">{format(proposal.bugetProposal, { code: 'USD' })}</div>
        </div>
      </div>
      <div className="product-description">
        <div className="small-title">Description</div>
        {parse(proposal.descriptionDetail)}
      </div>

      <div className="product-description">
        <div className="small-title">Summary proposal</div>
        {proposal.summaryProposal}
      </div>

      <div className="bidding-section">
        <div className="product-fav-counter">
          <svg className="crumina-icon">
            <use xlinkHref="#heart-icon" />
          </svg>
          <span className="count">{proposal.voteCount}</span>
        </div>
      </div>


      <div className="widget-title h3">Proposal Assessor Reviews</div>
      <Rating rating={assessment.ratingAvg}/>
      <div className="activity-item bid">
        <div className="bid-placer">
          <div className="bid-info">
            <div className="bid-title">
              <span className="gradient-text">
                Impact &nbsp; &nbsp; &nbsp;
              </span>
            </div>
          </div>
        </div>
        <Rating rating={assessment.ratingImpAvg}/>
      </div>
      <div className="activity-item bid">
        <div className="bid-placer">
          <div className="bid-info">
            <div className="bid-title">
              <span className="gradient-text">
                Feasibility &nbsp;
              </span>
            </div>
          </div>
        </div>
        <Rating rating={assessment.ratingFeaAvg}/>
      </div>

      <div className="activity-item bid">
        <div className="bid-placer">
          <div className="bid-info">
            <div className="bid-title">
              <span className="gradient-text">
                Auditability
              </span>
            </div>
          </div>
        </div>
        <Rating rating={assessment.ratingAuditAvg}/>
      </div>


      {assessment.assessmentDetail.map((assessmentDtl) => (
        <div className="widget-2 recent-posts-widget" key={assessmentDtl.assessmentId}>

            <div className="widget-body mt-5" >
              <div className="recent-posts-widget-item">
                <div className="recent-posts-widget-item-img">
                  <Image src={impact} alt="Impact"/> 
                </div>
                <div className="recent-posts-widget-item-info">
                  <div className="recent-posts-widget-item-tags">
                    <a className="tag-item gradient-text" href="#" >
                      Impact / Alignment
                    </a>
                  </div>
                  <div className="recent-posts-widget-item-title">
                    {assessmentDtl.impactTitle}
                  </div>
                  <div className="recent-posts-widget-item-meta">
                    {assessmentDtl.impactAssessment}
                  </div>
                  <div className="thumb-box">
                    <Rating rating={assessmentDtl.impactRating}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget-body mt-5" >
              <div className="recent-posts-widget-item">
                <div className="recent-posts-widget-item-img">
                  <Image src={feasibility} alt="Impact"/> 
                </div>
                <div className="recent-posts-widget-item-info">
                  <div className="recent-posts-widget-item-tags">
                    <a className="tag-item gradient-text" href="#" >
                      Feasibility
                    </a>
                  </div>
                  <div className="recent-posts-widget-item-title">
                    {assessmentDtl.feaTitle}
                  </div>
                  <div className="recent-posts-widget-item-meta">
                    {assessmentDtl.feaAssessment}
                  </div>
                  <div className="thumb-box">
                    <Rating rating={assessmentDtl.feaRating}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget-body mt-5" >
              <div className="recent-posts-widget-item">
                <div className="recent-posts-widget-item-img">
                  <Image src={audit} alt="Impact"/> 
                </div>
                <div className="recent-posts-widget-item-info">
                  <div className="recent-posts-widget-item-tags">
                    <a className="tag-item gradient-text" href="#" >
                      Audit
                    </a>
                  </div>
                  <div className="recent-posts-widget-item-title">
                    {assessmentDtl.auditTitle}
                  </div>
                  <div className="recent-posts-widget-item-meta">
                    {assessmentDtl.auditAssessment}
                  </div>
                  <div className="thumb-box">
                    <Rating rating={assessmentDtl.audittRating}/>
                  </div>
                </div>
              </div>
            </div>

        </div>
      ))}
    </>
  );
};
export default ProposalDetailnfo;
