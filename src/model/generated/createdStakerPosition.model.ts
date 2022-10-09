import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class CreatedStakerPosition {
  constructor(props?: Partial<CreatedStakerPosition>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  currentEpoch!: bigint

  @Index_()
  @Column_("text", {nullable: true})
  staker!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  stakingPositionId!: bigint

  @Column_("bool", {nullable: false})
  isDeleted!: boolean

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date
}
