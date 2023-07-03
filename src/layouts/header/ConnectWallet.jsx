import { CardanoWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

const ConnectWallet = ({ isAuthorized }) => {
    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true)
    }, [render])

    return (
        <>
            {isAuthorized && render &&
                <div className="collection-box">
                    <CardanoWallet />
                </div>
            }
        </>
    )
}
export default ConnectWallet;