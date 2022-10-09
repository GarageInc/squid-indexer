import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ClaimedRewardFromStaking {
  constructor(props?: Partial<ClaimedRewardFromStaking>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Column_("text", {nullable: true})
  staker!: string | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingPositionId!: bigint

  @Index_()
  @Column_("text", {nullable: true})
  beneficiary!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  yTokenReward!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  daiReward!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("text", {nullable: false})
  transactionHash!: string
}
