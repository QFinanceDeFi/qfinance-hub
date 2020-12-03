import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./Q_logo_gold.svg"
import { PrimaryButton, Panel, PanelType } from "@fluentui/react"
import { connectMetamask } from "../../services/init"
import Account from "../Account/Account"

const Navbar = ({connected, update}) => {
  const [open, setOpen] = useState(false)

  const panelClose = () => {
    setOpen(false)
    return
  }

  const connect = () => {
    let res = connectMetamask();
    update(res);
    return res
  }
    
    return (
      <>
        <div className="nav">
        <div className="nav-main">
            <div className="nav-brand">
              <Link to="/"><img alt='QFI Logo' src={logo} className="nav-brand_img" /></Link>
              <Link to="/" className="nav-brand_a">QFinance</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/learn">Details</Link>
                <Link to="/private-pools">Private Pools</Link>
                <Link to="/public-pools">Public Pools</Link>
            </div>
        </div>
          <div style={{alignSelf: 'center'}}>
            <PrimaryButton text={connected ? "Connected" : "Connect"} onClick={() => setOpen(true)} checked={connected} />
          </div>
        </div>
        <Panel
            type={PanelType.medium}
            isLightDismiss
            isOpen={open}
            onDismiss={() => setOpen(false)}
            closeButtonAriaLabel="Close"
            headerText="Your Account">
            <Account connected={connected} connect={connect} close={panelClose}/>
        </Panel>
      </>
    )
}

export default Navbar;