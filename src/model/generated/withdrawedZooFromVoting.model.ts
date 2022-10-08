import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class WithdrawedZooFromVoting {
  constructor(props?: Partial<WithdrawedZooFromVoting>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Column_("text", {nullable: true})
  voter!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingPositionId!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  votingPositionId!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  zooNumber!: bigint

  @Column_("text", {nullable: true})
  beneficiary!: string | undefined | null
}