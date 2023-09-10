import Image from "next/image";
import triangle from '@/assets/svg/triangle-right.svg';
import box from '@/assets/svg/box.svg';

export const Box = () => {
    return (
        <div className="box-next-more">
            <div className="group-wrapper">
                <div className="group">
                    <div className="overlap-group">
                        <div className="text-wrapper">See more</div>
                        <Image className="img" alt="Img" src={triangle} />
                        <Image
                            className="rectangle"
                            alt="Rectangle"
                            src={box}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};