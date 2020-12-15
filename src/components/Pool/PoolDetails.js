import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Card, Heading, Loader, Button } from "rimble-ui"
import { getPool } from "../../services/getPools"
import Chart from "./Chart"
import DepositModal from "./DepositModal"
import WithdrawModal from "./WithdrawModal"

const PoolDetails = ( {address} ) => {
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState({
        poolName: '',
        address: '',
        creator: '',
        currentValue: 0
    })
    const [breakdown, setBreakdown] = useState([])
    const [depositModalOpen, setDepositModalOpen] = useState(false)
    const [withdrawModalOpen, setWithdrawModalOpen] = useState(false)

    useEffect(() => {
        async function process() {
            let res = await getPool(address);
            if (res === false) {
                return navigate('/404');
            }
            setState({
                poolName: res.poolName,
                address,
                creator: res.creator,
                currentValue: res.currentValue,
                isPublic: res.isPublic
            })
            setBreakdown(res.breakdown);
            setLoading(false);
        }

        process()
    }, [address])

    function closeDepositModal() {
        setDepositModalOpen(false)
    }

    function closeWithdrawModal() {
        setWithdrawModalOpen(false)
    }

    return (
        <DetailsDiv>
        <Card maxWidth={"1000px"} style={{textAlign: 'center', flexGrow: '1', marginBottom: '32px', borderRadius: '6px'}}>
        {loading ? <LoadingZone><Loader size='80px' /></LoadingZone>
        :
        <>
            <TitleDiv>
                {state.poolName}
            </TitleDiv>
            <AddressLink href={`https://kovan.etherscan.io/address/${state.address}`}>
                {`${state.address}`}
            </AddressLink>
            <PoolData>
                <Heading as="h5">
                    {`Created by: ${state.creator}`}
                </Heading>
                <ValueDiv>
                    {`Total value: ${parseFloat(state.currentValue).toFixed(4)} ETH`}
                </ValueDiv>
                <PoolGraph>
                {breakdown.length > 0 &&
                    <Chart data={breakdown} />
                }
                </PoolGraph>
            </PoolData>
            <PoolActions>
                <Button
                    onClick={() => setDepositModalOpen(true)}
                    icon="Add" px={2} minWidth='10rem' marginRight='2vw'>
                    Deposit
                </Button>
                <Button.Outline
                    onClick={() => setWithdrawModalOpen(true)}
                    icon="Remove" px={2} minWidth='10rem' marginLeft='2vw'>
                Withdraw</Button.Outline>
            </PoolActions>
        </>
        }
        </Card>
        <DepositModal open={depositModalOpen} close={closeDepositModal} address={state.address} />
        <WithdrawModal open={withdrawModalOpen} close={closeWithdrawModal} address={state.address} />
        </DetailsDiv>
    )
}

export default PoolDetails;

const DetailsDiv = styled.div
`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 32px 12px;
`

const LoadingZone = styled.div
`
    display: flex;
    height: 400px;
    width: 100%;
    justify-content: center;
    align-content: center;
    text-align: center;
`

const TitleDiv = styled.h1
`
    color: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 12px;
    color: #CC9966;
`

const AddressLink = styled.a
`
    font-size: 0.9rem;
    color: inherit;
    text-decoration: none;
`

const ValueDiv = styled.div
`
    font-size: 18px;
    font-weight: 600;
    padding: 12px 0;
`

const PoolData = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
    padding: 12px 0;
`

const PoolGraph = styled.div
`
    align-self: center;
    height: 280px;
    width: 360px;
`

const PoolActions = styled.div
`
    display: flex;
    justify-content: center;
`