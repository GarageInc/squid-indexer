import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class CreatedVotingPosition {
  constructor(props?: Partial<CreatedVotingPosition>) {
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

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  daiAmount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  votes!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  votingPositionId!: bigint

  @Column_("bool", {nullable: false})
  isDeleted!: boolean

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date
}
