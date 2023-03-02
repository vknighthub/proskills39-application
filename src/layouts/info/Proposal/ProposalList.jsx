import { format } from 'currency-formatter';
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";


const ProposalList = ({ data }) => {
  
  return (
    <div className="related-section container">
      <div className="section-title-wrapper">
      </div>
      <div className="featured-box grid-3-columns">
        {data && data.listProposal && data.listProposal.map((proposal) => (
          <div className="featured-item" key={proposal.proposalId}>
            <Link href={{
              pathname: '/proposals/[proposalId]',
              query: { proposalId: proposal.proposalId },
            }}>
              <div className="featured-item-wrapper">
                <div className="featured-item-content">
                  <div className="fav-counter">
                    <svg className="crumina-icon">
                      <use xlinkHref="#heart-icon" />
                    </svg>
                    <span className="count">{proposal.voteCount}</span>
                  </div>

                  <div className="featured-item-info">
                    <div className="title">
                      {proposal.proposalName}
                    </div>
                    <p style={{ minHeight: "120px" }}>{parse(proposal.descriptionDetail)}</p>
                    <div className="item-meta">
                      <span className="avatar box-26" >
                        <Link href="/08-profile-page">
                          <Image src={proposal.proposerInfor.avatar} alt="" width={30} height={30} />
                        </Link>
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </span>
                      {proposal.contributors.map((contributor) => (
                        <span className="avatar box-26" key={contributor.id}>
                          <Link href="/08-profile-page">
                            <Image src={contributor.avatar} alt="" width={30} height={30} />
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                      ))}
                    </div>
                    <p className="text-success">{proposal.summaryProposal && parse(proposal.summaryProposal)}</p>
                    <span className="gradient-text">Fund:</span> <i>{data.challengeName}</i>
                  </div>
                </div>
                <div className="featured-item-post-content">
                  <div className="featured-item-pricebox">
                    <div className="price-caption">Current Budget</div>
                    <div className="price"> {format(proposal.bugetProposal, { code: 'USD' })}</div>
                  </div>
                  <div className="social-share-box">
                    <div className="social-caption">View proposal in idealscale</div>
                    <div className="share-icons">

                      <Link target="_blank" href={`https://cardano.ideascale.com/c/idea/${proposal.proposalId}`}>
                        <svg className="crumina-icon" style={{ width: '18px', height: '18px' }}>
                          <use xlinkHref="#bell-icon" />
                        </svg>
                      </Link>

                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        ))}
      </div >
    </div >

  );
};
export default ProposalList;
