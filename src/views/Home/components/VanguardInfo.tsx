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

const VanguardInfo = () => {
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
        <Row><Text bold>ycVT Token</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Yumcha first dimSim is pegged to a comprehensive world stocks ETF which provides maximum diversification at a low expense base.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Vanguard World Total Stocks</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Vanguard Total World Stock Index Fund offers unrivaled diversification. This comprehensive portfolio holds a piece of every investable stock in the world and marries it to a low fee that should be tough to beat over the long run. It earns a Morningstar Analyst Rating of Gold.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>This fund tracks the FTSE Global All-Cap Index, which includes stocks of all sizes listed in developed and emerging markets. It weights them by market capitalization, an approach that benefits investors by capturing the market’s collective opinion of each stock’s value while keeping turnover low. Market-cap weighting can be tough to beat because the market tends to accurately value stocks over the long run. Occasionally it will increase the fund’s exposure to expensive stocks when investors get excited about an area of the market. But this doesn’t undermine its long-term efficacy.</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default VanguardInfo
