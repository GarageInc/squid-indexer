import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {CreatedStakerPosition} from "./createdStakerPosition.model"

@Entity_()
export class Project {
  constructor(props?: Partial<Project>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  address!: string

  @Index_()
  @Column_("text", {nullable: false})
  name!: string

  @Index_()
  @Column_("text", {nullable: false})
  symbol!: string

  @OneToMany_(() => CreatedStakerPosition, e => e.project)
  positions!: CreatedStakerPosition[]
}
