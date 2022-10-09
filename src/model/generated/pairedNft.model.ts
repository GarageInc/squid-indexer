import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PairedNft {
  constructor(props?: Partial<PairedNft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  fighter1!: bigint

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  fighter2!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  pairIndex!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("text", {nullable: false})
  transactionHash!: string
}
