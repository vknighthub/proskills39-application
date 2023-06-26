import { CardanoWallet } from "@meshsdk/react";
import Link from "next/link";

const ConnectWallet = ({ isAuthorized }) => {
    return (
        <>
            {isAuthorized &&
                <div className="collection-box">
                    <CardanoWallet />
                </div>
            }
        </>
    )
}
export default ConnectWallet;