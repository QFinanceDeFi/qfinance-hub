import React, { useState, useEffect } from "react"
import { DefaultButton, TextField } from "@fluentui/react"
import { useParams } from "react-router-dom"
import { getPool } from "../../services/getPools"
import { withdrawEth } from "../../services/withdrawEth";
import { depositEth } from "../../services/depositEth";
// Production list only -> import { tokenList } from "../../services/tokenList"
import { testTokenList } from "../../services/testTokenList"
import { web3 } from "../../services/init";
import {
    PieChart, Pie, Cell, Tooltip,
  } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ManagePool = () => {
    const [state, setState] = useState({
        address: '',
        creator: '',
        currentValue: 0
    })
    const [breakdown, setBreakdown] = useState([]);
    const [deposit, setDeposit] = useState()
    const [withdraw, setWithdraw] = useState()
    const [connected, setConnected] = useState(false)
    let { address } = useParams()

    useEffect(() => {
        async function process() {
            let res = await getPool(address);
            setState({
                address: address,
                creator: res.creator,
                currentValue: res.currentValue,
                isPublic: res.isPublic
            })
            res.breakdown.map(item => item.percent = Number(item.percent))
            res.breakdown.map(item => item.name = testTokenList.find(tok => web3.utils.toChecksumAddress(tok.key) === item.address).text)
            setBreakdown(res.breakdown);
        }

        process();
    }, [address])

    useEffect(() => {
        if (window.ethereum !== undefined) {
            setConnected(window.ethereum.selectedAddress)
        } else {
            setConnected(false)
        }
    }, [])

    const handleDeposit = async () => {
        if (!deposit || deposit === 0) {
            alert("Add ETH value")
            return
        } else {
            let res = await depositEth(state.address, deposit)
            return res
        }
    }

    const handleWithdraw = async () => {
        if (!withdraw || withdraw === 0) {
            alert("Withdraw ETH")
            return
        } else {
            let res = await withdrawEth(state.address, withdraw)
            return res
        }
    }

    return (
        <div className="manage-pool">
        <div className="pool-details">
                <h1 className="pool-details_h1">Contract: {state.address}</h1>
                <h3 className="pool-details_h3">Public: {state.isPublic ? "Yes" : "No"}</h3>
                <h4 className="pool-details_h4">Creator: {state.creator}</h4>
            <div className="pool-details-breakdown">
                <h2 className="pool-details-breakdown_h2">Pool Assets</h2>
                {breakdown.map((item, index) => (
                <div className="pool-details-breakdown-item" key={index}>
                    <h3 className="pool-details-breakdown-item_h3">Asset {index + 1}: {item.name}</h3>
                    <h5 className="pool-details-breakdown-item_h5"><b>Token Address:</b> {item.address}</h5>
                    <h5 className="pool-details-breakdown-item_h5"><b>Percent:</b> {item.percent}%</h5>
                </div>                  
                ))}
            </div>
            <div className="pool-details-value">
                <h3 className="pool-details-value_h3"><b>Current Pool Value:</b> {state.currentValue} ETH</h3>
            </div>
            <div className="pool-actions">
                <div className="pool-actions-deposit">
                <h3 className="pool-actions-deposit_h3">Deposit</h3>
                    <TextField
                        placeholder="Amount to Deposit (ETH)"
                        value={deposit}
                        suffix="ETH"
                        styles={{root: {margin: '12px 0'}}}
                        onChange={event => setDeposit(event.target.value)}
                        />
                    <DefaultButton
                        className="pool-actions_button"
                        onClick={handleDeposit}
                        disabled={!connected}>
                        Deposit ETH
                    </DefaultButton>
                </div>
                <div className="pool-actions-withdraw">
                    <h3 className="pool-actions-withdraw_h3">Withdraw</h3>
                    <TextField
                        placeholder="% of Principal to Withdraw"
                        value={withdraw}
                        suffix="%"
                        styles={{root: { margin: '12px 0'}}}
                        onChange={event => setWithdraw(event.target.value)}
                        />
                    <DefaultButton
                        className="pool-actions_button"
                        onClick={handleWithdraw}
                        disabled={!connected}>
                        Withdraw ETH
                    </DefaultButton>
                </div>
            </div>
        </div>
            <div className="pool-graph">
            <PieChart width={400} height={400}>
                <Pie
                    data={breakdown}
                    fill="#8884d8"
                    dataKey="percent"
                    innerRadius={60}
                    nameKey="name"
                    >
            {
            breakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Tooltip formatter={(percent) => {return percent + "%"}} />
            </PieChart>
            </div>
        </div>
    )
}

export default ManagePool