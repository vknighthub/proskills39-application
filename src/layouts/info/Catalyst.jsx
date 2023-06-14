import Link from "next/link";

const Catalyst = ({ data }) => {
  return (
    <div className="featured-item">
      <div className="featured-item-wrapper">
        <div className="featured-item-content">
          <div className="fav-counter">
            <svg className="crumina-icon">
              <use xlinkHref="#heart-icon" />
            </svg>{" "}
            <span className="count">{data.react}</span>
          </div>
          <div className="featured-item-image">
            {" "}
            <Link href="/05-product-page">
              <a>
                <picture>
                  <source type="image/avif" srcSet={data.image} />
                  <img
                    src={data.image}
                    width={304}
                    height={340}
                    alt="Featured"
                  />
                </picture>
              </a>
            </Link>{" "}
          </div>
          <div className="featured-item-info">

            <div className="title">
              {" "}
              <Link href="/05-product-page">
                <a>{data.name}</a>
              </Link>{" "}
            </div>
            <div className="item-meta">
              <span className="avatar box-26">
                {" "}
                <Link href={`/user-profile/${data.author.username}`}>
                  <a>
                    <picture>
                      <source type="image/avif" srcSet={data.author.image} />
                      <img
                        src={data.author.image}
                        alt="avatar"
                        loading="lazy"
                        width={100}
                        height={100}
                      />
                    </picture>
                  </a>
                </Link>{" "}
                <span className="verified">
                  <svg className="crumina-icon">
                    <use xlinkHref="#check-icon" />
                  </svg>{" "}
                </span>
              </span>
              @{data.author.name}
            </div>
          </div>
        </div>
        <div className="featured-item-post-content">
          <div className="featured-item-pricebox">
            <div className="price-caption">Current BID</div>
            <div className="price">{data.price} ETH</div>
          </div>
          <div className="social-share-box">
            <div className="social-caption">Share</div>
            <div className="share-icons">
              <svg className="crumina-icon">
                <use xlinkHref="#facebook-icon" />
              </svg>{" "}
              <svg className="crumina-icon">
                <use xlinkHref="#twitter-icon" />
              </svg>{" "}
              <svg className="crumina-icon">
                <use xlinkHref="#instagram-icon" />
              </svg>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalyst;
