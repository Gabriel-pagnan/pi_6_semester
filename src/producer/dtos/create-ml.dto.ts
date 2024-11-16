import { IsNumber, IsOptional } from "class-validator";
import { CreateInputDTO } from "../../dataset/dtos/create-input,dto";

export class CreateMlDTO {
    @IsNumber()
    id: number; 

    @IsOptional()
    payload: CreateInputDTO
}