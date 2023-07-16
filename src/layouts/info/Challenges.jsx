import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';

const Challenges = ({ data }) => {
  
  return (
    <div className="container section-padding">
      <div className="section-title-wrapper">
        <div className="section-title">
          <span className="gradient-text">Challenges</span>
        </div>

      </div>
      <div className="latest-news-box grid-3-columns">
        {data && data.map((challenge) => (
          <div className="news-item" key={challenge.challengeId}>
            <div className="news-content">
              <Image src={challenge.imageUrl}
                alt={challenge.challengeId}
                width={375}
                height={200}
                style={{borderRadius: 12}}
              />
              <div className="news-title h5">
                {" "}
                <Link href={{
                  pathname: '/challenges/[challengeId]',
                  query: { challengeId: challenge.challengeId },
                }}>
                  {challenge.challengeName}
                </Link>{" "}
              </div>
              <div className="news-excerpt">
                {parse(challenge.description)}
              </div>

              <p>{challenge.totalProposal} proposals</p>
              <p className="h6">Budget: <span className="gradient-text">{challenge.tagline}</span></p>

            </div>
          </div>
        ))}


      </div>
    </div>
  );
};
export default Challenges;
