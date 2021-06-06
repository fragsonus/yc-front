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

const MechanicsUp = () => {
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
        <Row><Text bold>Mechanics (Scenario Up)</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>Price of ycVT stays at 100 whilst VT increases to 110</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The reserve requirement is now (1000 ycVT x 110 price of VT) = 110k.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>A profit of 10k is generated by the Perimetry position which is passed back to the reserve. Assets now equal 110k.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The reserve would be used to purchase ycVT until the price is back to parity. Say 100 ycVT is purchased at an average price of 105 which costs 10.5k. Assets are now equal to 110k - 10.5k = 99.5k.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The circulating supply of ycVT has dropped and now the reserve requirement is (900 ycVT x 110 price of VT) = 99k.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>There is now an excess of assets (99.5k) over the reserve (99k) allowing for further buyback of yumcha.</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The position with Perimetry will be decreased to 900 VTs to reflect the decreased ycVT circulation.</Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default MechanicsUp
