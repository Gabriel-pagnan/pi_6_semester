import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FraudService } from './fraud.service';
import { CreateFraudDTO } from './dtos/create-fraud-res.dto';
import { Fraud } from './entities/fruad.entity';
import { ReturnFraudDTO } from './dtos/return-fraud.dto';

@Controller('fraud')
export class FraudController {
    constructor(
        private readonly fraudService: FraudService
    ) { };

    @Post()
    async insert(@Body() data: CreateFraudDTO): Promise<Fraud> {
        if (!data) return

        return this.fraudService.insert(data);
    }

    @Get(':inputId')
    async findResponseInput(@Param('inputId') id: number): Promise<ReturnFraudDTO> {
        const record = await this.fraudService.findResponseInput(id);

        if (record) {
            return new ReturnFraudDTO(record)
        }
    }
}
