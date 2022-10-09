import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class LiquidatedVotingPosition {
  constructor(props?: Partial<LiquidatedVotingPosition>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Index_()
  @Column_("text", {nullable: true})
  voter!: string | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingPositionId!: bigint

  @Index_()
  @Column_("text", {nullable: true})
  beneficiary!: string | undefined | null

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  votingPositionId!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  zooReturned!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  daiReceived!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date
}
