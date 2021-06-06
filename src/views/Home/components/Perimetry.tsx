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

const Perimetry = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const eggPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = eggPrice.times(circSupply)
  const totalValue = useTotalValue()

  let yumchaPerBlock = 0
  if (farms && farms[0] && farms[0].yumchaPerBlock) {
    yumchaPerBlock = new BigNumber(farms[0].yumchaPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Row><Text bold>Asset Tokenisation</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>There are two primary implementations of asset tokenisation:</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- Asset-backed tokens (e.g. Tether) are backed one-to-one by the physical good that they represent. It is simple however there are issues relating to the ownership of the property.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- Synthetic tokens (e.g. mAssets by Mirror) provide synthetic exposure to the physical good without requiring one-to-one backing. These require higher levels of collateral to offset the market risk of underlying property.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>DimSim Tokenisation</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Yumcha adopts a hybrid method where holds collateral (like Mirror) but it transfers the market risk to Perimetry Pty Ltd to optimise capital efficiency.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Yumcha enters into a contract with Perimetry whereby the price variation of the underlying asset (e.g. VT) is transferred between the parties at a regular basis. That is Yumcha holds a long position with Perimetry.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Perimetry Pty Ltd holds a short position with Yumcha. To manage its own risk, it will hold an equal but opposite long position with brokers.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>In this arrangement there is no transfer of ownership of real shares but only a transfer of market risk from Yumcha to Perimetry to brokers.</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default Perimetry
