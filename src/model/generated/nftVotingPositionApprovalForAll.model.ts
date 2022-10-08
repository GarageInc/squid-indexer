import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class NftVotingPositionApprovalForAll {
  constructor(props?: Partial<NftVotingPositionApprovalForAll>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  owner!: string | undefined | null

  @Column_("text", {nullable: true})
  operator!: string | undefined | null

  @Column_("bool", {nullable: false})
  approved!: boolean
}
