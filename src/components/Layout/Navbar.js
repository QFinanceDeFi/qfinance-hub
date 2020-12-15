import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { window } from "browser-monads";
import { MetaMaskButton, Flex } from "rimble-ui";
import { FiGithub } from "react-icons/fi";
import Wallet from "../../wallets";
import { RootStoreContext } from '../../stores/root.store';

import Image from "./image";
import Menu from "./Menu";
import "./layout.css";

const Navbar = () => {
    const rootStore = useContext(RootStoreContext);
    const wallet = Wallet.instance();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if (window.ethereum) {
            if (window.ethereum.selectedAddress) {
                setIsLoggedIn(true);
            }
        }
        setUpdate(false)
    }, [update])

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function () {
            setUpdate(true)
          })
    }

    const _walletConnect = (walletType) => async () => {
        if (!window.ethereum) {
            return alert("You must install MetaMask to connect to QFinance.")
        }
        try {
            await wallet.init(walletType);
            await wallet.connect();
            setIsLoggedIn(rootStore.walletStore.hasAccount);
            return window.toastProvider.addMessage("Connected with MetaMask", {
            secondaryMessage: `${window.ethereum.selectedAddress}`,
            variant: 'success',
            actionHref: `https://etherscan.io/address/${window.ethereum.selectedAddress}`,
            actionText: "View", colorTheme: "light"
            })
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <NavContainer>
        <Flex>
            <NavBrand to="/">
                <div><Image /></div>
                <NavTitle>QFinance</NavTitle>
            </NavBrand>
            <TopMenu>
                <Menu />
            </TopMenu>
        </Flex>
        <Flex>
            <GitLink onClick={() => window.open('https://github.com/QFinanceDeFi')}>
                <FiGithub size={24} style={{marginRight: '24px'}} />
            </GitLink>
            <MetaMaskButton.Outline size="small" onClick={_walletConnect('metamask')}>
                {!isLoggedIn ? "Connect MetaMask" : "Connected"}
            </MetaMaskButton.Outline>
        </Flex>
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    height: 64px;
    padding: 0 24px;
    align-items: center;
    width: 100%;
    box-shadow: 0 4px 2px -2px whitesmoke;
`

const NavBrand = styled(Link)
`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: #CC9966;
    }
`

const NavTitle = styled.h4
`
    font-weight: 400;
`

const TopMenu = styled.div
`
    @media(max-width: 767px) {
        display: none;
    }
`

const GitLink = styled.div
`
    text-decoration: none;
    color: inherit;
    align-self: center;

    &:hover {
        cursor: pointer
    }

    @media (max-width: 767px) {
        display: none;
    }
`