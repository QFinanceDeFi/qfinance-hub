import React from "react"
import { ResponsivePie } from '@nivo/pie'
import styled from "styled-components"
import { tokenList } from "../../services/tokenList"
import { web3 } from "../../services/init"

const Chart = ({ data }) => (
    <ResponsivePie
        data={data.map(item => ({
            id: tokenList.find(tk => web3.utils.toChecksumAddress(tk.value) === item.address).label,
            label: tokenList.find(tk => web3.utils.toChecksumAddress(tk.value) === item.address).label,
            value: item.percent,
            color: tokenList.find(tk => web3.utils.toChecksumAddress(tk.value) === item.address).color
        }))}
        margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
        innerRadius={0.35}
        colors={{ datum: 'data.color' }}
        borderWidth={0}
        enableSliceLabels={false}
        radialLabel={d => `${d.label}`}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        radialLabelsLinkStrokeWidth={2}
        tooltip={value => (<Tooltip>{value.datum.data.label}: {value.datum.data.value}%</Tooltip>)}
    />
)

export default Chart;

const Tooltip = styled.div
`
        display: flex;
        background: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-decoration: bold;
        padding: 8px
`