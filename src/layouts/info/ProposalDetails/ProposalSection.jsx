import parse from 'html-react-parser';
import Link from 'next/link';

const ProposalSection = ({ proposalSection }) => {

  return (
    <div style={{ padding: '0 10px 0 10px' }}>
      {proposalSection.map((section) => (
        <div className="placed-bid" key={section.id}>
          <div className="bid-placer">
            <div className="avatar box-42">
              <svg className="crumina-icon">
                <use xlinkHref="#cross-icon" />
              </svg>
            </div>
            <div className="bid-info ">
              <div className="bid-title">
                <span className="gradient-text">
                  {section.title}
                </span>
              </div>
              <div className="bid-date">
                {section.ideaFieldValues.map((idea, key)=>(
                  <div key={key}>
                    {parse(idea.value)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
export default ProposalSection;
