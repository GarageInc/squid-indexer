import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class FaucetGiven {
  constructor(props?: Partial<FaucetGiven>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: false})
  user!: string

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date
}
