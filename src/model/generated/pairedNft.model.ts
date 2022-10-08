import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PairedNft {
  constructor(props?: Partial<PairedNft>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  fighter1!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  fighter2!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  pairIndex!: bigint
}
