import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, BaseLayout, LinkExternal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt , faPlayCircle , faBook } from '@fortawesome/free-solid-svg-icons'
import { faTelegram , faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Info } from 'react-feather'
import Divider from './components/Divider'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import Mechanics from './components/Mechanics'
import MechanicsUp from './components/MechanicsUp'
import MechanicsDown from './components/MechanicsDown'
import ChangeLog from './components/ChangeLog'
import Perimetry from './components/Perimetry'
import VanguardInfo from './components/VanguardInfo'
import SDRInfo from './components/SDRInfo'
import ContractInfo from './components/ContractInfo'
import Statistics from './components/Statistics'
import InfoCard from './components/InfoCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/egg/3.png');
  // background-repeat: no-repeat;
  // background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: center;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 16;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const faplaycircle = <FontAwesomeIcon icon={faPlayCircle} />
const fatacho = <FontAwesomeIcon icon={faTachometerAlt} />
const fabook = <FontAwesomeIcon icon={faBook} />
const fatelegram = <FontAwesomeIcon icon={faTelegram} />
const fatwitter = <FontAwesomeIcon icon={faTwitter} />

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      {/* <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Yumcha')}
        </Heading>
        <Text>{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}</Text>
      </Hero> */}
      <Flex style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <a href="/" style={{ fontSize: '60px', color: '#ffffff', textAlign: 'center', fontFamily: 'Pacifico', marginBottom: '32px'}}>
          Yumcha
        </a>
      </Flex>
      <Flex justifyContent="center" style={{ fontSize: '50px', color: '#ffffff'}}>
        {/* <a href="/yc-farms" style={{paddingRight: '20px'}}>{faplaycircle}</a>
        <a href="dashboard" style={{paddingRight: '8px'}}>{fatacho}</a>
        <a href="https://docs.yumcha.finance/" style={{paddingRight: '20px'}}>{fabook}</a>
        <a href="https://t.me/yumchafinance" style={{paddingRight: '20px'}}>{fatelegram}</a>
        <a href="https://twitter.com/yumchaf">{fatwitter}</a> */}
      </Flex>
      <Divider />
      <div>
        <Cards>
          <Statistics />
          <InfoCard />
          <CakeStats />
          <ChangeLog />
          <Perimetry />
          <VanguardInfo />
          <SDRInfo />
          <Mechanics />
          <MechanicsUp />
          <MechanicsDown />
          <ContractInfo />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
