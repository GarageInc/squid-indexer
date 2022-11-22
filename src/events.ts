import * as arenaAbi from './abi/battle-arena-abi'
import * as stakerAbi from './abi/battle-staker-abi'
import * as voterAbi from './abi/battle-voter-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as xZooAbi from './abi/xZoo'
import * as jackpotAbi from './abi/jackpot'

export const CreatedStakerPositionT = arenaAbi.events['CreatedStakerPosition(uint256,address,uint256)']
export const CreatedVotingPositionT =
  arenaAbi.events['CreatedVotingPosition(uint256,address,uint256,uint256,uint256,uint256)']
export const RemovedStakerPositionT = arenaAbi.events['RemovedStakerPosition(uint256,address,uint256)']
export const LiquidatedVotingPositionT =
  arenaAbi.events['LiquidatedVotingPosition(uint256,address,uint256,address,uint256,uint256,uint256)']
export const AddedZooToVotingT = arenaAbi.events['AddedZooToVoting(uint256,address,uint256,uint256,uint256,uint256)']
export const AddedDaiToVotingT = arenaAbi.events['AddedDaiToVoting(uint256,address,uint256,uint256,uint256,uint256)']
export const WithdrawedDaiFromVotingT =
  arenaAbi.events['WithdrawedDaiFromVoting(uint256,address,uint256,address,uint256,uint256)']
export const WithdrawedZooFromVotingT =
  arenaAbi.events['WithdrawedZooFromVoting(uint256,address,uint256,uint256,uint256,address)']
export const PairedNftT = arenaAbi.events['PairedNft(uint256,uint256,uint256,uint256)']
export const ChosenWinnerT = arenaAbi.events['ChosenWinner(uint256,uint256,uint256,bool,uint256,uint256)']
export const ClaimedRewardFromStakingT =
  arenaAbi.events['ClaimedRewardFromStaking(uint256,address,uint256,address,uint256,uint256)']
export const ClaimedRewardFromVotingT =
  arenaAbi.events['ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256)']

export const ClaimedIncentiveRewardFromStakingT =
  stakerAbi.events['ClaimedIncentiveRewardFromVoting(address,address,uint256,uint256)']
export const ClaimedIncentiveRewardFromVotingT =
  voterAbi.events['ClaimedIncentiveRewardFromVoting(address,address,uint256,uint256)']

export const VotedForCollectionT = vemodelAbi.events['VotedForCollection(address,address,uint256)']
export const ZooUnlockedT = vemodelAbi.events['ZooUnlocked(address,address,uint256)']

export const TokensGivenT = faucetAbi.events['tokensGiven(address)']

export const XZooStakedT = xZooAbi.events['ZooStaked(address,address,uint256,uint256)']
export const xZooWithdrawnT = xZooAbi.events['ZooWithdrawal(address,address,uint256,uint256)']
export const xZooClaimedT = xZooAbi.events['Claimed(address,address,uint256,uint256)']

export const JackpotStakedT = jackpotAbi.events['Staked(uint256,address,address,uint256)']
export const JackpotUnstakedT = jackpotAbi.events['Unstaked(uint256,address,address,uint256)']
export const JackpotWinnedT = jackpotAbi.events['WinnerChoosed(uint256,uint256)']
export const JackpotClaimedT = jackpotAbi.events['Claimed(uint256,uint256,address,address,uint256)']

export const TransferStaker = stakerAbi.events['Transfer(address,address,uint256)']
export const TransferVoter = voterAbi.events['Transfer(address,address,uint256)']
export const TransferXZoo = xZooAbi.events['Transfer(address,address,uint256)']
export const TransferJackpot = jackpotAbi.events['Transfer(address,address,uint256)']
