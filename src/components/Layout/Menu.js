import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Menu = () => {
    return (
        <NavMenu>
            <NavLink to="/learn/#about">
                <NavItem>Learn</NavItem>
            </NavLink>
            <NavLink to="/pools">
                <NavItem>Pools</NavItem>
            </NavLink>
            <NavLink to="/stake">
                <NavItem>Stake</NavItem>
            </NavLink>
            <NavLink to="/qfi">
                <NavItem>QFI</NavItem>
            </NavLink>
            <NavLink to="/airdrop">
                <NavItem>Airdrop</NavItem>
            </NavLink>
        </NavMenu>
    )
}

export default Menu;

const NavMenu = styled.ul
`
    display: flex;
    list-style: none;
    padding-left: 8px;
    align-self: center;
    z-index: 1;
`

const NavItem = styled.li
`
    list-style: none;
    margin: 0;
`

const NavLink = styled(Link)
`
    text-decoration: none;
    color: inherit;
    padding: 8px;
    width: 56px;
    text-align: center;
    border-radius: 6px;

    &:hover {
        color: #CC9966;
    }
`