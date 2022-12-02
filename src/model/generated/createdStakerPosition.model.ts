import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Project} from "./project.model"

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
}
