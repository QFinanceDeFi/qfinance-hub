import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FiMonitor } from "react-icons/fi"
import { RiTestTubeLine, RiRocket2Line, RiGovernmentLine } from "react-icons/ri"
import {
  GiTrafficLightsGreen,
  GiUpgrade,
  GiSplitArrows,
  GiRadialBalance,
  GiGearHammer,
  GiReceiveMoney
} from "react-icons/gi"
import useWindowWidth from "../../hooks/useWindowWidth"

const iconStyle = {
  background: "black",
  color: "#BA9860",
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "24px",
}

const Timeline: React.FC<any> = () => {
  const width: number = useWindowWidth();

  return (
    <div
      id="roadmap"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "24px",
        overflowX: "hidden",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "32px" }}>
        QFinance Protocol Roadmap
      </h2>
      <VerticalTimeline animate={width > 800}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="June 2020"
          iconStyle={iconStyle}
          icon={<GiGearHammer />}
        >
          <h3 className="vertical-timeline-element-title">Develop idea</h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>
            Testing code, building proof of concepts and solidifying a vision
            for protocol development.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="September 2020"
          iconStyle={iconStyle}
          icon={<RiTestTubeLine color="#BA9860" />}
        >
          <h3 className="vertical-timeline-element-title">Deploy to Testnet</h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>Deploy the QFinance protocol version 1 to the Kovan testnet.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="December 2020"
          iconStyle={iconStyle}
          icon={<GiTrafficLightsGreen />}
        >
          <h3 className="vertical-timeline-element-title">Deploy to Mainnet</h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>
            The core QFinance protocol was deployed to mainnet on December 19,
            2020. The factory can be found at{" "}
            <a
              style={{ color: "inherit" }}
              href="https://etherscan.io/contract/0xA1EDD4e98e353cAD59ab080Ca25E1b856BC5E30b"
              target="_blank noreferrer"
            >
              0xA1EDD4e98e353cAD59ab080Ca25E1b856BC5E30b.
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="January 2021"
          iconStyle={iconStyle}
          icon={<RiRocket2Line color="#BA9860" />}
        >
          <h3 className="vertical-timeline-element-title">Launch QFI token</h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>
            The QFI governance token was launched to Uniswap in January 2021. It
            was initially distributed via an airdrop. More details about the
            token can be{" "}
            <a href="/qfi" style={{ color: "inherit" }}>
              found here.
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="March 2021"
          iconStyle={iconStyle}
          icon={<FiMonitor />}
        >
          <h3 className="vertical-timeline-element-title">Upgrade QFI App</h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>
            Upgrade the early front-end interface to a new design, solving bugs
            and adding new features to enhance the QFinance experience even
            further.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="May 2021"
          iconStyle={iconStyle}
          icon={<GiSplitArrows />}
        >
          <h3 className="vertical-timeline-element-title">
            Deploy QFinance on BSC
          </h3>
          <h4 style={{ color: "green", margin: 0, fontWeight: 400 }}>
            Complete
          </h4>
          <p>
            In May the QFinance core protocol was deployed on the BSC mainnet.
            QFinance remains an Ethereum-focused protocol firstly, but supports
            BSC as a secondary option for users who want to build pools of
            BSC-based assets.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="August 2021"
          iconStyle={iconStyle}
          icon={<GiRadialBalance />}
        >
          <h3 className="vertical-timeline-element-title">
            Deploy Multiswap Router
          </h3>
          <h4 style={{ color: "yellow", margin: 0, fontWeight: 400 }}>
            In Progress
          </h4>
          <p>
            We are abstracting the swap function out of the QPools so that users
            can swap directly without holding their funds in a pool. This will
            also provide gas savings when creating and using QPools. Currently
            in final testing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="August 2021"
          iconStyle={iconStyle}
          icon={<GiUpgrade />}
        >
          <h3 className="vertical-timeline-element-title">
            Deploy QFinance V2
          </h3>
          <h4 style={{ color: "yellow", margin: 0, fontWeight: 400 }}>
            In progress
          </h4>
          <p>
            Deploy the new QPool Factory contract to create V2 QPools. V2 will
            enable new features like pool rebalancing and governance, highly
            optimized swaps, and on-chain performance tracking so you can see
            how your investment is performing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="January 2021"
          iconStyle={iconStyle}
          icon={<RiGovernmentLine />}
        >
          <h3 className="vertical-timeline-element-title">
            Launch QFinance Governance
          </h3>
          <h4 style={{ color: "red", margin: 0, fontWeight: 400 }}>Upcoming</h4>
          <p>
            As we approach the 1 year anniversary of QFinance we will being
            rolling out governance functionality so users can begin voting on
            the future of the QFinance protocol.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(58,58,58,0.6)", color: "#BA9860" }}
          contentArrowStyle={{ borderRight: "7px solid  #BA9860" }}
          date="2022"
          iconStyle={iconStyle}
          icon={<GiReceiveMoney />}
        >
          <h3 className="vertical-timeline-element-title">
            Lending and stablecoin minting
          </h3>
          <h4 style={{ color: "red", margin: 0, fontWeight: 400 }}>Upcoming</h4>
          <p>
            The next stage of QFinance will focus on adding utility to QPDTs
            and letting them be used as collateral against loans and stablecoin
            minting.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};

export default Timeline
