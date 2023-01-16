import * as arenaAbi from './abi/generated/battle-arena-abi'
import * as stakerAbi from './abi/generated/battle-staker-abi'
import * as voterAbi from './abi/generated/battle-voter-abi'
import * as vemodelAbi from './abi/generated/ve-model-abi'
import * as faucetAbi from './abi/generated/battle-faucet-abi'
import * as xZooAbi from './abi/generated/xZoo'
import * as jackpotAbi from './abi/generated/jackpot'
import * as erc721 from './abi/generated/erc721'
import * as erc20 from './abi/generated/erc20'

export const CreatedStakerPositionT = arenaAbi.events.CreatedStakerPosition
export const CreatedVotingPositionT = arenaAbi.events.CreatedVotingPosition
export const RemovedStakerPositionT = arenaAbi.events.RemovedStakerPosition
export const LiquidatedVotingPositionT = arenaAbi.events.LiquidatedVotingPosition
export const AddedZooToVotingT = arenaAbi.events.AddedZooToVoting
export const AddedDaiToVotingT = arenaAbi.events.AddedDaiToVoting
export const WithdrawedDaiFromVotingT = arenaAbi.events.WithdrawedDaiFromVoting
export const WithdrawedZooFromVotingT = arenaAbi.events.WithdrawedZooFromVoting
export const PairedNftT = arenaAbi.events.PairedNft
export const ChosenWinnerT = arenaAbi.events.ChosenWinner
export const ClaimedRewardFromStakingT = arenaAbi.events.ClaimedRewardFromStaking
export const ClaimedRewardFromVotingT = arenaAbi.events.ClaimedRewardFromVoting
export const ClaimedIncentiveRewardFromStakingT = stakerAbi.events.ClaimedIncentiveRewardFromVoting
export const ClaimedIncentiveRewardFromVotingT = voterAbi.events.ClaimedIncentiveRewardFromVoting

export const VotedForCollectionT = vemodelAbi.events.VotedForCollection
export const ZooUnlockedT = vemodelAbi.events.ZooUnlocked

export const ZooGivenT = faucetAbi.events.ZooGiven

export const XZooStakedT = xZooAbi.events.ZooStaked
export const xZooWithdrawnT = xZooAbi.events.ZooWithdrawal
export const xZooClaimedT = xZooAbi.events.Claimed

export const JackpotStakedT = jackpotAbi.events.Staked
export const JackpotUnstakedT = jackpotAbi.events.Unstaked
export const JackpotWinnedT = jackpotAbi.events.WinnerChosen
export const JackpotClaimedT = jackpotAbi.events.Claimed

export const TransferERC721T = erc721.events.Transfer

export const TransferErc20T = erc20.events.Transfer

console.log('TransferErc20T', TransferErc20T.topic)
console.log('TransferERC721T', TransferERC721T.topic)
