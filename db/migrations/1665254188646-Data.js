module.exports = class Data1665254188646 {
  name = 'Data1665254188646'

  async up(db) {
    await db.query(`CREATE TABLE "added_dai_to_voting" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "voting_position_id" numeric NOT NULL, "amount" numeric NOT NULL, "votes" numeric NOT NULL, CONSTRAINT "PK_9e1e399cbc921bb8d6aedb65ad5" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "added_zoo_to_voting" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "voting_position_id" numeric NOT NULL, "amount" numeric NOT NULL, "votes" numeric NOT NULL, CONSTRAINT "PK_f1b19d5fc640fd1b74584b053c6" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "chosen_winner" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "fighter1" numeric NOT NULL, "fighter2" numeric NOT NULL, "winner" boolean NOT NULL, "pair_index" numeric NOT NULL, "played_pairs_amount" numeric NOT NULL, CONSTRAINT "PK_ba4bdf67df8f2b9baf947aef79a" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "claimed_reward_from_staking" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "staker" text, "staking_position_id" numeric NOT NULL, "beneficiary" text, "y_token_reward" numeric NOT NULL, "dai_reward" numeric NOT NULL, CONSTRAINT "PK_88b9a4dd94bc65e896a84aeb4ea" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "claimed_reward_from_voting" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "beneficiary" text, "y_token_reward" numeric NOT NULL, "dai_reward" numeric NOT NULL, "voting_position_id" numeric NOT NULL, CONSTRAINT "PK_95804e8f808711ad53822a99405" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "created_staker_position" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "staker" text, "staking_position_id" numeric NOT NULL, "is_deleted" boolean NOT NULL, CONSTRAINT "PK_4210a7c4e3f2e4db712229ac488" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "created_voting_position" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "dai_amount" numeric NOT NULL, "votes" numeric NOT NULL, "voting_position_id" numeric NOT NULL, "is_deleted" boolean NOT NULL, CONSTRAINT "PK_9fb98405e3234d450410afc5cdd" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "liquidated_voting_position" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "beneficiary" text, "voting_position_id" numeric NOT NULL, "zoo_returned" numeric NOT NULL, "dai_received" numeric NOT NULL, CONSTRAINT "PK_072eff86807e01c0de2278f2597" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "paired_nft" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "fighter1" numeric NOT NULL, "fighter2" numeric NOT NULL, "pair_index" numeric NOT NULL, CONSTRAINT "PK_23ba08ff579bcd1c08f595ae614" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "removed_staker_position" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "staker" text, "staking_position_id" numeric NOT NULL, CONSTRAINT "PK_5d7ff26fcdcda8555848634f964" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "withdrawed_dai_from_voting" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "voting_position_id" numeric NOT NULL, "dai_number" numeric NOT NULL, "beneficiary" text, CONSTRAINT "PK_7d162daaf6e3fc062a71e9c593f" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "withdrawed_zoo_from_voting" ("id" character varying NOT NULL, "current_epoch" numeric NOT NULL, "voter" text, "staking_position_id" numeric NOT NULL, "voting_position_id" numeric NOT NULL, "zoo_number" numeric NOT NULL, "beneficiary" text, CONSTRAINT "PK_3ac6fcf3a0553b9b24646185c0a" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "added_dai_to_voting"`)
    await db.query(`DROP TABLE "added_zoo_to_voting"`)
    await db.query(`DROP TABLE "chosen_winner"`)
    await db.query(`DROP TABLE "claimed_reward_from_staking"`)
    await db.query(`DROP TABLE "claimed_reward_from_voting"`)
    await db.query(`DROP TABLE "created_staker_position"`)
    await db.query(`DROP TABLE "created_voting_position"`)
    await db.query(`DROP TABLE "liquidated_voting_position"`)
    await db.query(`DROP TABLE "paired_nft"`)
    await db.query(`DROP TABLE "removed_staker_position"`)
    await db.query(`DROP TABLE "withdrawed_dai_from_voting"`)
    await db.query(`DROP TABLE "withdrawed_zoo_from_voting"`)
  }
}
