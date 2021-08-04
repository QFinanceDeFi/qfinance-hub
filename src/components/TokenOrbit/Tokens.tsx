import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const tokens = require("./tokenList.json")

const Tokens: React.FC = () => {
  const [state, setState] = React.useState<any>([])
  const [list, setList] = React.useState<number[]>([0, 1, 2, 3])
  const [index, setIndex] = React.useState<any>({
    showIndex: 0,
    lastUsed: 4,
  })
  const icons: any = useStaticQuery(query)

  React.useEffect(() => {
    const reducer = (ls: any, current: any) => {
      const icon = icons.allImageSharp.edges.filter(
        e => e.node.gatsbyImageData.images.fallback.src.includes(`${current.name.toLowerCase()}.png`)
      )
      ls.push(icon[0].node.gatsbyImageData)
      return ls
    }
    const tokenList = tokens.reduce(reducer, [])
    setState(tokenList)
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      list.splice(index.showIndex, 1, index.lastUsed)
      if (index.lastUsed < 7) {
        setIndex({
          lastUsed: index.lastUsed + 1,
          showIndex: index.showIndex < 3 ? index.showIndex + 1 : 0,
        })
      } else {
        setIndex({
          lastUsed: 0,
          showIndex: index.showIndex < 3 ? index.showIndex + 1 : 0,
        })
      }
    }, 3000)

    return () => {
      list
    }
  })

  function getCalcs(listIndex: number) {
    switch (listIndex) {
      case 0:
        return "orbit1"
      case 1:
        return "orbit2"
      case 2:
        return "orbit3"
      case 3:
        return "orbit4"
    }
  }

  return (
    <div className="token-space" id="tech">
      <div className="tokens-header">
        <h2 style={{textShadow: '2px 2px 14px rgb(50,50,50)'}}>Build pools or swap multiple tokens at once</h2>
        <span style={{ fontSize: "18px", color: "#BA9860" }}>
          Most traditional market retail investors buy ETFs for wide market
          exposure. The QFinance protocol is bringing these solutions to
          Ethereum DeFi, allowing users to join pools of assets or build their
          own pools. Trustless, permissionless, and decentralized.
        </span>
      </div>
      <div className="tokens">
        {list.map((item: number, i: number) => {
          return (
            <div
              className="token-logo"
              key={i}
              style={{
                animation: `${getCalcs(i)} 6s infinite linear`,
              }}
            >
              <GatsbyImage
                image={state[item]}
                alt="token image"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tokens

const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(width: 64)
        }
      }
    }
  }
`
