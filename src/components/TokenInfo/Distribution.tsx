import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface IDistributionState {
    item: string;
    percent: number;
    index: number;
    note: string;
}

const Distribution = () => {
    const [highlighted, setHighlighted] = React.useState<IDistributionState>({
        item: '',
        index: -1,
        percent: 0,
        note: ''
    });
    const data = [
        {name: "Airdrops to users", value: 15, note: 'Periodic airdrops for pool creators an depositors'},
        {name: "Initial Airdrop", value: 15, note: 'Initial airdrop in December 2019 - January 2020'},
        {name: "QFI Staking", value: 15, note: 'Staking rewards for QFI only staking pools'},
        {name: "QFI-ETH LP Staking", value: 30, note: 'Staking rewards for QFI-ETH LPs (Uniswap V2)'},
        {name: "QPDT Staking", value: 10, note: 'Staking rewards for pool deposits on certain pools'},
        {name: "Team/Dev Fund", value: 10, note: 'Team and dev fund, half locked until January 2022'},
        {name: "Supporter Fund", value: 5, note: 'Fund for financial and operational support providers. Half locked until January 2022'}
    ];

    const colors = ['lightblue', 'crimson', '#BA9860', 'grey', 'lightgreen', 'orange', 'purple'];

    function handleEnter(item: string, percent: number): void {
        setHighlighted({
            item,
            index: data.findIndex(d => d.name === item),
            percent,
            note: data.filter(d => d.name === item)[0].note
        });
    }

    const distItem = (ind: number) => {
        return {
            color: '#BA9860',
            opacity: highlighted.index === -1 || highlighted.index === ind ? 1 : 0,
            transition: 'opacity 0.5s, font-size 0.5s',
            fontSize: highlighted.index === ind ? '24px' : '20px'
        }
    }

    return (
        <div className="distribution">
            <div className="distribution-header"><h2>Token Distribution</h2></div>
            <div style={{width: '100%', maxWidth: '600px'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', overflow: 'none' }}>
                <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        onMouseEnter={(e: any) => {
                            handleEnter(e.name, e.percent)
                        }}
                        onMouseLeave={() => setHighlighted({item: '', index: -1, percent: 0, note: ''})}>
                        <Tooltip content={(<div style={{color: 'white'}}>Test</div>)} />
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} opacity={highlighted.index === index ? 1 : 0.6} />
                        ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
            </div>
            </div>
            <div className="distribution-info">
                {data.map((item: any, index: number) => (
                    <div className="distribution-info-item" style={{display: 'flex', flexDirection: 'column'}} key={index}>
                    <span className="distribution-item" style={distItem(index)}>
                        {`${item.name} (${item.value}%)`}
                    </span>
                    {item.note !== '' &&
                        <span style={{opacity: highlighted.index === -1 || highlighted.index === index ? 1 : 0, transition: 'opacity 0.5s'}}>
                            {item.note}
                        </span>
                    }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Distribution;