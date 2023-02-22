import parse from 'html-react-parser';

const ProposalInfo = ({ data }) => {

  return (
    <div className="product-info">      
      <div className="product-description">
        <div className="small-title">Description</div>
        {parse(data.challengeDescription)}
      </div>
      
    </div>
  );
};
export default ProposalInfo;
