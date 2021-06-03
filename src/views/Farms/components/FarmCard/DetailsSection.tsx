import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <a
          href={`https://dex.guru/token/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}-bsc`}
        >
          <Text bold style={{fontSize: "18px"}}>Chart</Text>
        </a>
        <a
          href={
            isTokenOnly
              ? `https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.pancakeswap.finance/#/swap?inputCurrency=${quoteTokenAdresses[process.env.REACT_APP_CHAIN_ID]}&outputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
        >
          <Text bold style={{fontSize: "18px"}}>Buy</Text>
        </a>
        <a
          href={
            isTokenOnly
              ? `https://exchange.pancakeswap.finance/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`
          }
        >
          <Text bold style={{fontSize: "18px"}}>Add</Text>
        </a>
        <a
          href={
            isTokenOnly
              ? `https://exchange.pancakeswap.finance/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.pancakeswap.finance/#/remove/${liquidityUrlPathParts}`
          }
        >
          <Text bold style={{fontSize: "18px"}}>Rmv</Text>
        </a>
      </Flex>
      {/* {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )} */}
      {/* <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex> */}
    </Wrapper>
  )
}

export default DetailsSection
