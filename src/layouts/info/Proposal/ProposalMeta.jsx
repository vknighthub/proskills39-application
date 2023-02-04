
const ProposalMeta = ({ data }) => {

  return (
    <div className="product-meta-section">
      <div className="product-meta-item">
        <div className="small-title">Tolal proposal</div>
        <div className="value">{data.listProposal.length}</div>
      </div>
      <div className="product-meta-item">
        <div className="small-title">Edition</div>
        <div className="value">01/40</div>
        <div className="caption">Tokens</div>
      </div>
      
    </div>
  );
};
export default ProposalMeta;
