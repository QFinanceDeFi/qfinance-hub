import React from "react";
import { useLocation } from "@reach/router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { about, qhub, thanks, create, join, deposit, withdraw, start, stake, trade, roadmap } from "./Content";

const Learn = () => {
    let location = useLocation();

    const render = (location) => {
        let path = location.hash.replace("#", "");
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
        } else if (path === "credits") {
            return thanks
        } else if (path === "roadmap") {
            return roadmap
        }
    }

    return (
        <LearnContainer>
            <ReactMarkdown>
                {render(location)}
            </ReactMarkdown>
        </LearnContainer>
    )
}

export default Learn;

const LearnContainer = styled.div
`
    padding: 12px 128px;
    font-size: 18px;

    @media (max-width: 767px) {
        padding: 0 0 64px 0;
    }
`