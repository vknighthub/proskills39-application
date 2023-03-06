
const ChanllengeMeta = ({ data }) => {

  return (
    <div className="product-meta-section">
      <div className="product-meta-item">
        <div className="small-title">Tolal proposal</div>
        <div className="value">{data.listProposal.length}</div>
      </div>
    </div>
  );
};
export default ChanllengeMeta;
