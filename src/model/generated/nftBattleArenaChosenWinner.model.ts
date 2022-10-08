import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NftBattleArenaChosenWinner {
  constructor(props?: Partial<NftBattleArenaChosenWinner>) {
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

  @Column_("bool", {nullable: false})
  winner!: boolean

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  pairIndex!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  playedPairsAmount!: bigint
}
