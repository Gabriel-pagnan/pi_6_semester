import { Column, Table, Model, DataType } from "sequelize-typescript";

@Table
export class Input extends Model {
    @Column({ field: 'trans_date_trans_time' })
    trans_date_trans_time: Date;

    @Column({ field: 'cc_num', type: DataType.STRING })
    cc_num: string;

    @Column({ field: 'merchant' })
    merchant: string;
    
    @Column({ field: 'category' })
    category: string;

    @Column({ field: 'amt', type: DataType.FLOAT })
    amt: number;

    @Column({ field: 'first' })
    first: string;

    @Column({ field: 'last' })
    last: string;

    @Column({ field: 'gender' })
    gender: string;

    @Column({ field: 'street' })
    street: string;

    @Column({ field: 'city' })
    city: string;

    @Column({ field: 'state' })
    state: string;

    @Column({ field: 'lat', type: DataType.FLOAT })
    lat: number;

    @Column({ field: 'long', type: DataType.FLOAT })
    long: number;

    @Column({ field: 'city_pop', type: DataType.FLOAT })
    city_pop: number;

    @Column({ field: 'job' })
    job: string;

    @Column({ field: 'dob' })
    dob: Date;

    @Column({ field: 'trans_num' })
    trans_num: string;

    @Column({ field: 'unix_time', type: DataType.INTEGER })
    unix_time: number;

    @Column({field: 'createdAt'})
    createdAt: Date;

    @Column({field: 'updatedAt'})
    updatedAt: Date;
}