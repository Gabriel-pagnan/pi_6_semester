import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateInputDTO {
    @IsDateString()
    public trans_date_trans_time: Date;

    @IsNumber()
    public cc_num: number;

    @IsString()
    public merchant: string;
    
    @IsString()
    public category: string;

    @IsNumber()
    public amt: number;

    @IsString()
    public first: string;

    @IsString()
    public last: string;

    @IsString()
    public gender: string;

    @IsString()
    public street: string;

    @IsString()
    public city: string;

    @IsString()
    public state: string;

    @IsNumber()
    public lat: number;

    @IsNumber()
    public long: number;

    @IsNumber()
    public city_pop: number;

    @IsString()
    public job: string;

    @IsDateString()
    public dob: Date;

    @IsString()
    public trans_num: string;

    @IsNumber()
    public unix_time: number;
}