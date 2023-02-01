import Image from "next/image";
import Link from "next/link";

const ProposalInfo = ({ data }) => {

  return (
    <div className="product-info">
      <div className="small-title">Creator</div>
      <div className="product-author avatar-block">
        <div className="avatar box-42">
          {" "}
          <Link href="/08-profile-page">
            {/* <Image src="img/avatar.png" alt="avatar" /> */}
          </Link>{" "}
          <span className="verified">
            <svg className="crumina-icon">
              <use xlinkHref="#check-icon" />
            </svg>
          </span>
        </div>
        <div className="avatar-meta">
          <div className="avatar-title">
            <span className="gradient-text">
              {" "}
              <Link href="/08-profile-page">
                Dexter Stark
              </Link>{" "}
            </span>
          </div>
          <div className="avatar-meta">@DexterStark</div>
        </div>
      </div>
      <div className="product-description">
        <div className="small-title">Description</div>
        <p>
          I am a self-taught digital artist who specializes in 3d art and motion
          graphics. Most of my works are inspired by nature and biomechanic
          themes.
        </p>
        <p>
          What does it mean? Biomechanics is the study of the structure,
          function and motion of the mechanical aspects of biological systems,
          at any level from whole organisms to organs, cells and cell
          organelles, using the methods of mechanics. Biomechanics is a branch
          of biophysics.
        </p>
      </div>
      <div className="product-description">
        <div className="small-title">Additional Details</div>
        <ul className="details-list">
          <li>
            <svg className="crumina-icon bullet-icon">
              <use xlinkHref="#circle-icon" />
            </svg>
            <span className="detail-label">Size</span>
            <span className="bold">5000 x 3500px (37MB)</span>
          </li>
          <li>
            <svg className="crumina-icon bullet-icon">
              <use xlinkHref="#circle-icon" />
            </svg>
            <span className="detail-label">Formats</span>
            <span className="bold">MP4, JPEG and PNG</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProposalInfo;
