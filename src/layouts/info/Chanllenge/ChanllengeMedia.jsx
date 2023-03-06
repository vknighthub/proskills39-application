import Image from "next/image";
import product_2 from '@/assets/images/content/product-img/product-2.jpg';

const ChanllengeMedia = ({ data }) => {

  return (
    <div className="product-media">
      <a
        className="expand-icon"
        data-fslightbox="gallery"
        href={data.challengeImage}
      >
        <svg className="crumina-icon">
          <use xlinkHref="#maximize-icon" />
        </svg>
      </a>
      <div className="product-img">
        <Image src={data.challengeImage} width={400} height={400} alt="" />
      </div>
    </div>
  );
};
export default ChanllengeMedia;
