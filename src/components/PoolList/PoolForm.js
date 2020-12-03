import React, { useState } from "react"
import { DefaultButton, Dropdown, PrimaryButton, Slider, TextField, Toggle, CompoundButton } from "@fluentui/react"
import { newPublicPool, newPrivatePool } from "../../services/newPool";
import { tokenList } from "../../services/tokenList"
import { testTokenList } from "../../services/testTokenList"

const sliderAriaValueText = (value) => `${value} percent`;
const sliderValueFormat = (value) => `${value}%`;

const PoolForm = ({close, update, pub}) => {
    const [name, setName] = useState('')
    const [tokens, setTokens] = useState([
        {address: '', percent: 0}
    ])
    const [isPublic, setIsPublic] = useState(pub)
    const [totalPercent, setTotalPercent] = useState(0)

    const handleTokenChange = (event, index) => {
        let address = testTokenList.find(item => item.text === event.target.textContent.slice(0, event.target.textContent.length - 1)).key
        let list = [...tokens];
        let item = {...list[index], address}
        list[index] = item
        setTokens(list)
    }

    const handlePercentChange = (val, index) => {
        let list = [...tokens];
        let item = {...list[index], percent: val}
        list[index] = item
        setTotalPercent(list.map(item => item.percent).reduce((a, b) => a + b))
        setTokens(list)
    }

    const handleAddToken = () => {
        setTokens([...tokens, {address: '', percent: 0}])
    }

    const handleRemoveToken = index => {
        const list = [...tokens];
        list.splice(index, 1);
        setTokens(list);
      };
    
    const handleSubmit = async () => {
        if (isPublic) {
            let res = await newPublicPool(name, tokens)
            update(res)
            close()
        } else if (!isPublic) {
            let res = await newPrivatePool(name, tokens)
            update(res)
            close()
        }
    }

    return (
        <div className="pool-form">
        <TextField
            label="Pool Name"
            placeholder="Enter pool name (public only)"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        {tokens.map((item, index) => {
            return (
            <div className="pool-form-assets" key={index}>
            <h3 className="pool-form-assets_h3">Token {index + 1}</h3>
                <Dropdown
                    label="Select asset"
                    placeholder="Choose an asset"
                    options={testTokenList}
                    value={item.address}
                    onChange={event => handleTokenChange(event, index)}
                    className="pool-form-assets_dropdown"
                />
                {item.address !== '' && item.address !== undefined &&
                <div className="pool-form-assets-address">
                    This is the token address: <b>{item.address}</b>. Please ensure this is the asset you want to buy!
                </div>
                }
                <Slider
                    label="Percent of Portfolio"
                    max={100}
                    ariaValueText={sliderAriaValueText}
                    valueFormat={sliderValueFormat}
                    onChange={val => handlePercentChange(val, index)}
                    className="pool-form-assets_slider"
                    showValue
                />
                <div className="pool-form-assets-buttons">
                <PrimaryButton
                    className="pool-form-assets_button"
                    onClick={handleAddToken}
                    disabled={index >= 4}>
                    Add
                </PrimaryButton>
                <DefaultButton
                    className="pool-form-assets_button"
                    onClick={index => handleRemoveToken(index)}
                    disabled={index < 1}>
                    Remove
                </DefaultButton>  
                </div>   
            </div>
            )
        })}
        <Toggle
            label="Public Pool"
            defaultChecked onText="Public"
            offText="Private"
            className="pool-form_toggle"
            defaultValue={pub}
            defaultChecked={pub}
            onChange={() => setIsPublic(!isPublic)} />
        {totalPercent !== 0 && totalPercent !== 100 &&
        <div className="pool-form-warning">
            Your asset allocation is {totalPercent < 100 ? " less " : " greater "} than 100%!
        </div>
        }
        <CompoundButton
            default
            styles={{root: {
                border: '1px solid #CC9966', fontSize: '24px', marginTop: '12px', width: '100%'
                },
                label: { marginBottom: '12px'}
                }}
            secondaryText="Clicking Create will launch your Web3 wallet and ask for confirmation"
            onClick={handleSubmit}
            checked={false}>
                Create Pool
        </CompoundButton>
        </div>
    )
}

export default PoolForm