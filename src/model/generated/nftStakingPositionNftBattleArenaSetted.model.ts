import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class NftStakingPositionNftBattleArenaSetted {
  constructor(props?: Partial<NftStakingPositionNftBattleArenaSetted>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  nftBattleArena!: string | undefined | null
}
