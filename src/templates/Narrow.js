import React from "react";
import styled from "styled-components";

const Narrow = ({children}) => {
    return (
        <Page>
            {children}
        </Page>
    )
}

export default Narrow;

const Page = styled.div
`
    padding: 24px 96px;
    @media (max-width: 767px) {
        padding: 24px 24px 32px;
    }
`