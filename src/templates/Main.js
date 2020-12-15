import React from "react";
import styled from "styled-components";

const Main = ({children}) => {
    return (
        <MainTemplate>
            {children}
        </MainTemplate>
    )
}

export default Main;

const MainTemplate = styled.div
`
    padding: 16px 32px;
    @media (max-width: 767px) {
        padding: 24px 24px 32px;
    }
`