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

        <div className="news-item">
          <div className="news-thumb">
            {" "}
            <Link href="/14-blog-post-centered">

              <Image
                src="https://cardano.ideascale.com/community-library/accounts/93/936143/Public/TestBanner-dda8cc.png"
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
                F9: The Great Migration (from Ethereum)
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              {parse("How can we make Cardano the go-to choice for building DAOs? What tools can we provide to enable effective DAO's Creation & Operation")}
            </div>

            <p>482 proposals</p>
            <p className="h6">Budget: <span className="gradient-text">$7,850,000</span></p>

          </div>
        </div>

        <div className="news-item">
          <div className="news-thumb">
            {" "}
            <Link href="/14-blog-post-centered">

              <Image
                src="https://cardano.ideascale.com/community-library/accounts/93/936143/Public/TestBanner-dda8cc.png"
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
                F9: The Great Migration (from Ethereum)
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              {parse("How can we make Cardano the go-to choice for building DAOs? What tools can we provide to enable effective DAO's Creation & Operation")}
            </div>

            <p>482 proposals</p>
            <p className="h6">Budget: <span className="gradient-text">$7,850,000</span></p>

          </div>
        </div>

        <div className="news-item">
          <div className="news-thumb">
            {" "}
            <Link href="/14-blog-post-centered">

              <Image
                src="https://cardano.ideascale.com/community-library/accounts/93/936143/Public/TestBanner-dda8cc.png"
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
                F9: The Great Migration (from Ethereum)
              </Link>{" "}
            </div>
            <div className="news-excerpt">
              {parse("How can we make Cardano the go-to choice for building DAOs? What tools can we provide to enable effective DAO's Creation & Operation")}
            </div>

            <p>482 proposals</p>
            <p className="h6">Budget: <span className="gradient-text">$7,850,000</span></p>

          </div>
        </div>
      
      </div>
    </div>
  );
};
export default Challenges;
