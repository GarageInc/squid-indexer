import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Project} from "./project.model"
import {CreatedVotingPosition} from "./createdVotingPosition.model"
import {PairedNft} from "./pairedNft.model"

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
    @Column_("text", {nullable: false})
    staker!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingPositionId!: bigint

    @Column_("bool", {nullable: false})
    isDeleted!: boolean

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @ManyToOne_(() => Project, {nullable: true})
    project!: Project

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    author!: string

    @Column_("int4", {nullable: false})
    league!: number

    @OneToMany_(() => CreatedVotingPosition, e => e.stakedPosition)
    votingPositions!: CreatedVotingPosition[]

    @OneToMany_(() => PairedNft, e => e.fighterPosition1)
    fighters1!: PairedNft[]

    @OneToMany_(() => PairedNft, e => e.fighterPosition2)
    fighters2!: PairedNft[]
}
