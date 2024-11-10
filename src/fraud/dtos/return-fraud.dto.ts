import { Fraud } from "../entities/fruad.entity";
import { ReturnInputDTO } from "./return-input.dto";

export class ReturnFraudDTO {
    constructor(fraud: Fraud) {
        this.id = fraud.id,
        this.is_fraud = fraud.is_fraud,
        this.input_id = fraud.input_id,
        this.input_response = fraud.input
    }

    id: number;
    is_fraud: number;
    input_id: number;
    input_response: ReturnInputDTO;
}