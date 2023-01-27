import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {CreatedStakerPosition} from "./createdStakerPosition.model"
import {CreatedVotingPosition} from "./createdVotingPosition.model"
import {PairedNft} from "./pairedNft.model"

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
    positionsStaked!: CreatedStakerPosition[]

    @OneToMany_(() => CreatedVotingPosition, e => e.project)
    positionsVoted!: CreatedVotingPosition[]

    @OneToMany_(() => PairedNft, e => e.project1)
    battleFighters1!: PairedNft[]

    @OneToMany_(() => PairedNft, e => e.project2)
    battleFighters2!: PairedNft[]
}
