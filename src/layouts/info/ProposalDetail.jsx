import Link from "next/link";
import ProposalDetailnfo from './ProposalDetails/ProposalDetailnfo'
import ProposalSection from './ProposalDetails/ProposalSection'

const ProposalDetail = ({ data }) => {

  const proposalSection = data.result.data.proposal_infor.fieldSections
  const proposal_general = data.result.data.proposal_infor

  return (
    <div className="product-page product-version-1">
      <div className="product-media">
        <div className="ml-3">
          <ProposalSection proposalSection={proposalSection} />
        </div>
      </div>
      <div className="product-info">
        <div className="product-info-wrapper">
          <ProposalDetailnfo data={proposal_general} />
        </div>
      </div>
    </div>
  );
};
export default ProposalDetail;