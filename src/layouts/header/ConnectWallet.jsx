import { Icon } from "@iconify/react";
import Link from "next/link";

const ConnectWallet = ({ isAuthorized }) => {
    return (
        <>
            {isAuthorized &&
                <div className="collection-box">
                    <Link
                        className="btn btn-normal connect-wallet"
                        href="#"
                    >
                        CONNET WALLET
                        <Icon icon="clarity:wallet-solid" style={{ marginLeft: 5, width: 20, height: 18 }} />
                    </Link>

                </div>
            }
        </>
    )
}
export default ConnectWallet;