import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Stats {
  constructor(props?: Partial<Stats>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: false})
  key!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  value!: bigint

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  updatedAt!: Date
}
