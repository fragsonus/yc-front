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

const SDRInfo = () => {
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
        <Row><Text bold>ycSDR Token</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>Yumcha second dimSim is pegged to a basket of world currencies.</Text></Row>
        <Row><Text bold fontSize="13px" style={{textAlign: "justify"}}>IMF Special Drawing Rights</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>The SDR is an international reserve asset created by the IMF to supplement the official reserves of its member countries. </Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>A basket of currencies defines the SDR:</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- US dollar</Text><Text fontSize="13px">40%</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- Euro</Text><Text fontSize="13px">33%</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- Chinese Yuan</Text ><Text fontSize="13px">11%</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- Japanese Yen</Text><Text fontSize="13px">8%</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>- British Pound</Text><Text fontSize="13px">8%</Text></Row>
        <Row><Text fontSize="13px" style={{textAlign: "justify"}}>You can find the price and calculation of the SDR rate here: <a href="https://www.imf.org/external/np/fin/data/rms_sdrv.aspx">https://www.imf.org/external/np/fin/data/rms_sdrv.aspx</a></Text></Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default SDRInfo
