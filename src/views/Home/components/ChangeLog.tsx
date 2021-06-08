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

const ChangeLog = () => {
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
        <Row><Text bold>Yumcha Phases</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Phase 1 Proof of Concept - 28 March 2021 to 27 May 2021</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>This phase launched Yumcha token and Masterchef as well as ycVT, the first dimSim that is pegged to VT (Vanguard World Total Stocks ETF).</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Safety and reliability were key factors in the decision to fork the contract code from Goose Defi. Pancakeswap was chosen for the provision of liquidity tokens and developers LP tokens have been locked on Unicrypt.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>We trialled various peg methodologies including asset backed and synthetics. We also experienced a substantial stress test on the peg which provided valuable information on optimal strategies.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Phase 2 Optimisation - 28 May 2021 to Current</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Registration of Perimetry Ptd Ltd to bridge the gap between real world shares and cryptocurrency.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Commencement of yield farming with collateral to buyback and burn yumcha tokens.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Updated front end to address concerns from users from POC stage.</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ChangeLog
