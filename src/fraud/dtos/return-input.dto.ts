import { Input } from "../../dataset/entities/input.entity";

export class ReturnInputDTO {
    id?: number;
    trans_date_trans_time: Date;
    cc_num: string;
    merchant: string;
    category: string;
    amt: number;
    first: string;
    last: string;
    gender: string;
    street: string;
    city: string;
    state: string;
    lat: number;
    long: number;
    city_pop: number;
    job: string;
    dob: Date;
    trans_num: string;
    unix_time: number;

    constructor(input: Partial<Input>) {
        this.id = input.id;
        this.trans_date_trans_time = input.trans_date_trans_time ?? new Date();
        this.cc_num = input.cc_num ?? '';
        this.merchant = input.merchant ?? '';
        this.category = input.category ?? '';
        this.amt = input.amt ?? 0;
        this.first = input.first ?? '';
        this.last = input.last ?? '';
        this.gender = input.gender ?? '';
        this.street = input.street ?? '';
        this.city = input.city ?? '';
        this.state = input.state ?? '';
        this.lat = input.lat ?? 0;
        this.long = input.long ?? 0;
        this.city_pop = input.city_pop ?? 0;
        this.job = input.job ?? '';
        this.dob = input.dob ?? new Date();
        this.trans_num = input.trans_num ?? '';
        this.unix_time = input.unix_time ?? 0;
    }
}
