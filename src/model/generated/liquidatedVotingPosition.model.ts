import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class LiquidatedVotingPosition {
    constructor(props?: Partial<LiquidatedVotingPosition>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    currentEpoch!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    voter!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    stakingPositionId!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    beneficiary!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    votingPositionId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    zooReturned!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    daiReceived!: bigint

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    transactionHash!: string
}
