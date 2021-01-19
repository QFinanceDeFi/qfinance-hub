import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import styled from "styled-components";

const links = [
    {
        name: "QFinance",
        url: "#about"
    },
    {
        name: "QFinance Hub",
        url: "#qhub"
    },
    {
        name: "Create Pool",
        url: "#create-pool"
    },
    {
        name: "Join Pool",
        url: "#join-pool"
    },
    {
        name: "Deposit",
        url: "#deposit"
    },
    {
        name: "Withdraw",
        url: "#withdraw"
    },
    {
        name: "Get Started",
        url: "#get-started"
    },
    {
        name: "Stake Tokens",
        url: "#stake-tokens"
    },
    {
        name: "Trade QFI",
        url: "#trade-qfi"
    },
    {
        name: "Roadmap",
        url: "#roadmap"
    },
    {
        name: "Credits",
        url: "#credits"
    }
]

const Links = () => {
    let path = useLocation()

    return (
        <>
        {links.map(item => (
            <LearnLink
            key={item.url}
            to={item.url}
            active={path.hash === item.url}>
                {item.name}
            </LearnLink>
        ))}
        </>
    )
}

export default Links;

const LearnLink = styled(Link)
`
    text-decoration: none;
    color: ${props => props.active ? "#CC9966" : "white"};
    margin: 12px;
`