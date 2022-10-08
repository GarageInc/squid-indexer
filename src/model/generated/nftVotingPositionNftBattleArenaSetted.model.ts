import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class NftVotingPositionNftBattleArenaSetted {
  constructor(props?: Partial<NftVotingPositionNftBattleArenaSetted>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  nftBattleArena!: string | undefined | null
}
