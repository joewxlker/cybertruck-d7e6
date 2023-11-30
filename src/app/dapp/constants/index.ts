import { ChainId } from '@thirdweb-dev/sdk'

export const CHAIN_ID: SupportedChainIds = ChainId.Mainnet

export * from './abi'
export * from './address'

export const etherscanUrl: {[k in SupportedChainIds] : string } = {
    [ChainId.Mainnet]: 'https://etherscan.io/',
    [ChainId.Goerli]: 'https://goerli.etherscan.io/'
}

export type SupportedChainIds = ChainId.Mainnet | ChainId.Goerli

export const callMethodNames : {[ k in SupportedChainIds] : string } = {
    [ChainId.Mainnet]: 'flip',
    [ChainId.Goerli]: 'flip'
}

export const callEventNames : {[ k in SupportedChainIds] : string } = {
    [ChainId.Mainnet]: 'FlipResults',
    [ChainId.Goerli]: 'FlipResults'
}