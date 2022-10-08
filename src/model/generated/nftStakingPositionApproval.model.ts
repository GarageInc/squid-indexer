import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class NftStakingPositionApproval {
  constructor(props?: Partial<NftStakingPositionApproval>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  owner!: string | undefined | null

  @Column_("text", {nullable: true})
  approved!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  tokenId!: bigint
}
