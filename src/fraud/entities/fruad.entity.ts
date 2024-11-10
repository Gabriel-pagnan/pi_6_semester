import { Column, Table, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Input } from "../../dataset/entities/input.entity";

@Table
export class Fraud extends Model {
    @Column({ field: 'is_fraud' })
    is_fraud: number;

    @ForeignKey(() => Input)
    @Column({ field: 'input_id' })
    input_id: number;

    @BelongsTo(() => Input)
    input: Input;

    @Column({field: 'createdAt'})
    createdAt: Date;

    @Column({field: 'updatedAt'})
    updatedAt: Date;
}