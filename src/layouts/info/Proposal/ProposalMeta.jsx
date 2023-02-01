
const ProposalMeta = ({ data }) => {

  return (
    <div className="product-meta-section">
      <div className="product-meta-item">
        <div className="small-title">Current bid</div>
        <div className="value">2.31 ETH</div>
        <div className="caption">125.230 U$D</div>
      </div>
      <div className="product-meta-item">
        <div className="small-title">Edition</div>
        <div className="value">01/40</div>
        <div className="caption">Tokens</div>
      </div>
      <div className="product-meta-item">
        <div className="small-title">Auction ending in</div>
        <div className="countdown">
          <div
            className="js-countdown"
            data-timer={104400}
            data-labels="Days , Hours , Mins , Secs"
          />
        </div>
      </div>
      <div className="place-bid">
        <button className="btn btn-wide btn-dark">Place a Bid!</button>
      </div>
    </div>
  );
};
export default ProposalMeta;
