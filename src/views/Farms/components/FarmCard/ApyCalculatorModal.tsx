import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { calculateCakeEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'
import { Address } from 'config/constants/types'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  cakePrice,
  apy,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const farmApy = apy.times(new BigNumber(100)).toNumber()
  const oneThousandDollarsWorthOfCake = 1000 / cakePrice.toNumber()

  const cakeEarnedPerThousand1D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 1, farmApy, cakePrice })
  const cakeEarnedPerThousand7D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 7, farmApy, cakePrice })
  const cakeEarnedPerThousand30D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 30, farmApy, cakePrice })
  const cakeEarnedPerThousand365D = calculateCakeEarnedPerThousandDollars({ numberOfDays: 365, farmApy, cakePrice })

  return (
    <Modal title="Information" onDismiss={onDismiss}>
      <Description fontSize="12px" color="textSubtle">
        Yumcha is the project token which is provided to liquidity stakers and earns revenue generated from yields from the collateral.
      </Description>
      <Description fontSize="12px" color="textSubtle">
        ycVT token is pegged to VT - Vanguard World Total Stocks ETF which covers equities all over the world by market cap.
      </Description>
      <Description fontSize="12px" color="textSubtle">
        ycSDR token is pegged to SDR - IMF Special Drawing Rights which is a basket of world currencies.
      </Description>
      <Description fontSize="12px" color="textSubtle">
        You can find more information in the docs located <a href="/yc-front/info">here</a>.
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={`https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
