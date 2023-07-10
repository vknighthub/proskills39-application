import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

const ConnectWallet = ({ isAuthorized }) => {
    const [render, setRender] = useState(false);
    const { connect, name, connected} = useWallet();
    
    useEffect(() => {
        var connectWallet = localStorage.getItem('walletname')
        if (connectWallet) {
            connect(connectWallet)
        }
    }, [])

    useEffect(() => {
        setRender(true)
    }, [render])


    const handleConnectWallet = (walletname) => {
        localStorage.setItem('walletname', walletname)
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