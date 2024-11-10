import { IsNumber } from "class-validator";

export class CreateFraudDTO {
    @IsNumber()
    public is_fraud: number;

    @IsNumber()
    public input_id: number
}