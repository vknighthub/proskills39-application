import { format } from 'currency-formatter';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const ProposalDetailnfo = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link href={data.proposalLink} target="_blank">
        <div className="page-title-section">
          <h1>{data.proposalName}</h1>
        </div>
      </Link>
      <div className="avatar-block">
        <div className="avatar box-42">
          <Image src={data.proposerInfor.avatar} alt={data.proposerInfor.username} width={30} height={30} />
          <span className="verified">
            <svg className="crumina-icon">
              <use xlinkHref="#check-icon" />
            </svg>
          </span>
        </div>
        <div className="avatar-meta">
          <div className="avatar-title">
            <span className="gradient-text">
              {data.proposerInfor.name}
            </span>
          </div>
          <div className="avatar-meta">@{data.proposerInfor.username}</div>
        </div>
      </div>
      <div className="product-meta-section">
        <div className="product-meta-item">
          <div className="label">Current Proposal</div>
          <div className="value">{format(data.bugetProposal, { code: 'USD' })}</div>
        </div>
      </div>
      <div className="product-description">
        <div className="small-title">Description</div>
        {parse(data.descriptionDetail)}
      </div>

      <div className="product-description">
        <div className="small-title">Summary proposal</div>
        {data.summaryProposal}
      </div>

      <div className="bidding-section">

        <div className="product-fav-counter">
          <svg className="crumina-icon">
            <use xlinkHref="#heart-icon" />
          </svg>
          <span className="count">{data.voteCount}</span>
        </div>


      </div>
    </>
  );
};
export default ProposalDetailnfo;
