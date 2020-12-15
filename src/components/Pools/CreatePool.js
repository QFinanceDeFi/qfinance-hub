import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components"
import { Button, Box, Flex, Heading, Text, Form, Input, Field, Select, Slider } from "rimble-ui";
import {testTokenList} from "../../services/testTokenList";
import { newPool } from "../../services/newPool";

const CreatePool = () => {
    const [poolName, setPoolName] = useState('');
    const [tokens, setTokens] = useState([
        {address: '', percent: 0}
    ]);
    const [isPublic, setIsPublic] = useState(false);
    const [totalPercent, setTotalPercent] = useState(0);

    const handleTokenChange = (event, index) => {
        let address = event.target.value;
        let list = [...tokens];
        let item = {...list[index], address}
        list[index] = item
        setTokens(list)
    }

    const handlePercentChange = (event, index) => {
        let list = [...tokens];
        let item = {...list[index], percent: Number(event.target.value)}
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
        if (poolName === '') {
            return alert('Please add a name for the pool.')
        } else if (tokens[0].address === '') {
            return alert('Please complete the asset allocation.')
        } else if (totalPercent !== 100) {
            return alert('Please ensure your allocation equals 100%')
        }
        let res = await newPool(poolName, tokens, isPublic);
        window.toastProvider.addMessage("Transaction Submitted", {
            secondaryMessage: `${res}`,
            variant: 'pending',
            actionHref: `https://kovan.etherscan.io/tx/${res}`,
            actionText: "View", colorTheme: "light"
            })
        clearState();
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
        sleep(3000);
        return navigate('/pools');
    }

    const clearState = () => {
        setPoolName('');
        setTokens([{
            address: '',
            percent: 0
        }]);
        setIsPublic(false);
        setTotalPercent(0);
        return
    }

    return (
        <div style={{marginBottom: '32px'}}>
            <Box p={4} mb={3}>
              <Heading.h3>Create New Pool</Heading.h3>
                  <Field label="Pool Name" width={1}>
                      <Input
                        type="text" required
                        onChange={e => setPoolName(e.target.value)} value={poolName} width={1} />
                  </Field>
                  {tokens.map((item, index) => {
                      return (
                          <div key={index}>
                          <Heading as='h4' width={1}>{`Token ${index + 1}`}</Heading>
                              <Select required options={testTokenList} placeholder='' value={item.address} onChange={e => handleTokenChange(e, index)} width={1} />
                              <Text fontSize={1}>Please verify the token address: </Text>
                              <TokenLink fontSize={1} onClick={() => window.open(`https://kovan.etherscan.io/address/${item.address}`)}>{item.address}</TokenLink>
                              <Text style={{margin: '8px 0 4px 0'}}>{`Percent Allocation: ${item.percent}%`}</Text>
                              <Slider min="0" max="100" step="1" onChange={e => handlePercentChange(e, index)} width={0.5}/>
                              <Flex style={{margin: '12px 0'}}>
                                <Button size="small" onClick={handleAddToken}>Add</Button>
                                <Button.Outline size="small" onClick={handleRemoveToken} disabled={index < 1}>Remove</Button.Outline>
                                </Flex>
                          </div>
                      )
                  })}
                  <Field label="Make Public" width={1}>
                      <Form.Check
                        value={isPublic}
                        onChange={() => setIsPublic(!isPublic)} />
                  </Field>
                {totalPercent !== 0 && totalPercent !== 100 &&
                <Text color='red'>Total percent does not equal 100%</Text>}
            </Box>

            <Flex
              px={4}
              py={3}
              borderTop={1}
              borderColor={"#E8E8E8"}
              justifyContent={"flex-end"}
            >
              <Button.Outline onClick={() => navigate("/pools")}>Cancel</Button.Outline>
              <Button ml={3} onClick={handleSubmit}>Confirm</Button>
            </Flex>
        </div>
    )
}

export default CreatePool;

const TokenLink = styled(Text)
`
    &:hover {
        cursor: pointer;
    }
`