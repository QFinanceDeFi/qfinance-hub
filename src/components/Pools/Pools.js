import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Heading, Input, Button } from "rimble-ui";
import { navigate } from "gatsby";
import { getPools } from "../../services/getPools";
import TableContent from "./TableContent";

const Pools = () => {
    const [selected, setSelected] = useState();
    const [privatePools, setPrivatePools] = useState([]);
    const [publicPools, setPublicPools] = useState([]);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function process() {
            let resPrivate = await getPools(false);
            let resPublic = await getPools(true);
            setPrivatePools(resPrivate);
            setPublicPools(resPublic);
            return
        }

        process();
    }, [])

    useEffect(() => {
        const searchOptions = val => {
            if (options.length > 0) {
                if (selected === "Private") {
                    setOptions(privatePools.filter(item => item.poolAddress.startsWith(val)))
                } else if (selected === "Public") {
                    setOptions(publicPools.filter(item => item.poolAddress.startsWith(val)));
                }
            }
        }

        searchOptions(search)
    }, [search, selected, privatePools, publicPools])

    function sort(asc) {
        let opt = [];
        if (asc) {
            opt = options.sort((a, b) => a.currentValue - b.currentValue)
        } else if (!asc) {
            opt = options.sort((a, b) => b.currentValue - a.currentValue)
        }
        
        setOptions(opt)
    }

    return (
        <>
        <PoolsControl>
            <PoolSelector onClick={() => {setOptions(privatePools); setSelected('Private')}}>
                <SelectButton color={selected === 'Private' ? '#CC9966' : "grey"}>
                    Private
                </SelectButton>
            </PoolSelector>
            <PoolSelector onClick={() => {setOptions(publicPools); setSelected('Public')}}>
                <SelectButton color={selected === 'Public' ? '#CC9966' : 'grey'}>
                    Public
                </SelectButton>
            </PoolSelector>
        </PoolsControl>
        <>
        <PoolsHeader>
            <PoolHeading width={12}>
                {selected} Pools
            </PoolHeading>
            <Input type="search" required={false} placeholder="Search address"
                onChange={e => setSearch(e.target.value)} height='2rem'
                width={0.5} />
            <Button icon="Add" icononly onClick={() => navigate("/create")} />
        </PoolsHeader>
        {selected && <TableContent options={options} sort={sort}/>}
        </>
        </>
    )
}

export default Pools;

const PoolsControl = styled.div
`
    display: flex;
    width: 100%;
    padding: 24px 0;
    justify-content: center;
`

const PoolSelector = styled.div
`
    &:hover {
        cursor: pointer;
    }
`

const SelectButton = styled.div
`
    padding: 6px 18px;
    border-radius: 12px;
    margin: 0 4px;
    color: white;
    background: ${props => props.color};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.27);
    }

    &:active {
        box-shadow: 0 0 2px 2px silver;
    }
`

const PoolsHeader = styled.div
`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    align-items: center;
`

const PoolHeading = styled(Heading)
`
    @media (max-width: 768px) {
        display: none;
    }
`