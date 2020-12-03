import React from "react"
import { Nav } from "@fluentui/react"
import ReactMarkdown from "react-markdown"
import { useLocation } from 'react-router-dom'
import { create, join, deposit, withdraw, about, qhub, stake, trade, start, thanks } from "../../components/Learn/Learn"

const navLinkGroups = [
    {
        name: "About QFinance",
        expandArialLabel: "What is QFinance",
        collapseArialLabel: "What is QFinance",
        links: [
            {
                key: "About QFinance",
                name: "About QFinance",
                url: "#/about"
            },
            {
                key: "What is QHub?",
                name: "What is QHub?",
                url: "#/qhub"
            },
            {
                key: "Credits",
                name: "Credits",
                url: "#/thanks"
            }
        ]
    },
    {
        name: "Use QFinance",
        expandArialLabel: "How to use QFinance",
        collapseArialLabel: "How to use QFinance",
        links: [
            {
                key: "Create a Pool",
                name: "Create a Pool",
                url: "#/create-pool"
            },
            {
                key: "Join a Pool",
                name: "Join a Pool",
                url: "#/join-pool"
            },
            {
                key: "Deposit",
                name: "Deposit",
                url: "#/deposit"
            },
            {
                key: "Withdraw",
                name: "Withdraw",
                url: "#/withdraw"
            },
            {
                key: "Get Started",
                name: "Get Started",
                url: "#/get-started"
            }
        ]
    },
    {
        name: "Stake Tokens",
        expandArialLabel: "Stake tokens to earn QFI",
        collapseArialLabel: "Stake tokens to earn QFI",
        links: [
            {
                key: "Stake Tokens",
                name: "Stake Tokens",
                url: "#/stake-tokens"
            },
            {
                key: "Trade QFI",
                name: "Trade QFI",
                url: "#/trade-qfi"
            }
        ]
    }
]

const navStyles = { root: { width: 400 } };

const render = (location) => {
    let path = location.hash.replace("#/", "");
    if (path === "about" || path === "") {
        return about
    } else if (path === "qhub") {
        return qhub
    } else if (path === "create-pool") {
        return create
    } else if (path === "join-pool") {
        return join
    } else if (path === "deposit") {
        return deposit
    } else if (path === "withdraw") {
        return withdraw
    } else if (path === "stake-tokens") {
        return stake
    } else if (path === "trade-qfi") {
        return trade
    } else if (path === "get-started") {
        return start
    } else if (path === "thanks") {
        return thanks
    }
}

const Learn = () => {
    const location = useLocation();
    return (
        <div className="learn-flex">
            <Nav
                style={navStyles}
                groups={navLinkGroups}
                className="learn-flex-nav"
                ariaLabel="QFinance How-To Navigation"
                initialSelectedKey="About QFinance"
                />
            <div className="learn-content">
                <ReactMarkdown>
                    {render(location)}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Learn