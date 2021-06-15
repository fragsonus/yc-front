import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

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

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const ycPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = ycPrice.times(circSupply)

  let yumchaPerBlock = 0
  if (farms && farms[0] && farms[0].yumchaPerBlock) {
    yumchaPerBlock = new BigNumber(farms[0].yumchaPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Row><Text bold>Yumcha Tokenomics</Text></Row>

        <Row><Text bold fontSize="13px">Yumcha tokens earn revenue from the following sources:</Text></Row>
        <Row><Text fontSize="13px">- Yield farming of dimSim reserves from external farms</Text></Row>
        <Row><Text fontSize="13px">- Arbitrage from the minting and buyback of dimSims</Text></Row>

        <Row><Text bold fontSize="13px">Yumcha tokens are provided to liquidity providers</Text></Row>
        <Row>
          <Text fontSize="13px">The amount minted decreases by 40% each year.</Text>
        </Row>
        <Row>
          <Text fontSize="13px">- yumcha per block for the first year</Text>
          <Text bold fontSize="13px">1.0888</Text>
        </Row>
        <Row>
          <Text fontSize="13px">- yumcha per block for the second year</Text>
          <Text bold fontSize="13px">0.6533</Text>
        </Row>
        <Row>
          <Text fontSize="13px">- yumcha per block for the third year</Text>
          <Text bold fontSize="13px">0.3920</Text>
        </Row>
        <Row>
          <Text fontSize="13px">- and so on.</Text>
        </Row>
        <Row>
          <Text fontSize="13px">This will continue for the following years and the max supply of Yumcha will approach 28,613,664.</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
