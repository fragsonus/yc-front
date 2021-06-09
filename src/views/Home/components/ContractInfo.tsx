import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, useTotalValue } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const ContractInfo = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const ycPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = ycPrice.times(circSupply)
  const totalValue = useTotalValue()

  let yumchaPerBlock = 0
  if (farms && farms[0] && farms[0].yumchaPerBlock) {
    yumchaPerBlock = new BigNumber(farms[0].yumchaPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Row><Text bold>Contract Information</Text></Row>
        <Row><Text bold fontSize="13px">Yumcha token</Text></Row>
        <Row><Text fontSize="13px">0xC7d0CE2961396d02059f06e8DF7Dd37E6809d478</Text></Row>
        <Row><Text bold fontSize="13px">Masterchef</Text></Row>
        <Row><Text fontSize="13px">0xe3641C835d9e441f2F36D96c89E19BEDB5E991e7</Text></Row>
        <Row><Text bold fontSize="13px">ycVT</Text></Row>
        <Row><Text fontSize="13px">0x7D0943bD8225848Ecd84Cdec36c39f4470494F07</Text></Row>
        <Row><Text bold fontSize="13px">ycSDR</Text></Row>
        <Row><Text fontSize="13px">0x0493f4196e53eae3640587c119850cca56f94224</Text></Row>
        <Row><Text bold fontSize="13px">Collateral Vault 1</Text></Row>
        <Row><Text fontSize="13px">0xBC1e8dE7D302F50714c99814340A3bF2639Fd55b</Text></Row>
        <Row><Text bold fontSize="13px">Collateral Value 2</Text></Row>
        <Row><Text fontSize="13px">0x2f3Da052FaAE4Df8fF98BC9029a32920AD0aFcA1</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ContractInfo
