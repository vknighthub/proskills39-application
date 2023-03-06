
import ProposalDetailnfo from './ProposalDetails/ProposalDetailnfo';
import ProposalSection from './ProposalDetails/ProposalSection';
import ProposalRelated from './ProposalDetails/ProposalRelated';

const ProposalDetail = ({ data }) => {
  const proposalSection = data.result.data.proposal_infor.fieldSections
  const proposal_general = data.result.data.proposal_infor
  const assessment = data.result.data.assessment_infor

  return (
    <>
      
      <div className="product-page product-version-1">
        <div className="product-media">
          <div className="ml-3">
            <ProposalSection proposalSection={proposalSection} />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-wrapper">
            <ProposalDetailnfo proposal={proposal_general} assessment={assessment} />
          </div>
        </div>
      </div>

      <div className="product-page">
          <ProposalRelated />
      </div>

    </>
  );
};
export default ProposalDetail;
