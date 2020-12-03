import { DefaultButton } from "@fluentui/react"
import React, { useState, useEffect } from "react"

const Account = ({ connected, connect, close }) => {
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (window.ethereum !== undefined) {
            setAddress(window.ethereum.selectedAddress)
        }
    }, [])

    const handleConnect = async () => {
        let res = await connect();
        if (!res) alert("You must install a web3 wallet such as Metamask to connect");
        close();
        return
    }

    return (
        <div className="account-panel">
            <h1 className="account-panel_h1">Your account</h1>
            {connected ?
            <>
            <h3 className="account-panel_h3">{address}</h3>
            {window.ethereum.chainId === "0x1" &&
            <span className="account-panel_span">WARNING! YOU ARE ON THE MAINNET. THIS APP IS DESIGNED TO BE USED ON THE KOVAN TESTNET</span>}
            </>
            :
            <>
            <h3 className="account-panel_h3">You aren't connected to QFinance Hub!</h3>
            <h5 className="account-panel_h5">You will still have read access to the site.</h5>
            <DefaultButton onClick={handleConnect}>Connect</DefaultButton>
            </>}
        </div>
        
    )
}

export default Account