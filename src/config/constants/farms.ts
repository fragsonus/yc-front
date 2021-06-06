import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'yumcha-BUSD v2',
    lpAddresses: {
      97: '',
      56: '0xB8e9F08AF28CA20F9F93e7CA3CdA37d63cB2e99A',
    },
    tokenSymbol: 'yumcha',
    tokenAddresses: {
      97: '',
      56: '0xc7d0ce2961396d02059f06e8df7dd37e6809d478',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'yumcha-BNB v2',
    lpAddresses: {
      97: '',
      56: '0xb3aed717ff994eaac638f005997a7a06d1731cdf',
    },
    tokenSymbol: 'yumcha',
    tokenAddresses: {
      97: '',
      56: '0xc7d0ce2961396d02059f06e8df7dd37e6809d478',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'yumcha-BNB v1',
    lpAddresses: {
      97: '',
      56: '0xE716FbCE470e7AADdb5f149548A70347d38a0B1D',
    },
    tokenSymbol: 'yumcha',
    tokenAddresses: {
      97: '',
      56: '0xc7d0ce2961396d02059f06e8df7dd37e6809d478',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    risk: 3,
    lpSymbol: 'BNB-BUSD v2',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 1,
    lpSymbol: 'ycVT-BUSD v2',
    lpAddresses: {
      97: '',
      56: '0x76d3aE094A8aB49dB6C551a4f2C304Ab431a966C',
    },
    tokenSymbol: 'ycVT',
    tokenAddresses: {
      97: '',
      56: '0x7d0943bd8225848ecd84cdec36c39f4470494f07',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'yumcha',
    lpAddresses: {
      97: '',
      56: '0xB8e9F08AF28CA20F9F93e7CA3CdA37d63cB2e99A', // yumcha-BUSD LP
    },
    tokenSymbol: 'yumcha',
    tokenAddresses: {
      97: '',
      56: '0xc7d0ce2961396d02059f06e8df7dd37e6809d478',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'yumcha-BUSD v1',
    lpAddresses: {
      97: '',
      56: '0xD7c43A10F6e92c6F1aB13096AE4a08DD8F8c3c8A',
    },
    tokenSymbol: 'yumcha',
    tokenAddresses: {
      97: '',
      56: '0xc7d0ce2961396d02059f06e8df7dd37e6809d478',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ycVT-BUSD v1',
    lpAddresses: {
      97: '',
      56: '0x90e0a1d4d1408Ec4eD7aFc0F6fCC3De034831404',
    },
    tokenSymbol: 'ycVT',
    tokenAddresses: {
      97: '',
      56: '0x7d0943bd8225848ecd84cdec36c39f4470494f07',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'ycVT-yumcha v1',
    lpAddresses: {
      97: '',
      56: '0x2a379957467ee0168FE62aE49E462Cb5fC15Be68',
    },
    tokenSymbol: 'ycVT',
    tokenAddresses: {
      97: '',
      56: '0x7d0943bd8225848ecd84cdec36c39f4470494f07',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 14,
    risk: 5,
    lpSymbol: 'ycCMC-BUSD v2',
    lpAddresses: {
      97: '',
      56: '0x4402980E403195280F05a76D794E77B1Ff9412F0',
    },
    tokenSymbol: 'ycCMC',
    tokenAddresses: {
      97: '',
      56: '0xa955809418cd146c492918d50c680f1fb4cefe40',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
