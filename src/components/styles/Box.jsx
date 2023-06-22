import Image from "next/image";

export const Box = () => {
    return (
        <div className="box">
            <div className="group-wrapper">
                <Image className="group" width={101} height={30} alt="Group" src="https://generation-sessions.s3.amazonaws.com/874dafd10c6a6b8f1f65c05b6d53a067/img/group-48095683.png" />
            </div>
        </div>
    );
};