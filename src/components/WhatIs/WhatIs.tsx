import React from "react"
import Feature from "./Feature"
import { FiLayers } from "react-icons/fi"
import { GiSplitArrows, GiStrikingArrows, GiFingerPrint } from "react-icons/gi"
import { RiGovernmentLine } from "react-icons/ri"
import "./whatis.css"

const WhatIs: React.FC = () => {
  return (
    <div className="what-is">
      <Feature icon={<FiLayers />} title="Custom pools">
        Design your own investment pool
      </Feature>
      <Feature icon={<GiSplitArrows />} title="Multiple assets">
        Get exposure to multiple assets at once
      </Feature>
      <Feature icon={<GiStrikingArrows />} title="Multiswap">
        Exchange multiple assets at once
      </Feature>
      <Feature icon={<GiFingerPrint />} title="Complete control">
        Maintain control of your money
      </Feature>
      <Feature icon={<RiGovernmentLine />} title="Decentralized governance">
        Decentralized governance
      </Feature>
    </div>
  )
}

export default WhatIs
