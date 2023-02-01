import Image from "next/image";
import product_2 from '@/assets/images/content/product-img/product-2.jpg';

const ProposalMedia = ({ data }) => {

  return (
    <div className="product-media">
      <a
        className="expand-icon"
        data-fslightbox="gallery"
        href="img/content/product-img/product-2.jpg"
      >
        <svg className="crumina-icon">
          <use xlinkHref="#maximize-icon" />
        </svg>
      </a>
      <div className="product-img">
        <Image src={product_2} width={300} height={300} alt="" />
      </div>
    </div>
  );
};
export default ProposalMedia;
