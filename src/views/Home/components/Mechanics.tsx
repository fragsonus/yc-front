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

const Mechanics = () => {
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
        <Row><Text bold>Mechanics</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The following example to demonstrates the mechanics of the peg mechanism which generates profit for yumcha holders in either direction.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Base Example</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>There are 1000 dimSim minted (ycVT) that follow the ETF VT which is priced at 100. The total reserve required would equal (1000 ycVT x 100 price of VT) = 100k.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- 10k (10%) of this would be held by Perimetry Pty Ltd where a long position of 1000 VTs would be held.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- 10k (10%) of the reserve would be held in cryptocurrency wallets as stable coins to ensure liquidity.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- 10k (10%) of the reserve would be held in cryptocurrency wallets as yumcha tokens.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- 70k (70%) of the reserve would be held in yield farms in various platforms across multiple chains. These yields allow for buyback of yumcha tokens and also provide additional buffer for the reserve.</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default Mechanics
