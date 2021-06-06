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

const InfoCard = () => {
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
        <Row><Text bold>What is yumcha?</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Yumcha produces pegged assets (dimSims) which simulate the price of real-world assets. The collateral is used to generate revenue for yumcha tokens via buyback and burn.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Pegged dimSims</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Each dimSim that is in circulation is backed by a reserve of equivalent value and can be exchanged for stable cryptocurrency of equivalent value.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The reserve is hedged against the price movement of real-world asset via Perimetry Pty Ltd (based in Australia).</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The reserve is utilised to collect yields from farming platforms. These yields are used to buyback yumcha tokens.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Liquidity provision</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Providing liquidity via PancakeSwapV2 and staking on this website allows you to earn yumcha tokens. In addition, liquidity providers also earn 0.17% from every transaction.</Text></Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>The total value of assets staked is:</Text>
          <CardValue fontSize="13px" value={totalValue.toNumber()} prefix="$" decimals={2} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default InfoCard
