import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Project} from "./project.model"
import {CreatedStakerPosition} from "./createdStakerPosition.model"

@Entity_()
export class CreatedVotingPosition {
    constructor(props?: Partial<CreatedVotingPosition>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    currentEpoch!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    voter!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingPositionId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    daiAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    votes!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    votingPositionId!: bigint

    @Column_("bool", {nullable: false})
    isDeleted!: boolean

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @ManyToOne_(() => Project, {nullable: true})
    project!: Project

    @Index_()
    @Column_("text", {nullable: false})
    author!: string

    @Index_()
    @ManyToOne_(() => CreatedStakerPosition, {nullable: true})
    stakedPosition!: CreatedStakerPosition
}
