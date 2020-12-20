import React, { useState } from "react";
import { Box, Flex, Modal, Button, Text, Card, Heading, Field, Input } from "rimble-ui";
import styled from "styled-components"
import { withdrawEth } from "../../services/withdrawEth"

const WithdrawModal = ({ open, close, address }) => {
    const [withdrawPercent, setWithdrawPercent] = useState('0')

    function resetState() { setWithdrawPercent('0'); close()}

    const handleSubmit = async () => {
      let res = await withdrawEth(address, withdrawPercent);
      console.log(res)
      close()
      window.toastProvider.addMessage("Transaction Submitted", {
        secondaryMessage: `${res}`,
        variant: 'processing',
        actionHref: `https://etherscan.io/tx/${res}`,
        actionText: "View", colorTheme: "light"
        })
      return res
    }

    return (
        <Modal isOpen={open}>
        <Card width={"360px"} p={0}>
          <Button.Text
            icononly
            icon={"Close"}
            position={"absolute"}
            top={0}
            right={0}
            mt={3}
            mr={3}
            onClick={resetState}
          />

          <Box p={4}>
            <Heading.h3>Withdraw Percent</Heading.h3>
            <AddressLink onClick={() => window.open(`https://etherscan.io/address/${address}`)}>
                {address}
            </AddressLink>
          </Box>

          <Box pl={4} pr={4} mb={4}>
              <Field label="Withdraw Amount (%)">
                  <Input type="text" required={true} placeholder="Percent to Withdraw"
                    onChange={e => setWithdrawPercent(e.target.value)}/>
              </Field>
              <Text color="red">You are about to withdraw ETH. Complete the transaction in MetaMask after clicking 'Confirm'</Text>
          </Box>

          <Flex
            px={4}
            py={3}
            borderTop={1}
            borderColor={"#E8E8E8"}
            justifyContent={"flex-end"}
          >
            <Button.Outline onClick={resetState}>Cancel</Button.Outline>
            <Button
              onClick={handleSubmit}
              ml={3} disabled={!withdrawPercent || withdrawPercent === '0'}>
            Confirm
            </Button>
          </Flex>
        </Card>
      </Modal>
    )
}

export default WithdrawModal;

const AddressLink = styled(Text)
`
    font-size: 12px;
    margin: 0;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`