import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class JackpotStaked {
    constructor(props?: Partial<JackpotStaked>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    type!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    positionId!: bigint

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    jackpotPositionId!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    beneficiary!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("bool", {nullable: false})
    isDeleted!: boolean

    @Index_()
    @Column_("text", {nullable: false})
    author!: string
}
