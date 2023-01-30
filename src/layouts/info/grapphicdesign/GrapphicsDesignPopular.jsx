import Image from '@/components/ui/image';
import Link from "next/link";

const GrapphicsDesignPopular = ({ data }) => {
    return (
        <div className="featured-item">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">

                    <div className="creator-box">

                        <div className="box-64">
                            <Link href="/05-product-page">
                                <Image
                                    src={data.image}
                                    width={100}
                                    height={100}
                                    alt={data.name}
                                />
                            </Link>
                        </div>

                        <div className="creator-meta title">
                            <Link href="/05-product-page">{data.name}</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
export default GrapphicsDesignPopular;
