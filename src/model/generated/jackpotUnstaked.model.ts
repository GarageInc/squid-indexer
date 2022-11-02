import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class JackpotUnstaked {
  constructor(props?: Partial<JackpotUnstaked>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: false})
  type!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  jackpotPositionId!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  zooPositionId!: bigint

  @Index_()
  @Column_("text", {nullable: false})
  owner!: string

  @Index_()
  @Column_("text", {nullable: false})
  beneficiary!: string

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("text", {nullable: false})
  transactionHash!: string
}
