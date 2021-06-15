import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, useTotalValue, useTotalValueYC, useTotalValueYCStaked } from '../../../state/hooks'

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

const Statistics = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const ycPrice = usePriceCakeBusd()

  const totalValue = useTotalValue()
  const totalValueYC = useTotalValueYC()
  const totalValueYCStaked = useTotalValueYCStaked()
  const burnedPools = totalValueYC.minus(totalValueYCStaked)
  const burnedPoolsYC = burnedPools

  const circSupply = totalSupply ? totalSupply.minus(burnedBalance).minus(burnedPoolsYC) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = ycPrice.times(circSupply)

  const RatioYC = totalValueYC.div(marketCap).times(100)

  let yumchaPerBlock = 0
  if (farms && farms[0] && farms[0].yumchaPerBlock) {
    yumchaPerBlock = new BigNumber(farms[0].yumchaPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Row><Text bold>Statistics</Text></Row>
        <Row><Text bold fontSize="13px">The current circulating yumcha supply:</Text></Row>
        <Row>
          <Text fontSize="13px">- {TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="13px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="13px">- Yumcha Tokens Burned</Text>
          <CardValue fontSize="13px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        {/* <Row>
          <Text fontSize="13px">- Yumcha within Pools Burned</Text>
          <CardValue fontSize="13px" value={burnedPoolsYC.toNumber()} decimals={0} />
        </Row> */}
        <Row>
          <Text fontSize="13px">- {TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="13px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="13px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="13px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row><Text bold fontSize="13px">Total Value of Yumcha Related Assets:</Text></Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>Liquidity Pools with YC paired</Text>
        </Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>- Staked</Text>
          <CardValue fontSize="13px" value={totalValueYCStaked.toNumber()} prefix="$" decimals={0} />
        </Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>- Burned / Locked / Unstaked</Text>
          <CardValue fontSize="13px" value={burnedPools.toNumber()} prefix="$" decimals={0} />
        </Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>All other pools</Text>
          <CardValue fontSize="13px" value={totalValue.toNumber()-totalValueYC.toNumber()} prefix="$" decimals={0} />
        </Row>
        <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>The total value of all assets is:</Text>
          <CardValue fontSize="13px" value={totalValue.toNumber()} prefix="$" decimals={0} />
        </Row>
        {/* <Row>
          <Text fontSize="13px" style={{textAlign: "justify"}}>YC Pools as ratio of Market Cap:</Text>
          <CardValue fontSize="13px" value={RatioYC.toNumber()} prefix="0." decimals={0} />
        </Row> */}
      </CardBody>
    </StyledCakeStats>
  )
}

export default Statistics
