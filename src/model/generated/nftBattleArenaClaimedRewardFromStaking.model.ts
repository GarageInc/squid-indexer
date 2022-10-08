import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NftBattleArenaClaimedRewardFromStaking {
  constructor(props?: Partial<NftBattleArenaClaimedRewardFromStaking>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Column_("text", {nullable: true})
  staker!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingPositionId!: bigint

  @Column_("text", {nullable: true})
  beneficiary!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  yTokenReward!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  daiReward!: bigint
}
