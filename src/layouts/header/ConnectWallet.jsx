import { useMe, useWalletConnect } from "@/data/user";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

const ConnectWallet = ({ isAuthorized }) => {
    const [render, setRender] = useState(false);
    const { connect, name, connected, disconnect } = useWallet();
    const { me } = useMe()

    const userData = me ? me.data : undefined

    useEffect(() => {
        if (userData && userData.isConnectWallet) {
            connect(userData.walletName)
        } else {
            disconnect()
        }

    }, [userData?.isConnectWallet])

    useEffect(() => {
        setRender(true)
    }, [render])


    const { mutate: handleProcessConnectWallet } = useWalletConnect()

    const handleConnectWallet = (walletname) => {
        handleProcessConnectWallet({ walletname: walletname })
    }

    return (
        <>
            {isAuthorized && render &&
                <div className="collection-box">
                    <CardanoWallet
                        onConnected={() => handleConnectWallet(name)}
                    />
                </div>
            }
        </>
    )
}
export default ConnectWallet;