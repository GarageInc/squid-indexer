import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ZooUnlocked {
  constructor(props?: Partial<ZooUnlocked>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: false})
  voter!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  positionId!: bigint

  @Index_()
  @Column_("text", {nullable: false})
  collection!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("text", {nullable: false})
  transactionHash!: string
}
