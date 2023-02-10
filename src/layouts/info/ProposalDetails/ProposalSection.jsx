import parse from 'html-react-parser';

const ProposalSection = ({ proposalSection }) => {

  const showIcon = (type) => {
    if (type.toUpperCase().includes('GENERAL')) {
      return (
        <svg className="crumina-icon">
          <use xlinkHref="#settings-icon" />
        </svg>
      )
    }
    if (type.toUpperCase().includes('IMPACT')) {
      return (
        <svg className="crumina-icon">
          <use xlinkHref="#cross-icon" />
        </svg>
      )
    }
    if (type.toUpperCase().includes('FEASIBILITY')) {
      return (
        <svg className="crumina-icon">
          <use xlinkHref="#bag-icon" />
        </svg>
      )
    }
    if (type.toUpperCase().includes('AUDITABILITY')) {
      return (
        <svg className="crumina-icon">
          <use xlinkHref="#patreon-icon" />
        </svg>
      )
    }
  }

  return (
    <div style={{ padding: '0 10px 0 10px' }}>
      {proposalSection.map((section) => (
        <div className="placed-bid" key={section.id}>
          <div className="bid-placer">
            <div className="avatar box-42">
              {showIcon(section.title)}


            </div>
            <div className="bid-info ">
              <div className="bid-title">
                <span className="gradient-text">
                  {section.title}
                </span>
              </div>
              <div className="bid-date">
                {section.ideaFieldValues.map((idea, key) => (
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
