import React, { useContext } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { BaseStyles, ToastMessage } from "rimble-ui"
import styled, { ThemeProvider } from "styled-components"
import Wallet from "../../wallets"
import { RootStoreContext } from '../../stores/root.store'
import { FiGithub, FiTwitter, FiSend } from "react-icons/fi"

import Navbar from "./Navbar"
import "../../assets/fonts/inter/font.inter.css"
import Menu from "./Menu"

const Qtheme = {
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    fontWeights: [0, 200, 300, 400, 600, 700],
    letterSpacings: [0, 1, 2, 4, 8],
    breakpoints: ["40em", "52em", "64em"],
    lineHeights: {
      solid: 1,
      title: 1.25,
      copy: 1.5,
    },
    fonts: {
      serif: 'athelas, georgia, times, serif',
      sansSerif: '"inter", "Source Sans Pro", -apple-system, sans-serif',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    radii: ['0', '4px', '8px', '16px'],
    width: [0, 16, 32, 64, 128, 256],
    minWidths: [0, 16, 32, 64, 128, 256],
    maxWidths: [0, 16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    heights: [0, 16, 32, 64, 128, 256],
    minHeights: [0, 16, 32, 64, 128, 256],
    maxHeights: [0, 16, 32, 64, 128, 256],
    borders: [0, '1px solid transparent'],
    borderWidths: ['0', '1px', '2px', '4px'],
    shadows: [
      '0',
      '0px 2px 4px rgba(0, 0, 0, 0.1)',
      '0px 8px 16px rgba(0, 0, 0, 0.1)',
      '0 7px 14px rgba(50,50,93,.1)',
    ],
    opacity: {
      disabled: 0.4,
    },
    colors: {
      text: '#3F3D4B',
      background: '#fff',
      primary: "#CC9966",
      'primary-light': "#f0decc",
      'primary-dark': "#9b744e",
      blue: "#668dcc",
      black: '#000',
      'near-black': '#111',
      'dark-gray': '#333',
      'mid-gray': '#555',
      grey: '#CCC',
      silver: '#999',
      'light-silver': '#aaa',
      'moon-gray': '#ccc',
      'light-gray': '#eee',
      'near-white': '#f4f4f4',
      white: '#fff',
      transparent: 'transparent',
      blacks: [
        'rgba(0,0,0,.0125)',
        'rgba(0,0,0,.025)',
        'rgba(0,0,0,.05)',
        'rgba(0,0,0,.1)',
        'rgba(0,0,0,.2)',
        'rgba(0,0,0,.3)',
        'rgba(0,0,0,.4)',
        'rgba(0,0,0,.5)',
        'rgba(0,0,0,.6)',
        'rgba(0,0,0,.7)',
        'rgba(0,0,0,.8)',
        'rgba(0,0,0,.9)',
      ],
      whites: [
        'rgba(255,255,255,.0125)',
        'rgba(255,255,255,.025)',
        'rgba(255,255,255,.05)',
        'rgba(255,255,255,.1)',
        'rgba(255,255,255,.2)',
        'rgba(255,255,255,.3)',
        'rgba(255,255,255,.4)',
        'rgba(255,255,255,.5)',
        'rgba(255,255,255,.6)',
        'rgba(255,255,255,.7)',
        'rgba(255,255,255,.8)',
        'rgba(255,255,255,.9)',
      ],
      success: "#59854d",
      warning: "#d4ce61",
      danger: "#bf2424",
      info: "#668dcc",
    },
    zIndices: [0, 9, 99, 999, 9999],
    buttons: {
      primary: {
        color: "#CC9966",
        backgroundColor: "FFF",
        // use css custom props
        '--main-color': "#CC9966",
        '--contrast-color': "FFF",
      }
    },
    buttonSizes: {
      small: {
        fontSize: '0.75rem',
        height: '2rem',
        minWidth: '2rem',
        padding: '0 1rem',
      },
      medium: {
        fontSize: '1rem',
        height: '3rem',
        minWidth: '3rem',
      },
      large: {
        fontSize: '1.5rem',
        height: '4rem',
        minWidth: '4rem',
      },
    },
  };

const Layout = ( {children} ) => {
    const rootStore = useContext(RootStoreContext);
    const siteData = useStaticQuery(graphql`
    query SiteDataQuery {
        site {
            siteMetadata {
                title
                logoUrl
                }
            }
        }
    `);

    const wallet = Wallet.instance();
    wallet.prepare({store: rootStore.walletStore, site: siteData.site.siteMetadata})
        .catch(err => { console.log(err); });

    return (
        <>
        <BaseStyles>
        <ThemeProvider theme={Qtheme}>
            <Navbar />
               {children}
            <StickyFooter>
                <Menu />
                <div style={{display: 'flex'}}>
                <AppLink onClick={() => window.open(`https://twitter.com/QFinanceDeFi`)}>
                    <FiTwitter size={18} />
                </AppLink>
                <AppLink onClick={() => window.open(`https://t.me/QFinance_DeFi`)}>
                    <FiSend size={18} />
                </AppLink>
                <AppLink onClick={() => window.open('https://github.com/QFinanceDeFi')}>
                    <FiGithub size={18} />
                </AppLink>
                </div>
            </StickyFooter>
            <ToastMessage.Provider ref={node => (window.toastProvider = node)} />           
        </ThemeProvider>
        </BaseStyles>
        </>
    )
}

export default Layout;

const StickyFooter = styled.div
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: fixed;
    left: 0;
    bottom: 0;
    min-height: 48px;
    width: 100%;
    background: #333;
    color: white;
    box-shadow: 0 -5px 5px -5px whitesmoke;
    z-index: 1;

    @media (min-width: 768px) {
        display: none;
    }
`

const AppLink = styled.div
`
    text-decoration: none;
    color: inherit;
    margin: 0 6px;
    align-self: center;

    &:hover {
        cursor: pointer;
        color: #CC9966;
    }
`