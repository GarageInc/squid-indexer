import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class EpochUpdated {
  constructor(props?: Partial<EpochUpdated>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  date!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  newEpoch!: bigint
}
