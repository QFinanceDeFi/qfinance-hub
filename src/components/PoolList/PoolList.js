import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { DetailsList, SelectionMode, DefaultButton, SearchBox, Panel, PanelType, MessageBar } from "@fluentui/react"
import PoolForm from "./PoolForm";
import { getPools} from "../../services/getPools"
import { web3 } from "../../services/init";

const columns = [
    {
        key: "Pool Address",
        name: "Pool Address",
        fieldName: "Pool Address",
        onRender: (item) => (<Link to={"/pool/" + item["Pool Address"]} className="pool-list_a">{item["Pool Address"]}</Link>),
        minWidth: 250,
        maxWidth: 400
    },
    {
        key: "Pool Name",
        name: "Pool Name",
        fieldName: "Pool Name",
        onRender: (item) => (<Link to={"/pool/" + item["Pool Address"]} className="pool-list_a">{item["Pool Name"]}</Link>),
        minWidth: 200,
        maxWidth: 350
    },
    {
        key: "Creator Address",
        name: "Creator Address",
        fieldName: "Creator Address",
        minWidth: 200
    },
    {
        key: "Current Value ETH",
        name: "Current Value ETH",
        fieldName: "Current Value",
        onRender: item => web3.utils.fromWei(web3.utils.toHex(new web3.utils.BN(item["Current Value"].toString())), 'ether'),
        minWidth: 150,
        maxWidth: 200
    }
]

const searchStyles = {root: {
    width: '60%',
    minWidth: '280px'
}}

const PoolList = ({pub}) => {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState([])
    const [pools, setPools] = useState([])
    const [message, setMessage] = useState(false)
    const [txHash, setTxHash] = useState('')

    const handleSearch = (val) => {
        setOptions(pools.filter(item => item["Pool Address"].startsWith(val)))
    }

    useEffect(() => {
        async function process() {
            let res = await getPools(pub);
            setOptions(res)
            setPools(res)
            return
        }

        process()
    }, [pub])

    const handlePanelClose = () => setOpen(false)

    const updateTxHash = tx => {
        setTxHash(tx);
        setMessage(true)
    }

    return (
        <div className="pool-list-div">
        <div className="pool-list-commands">
            <DefaultButton className="pool-list-commands_button" iconProps={{ iconName: 'Add' }} onClick={() => setOpen(true)}>Create Pool</DefaultButton>
            <SearchBox placeholder="Search address" onClear={() => handleSearch('')} onSearch={val => handleSearch(val)} styles={searchStyles}/>            
        </div>
        {message && <MessageBar
            onDismiss={() => setMessage(false)}
            styles={{root: {margin: '24px 0'}}}>
                View your contract creation transaction: <a href={"https://kovan.etherscan.io/tx/" + txHash} target="_blank" rel="noreferrer">{txHash}</a>. 
                Check "Internal Txns" to find the address of the new contract.
            </MessageBar>}
        <DetailsList
            items={options}
            columns={columns}
            selection={false}
            selectionMode={SelectionMode.none}
            checkboxVisibility={false}
            setKey="none"
            />
        <Panel
            type={PanelType.medium}
            isLightDismiss
            isOpen={open}
            onDismiss={handlePanelClose}
            closeButtonAriaLabel="Close"
            headerText="Create new pool">
            <PoolForm close={handlePanelClose} update={updateTxHash} pub={pub} />
        </Panel>
        </div>
    )
}

export default PoolList