import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class BaseZooFunctionsOwnershipTransferred {
  constructor(props?: Partial<BaseZooFunctionsOwnershipTransferred>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  previousOwner!: string | undefined | null

  @Column_("text", {nullable: true})
  newOwner!: string | undefined | null
}
