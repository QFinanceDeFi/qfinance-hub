import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Table } from "rimble-ui"
import styled from "styled-components"
import { FiArrowUp, FiArrowDown } from "react-icons/fi"

const TableContent = ({options, sort}) => {
    const [sortAsc, setSortAsc] = useState(false)
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        if (options.length > 0) {
            sort(sortAsc)
        }
    }, [sortAsc, sort])

    return (
    <Table>
        <TableHead>
            <tr>
                <th>Pool Name</th>
                <th>Pool Address</th>
                <TableHeadSortable onClick={() => {setSorted(true); setSortAsc(!sortAsc)}}>
                    ETH Value {sorted && (sortAsc ? <FiArrowDown /> : <FiArrowUp />)}
                </TableHeadSortable>
            </tr>
        </TableHead>
        <tbody>
        {options > 0 && options.map(item => (
            <TableRow key={item.poolAddress} onClick={() => navigate(`/pool/${item.poolAddress}`)}>
                <TableItem>{item.poolName}</TableItem>
                <TableItem>{item.poolAddress}</TableItem>
                <TableItem>{item.currentValue}</TableItem>
            </TableRow>
        ))}     
        </tbody>
    </Table>
    )
}

export default TableContent

const TableHead = styled.thead 
`
    width: 100%;
    background: rgb(0, 0, 0, 0.2)
`

const TableHeadSortable = styled.th
`
    &:hover {
        cursor: pointer;
    }
`

const TableRow = styled.tr
`
    width: 100%;
    &:hover > td {
        background: rgb(204, 153, 102, 0.05);
    }

    & :hover {
        cursor: pointer;
    }
`

const TableItem = styled.td
`
    width: 33%;
    font-weight: 500;
`