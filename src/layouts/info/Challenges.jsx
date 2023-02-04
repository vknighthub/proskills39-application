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
            <div className="news-thumb">
              {" "}
              <Link href=
                {{
                  pathname: '/challenges/[challengeId]',
                  query: { challengeId: challenge.challengeId },
                }}>

                <Image
                  src={challenge.imageUrl}
                  alt=""
                  width={460}
                  height={360}
                />
              </Link>{" "}
            </div>
            <div className="news-content">

              <div className="news-title h5">
                {" "}
                <Link href="/15-blog-post-sidebar">
                  {challenge.challengeName}
                </Link>{" "}
              </div>
              <div className="news-excerpt">
                {parse("How can we make Cardano the go-to choice for building DAOs? What tools can we provide to enable effective DAO's Creation & Operation")}
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
