import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InputService } from './input.service';
import { CreateInputDTO } from './dtos/create-input,dto';
import { ReturnInputDTO } from '../fraud/dtos/return-input.dto';
import { ProducerService } from '../producer/producer.service';

type InputStatus = 'processing';
interface Input {
    id: number;
    status: InputStatus;
}

@Controller('input')
export class InputController {
    constructor(
        private readonly inputService: InputService,
        private readonly mlProducerService: ProducerService,
    ) { };

    @Post()
    async create(@Body() data: CreateInputDTO): Promise<Input> {
        if (!data) return;

        const dataSave = await this.inputService.create(data);
        if (dataSave) {
            const payloadData = {
                id: dataSave.id,
                payload: data,
            }
            await this.mlProducerService.sendToML(payloadData);
            return {
                status: 'processing',
                id: payloadData.id
            }
        }
    }

    @Get()
    async findAll(): Promise<ReturnInputDTO[]> {
        return (await this.inputService.findAll()).map((entity) => new ReturnInputDTO(entity))
    }

    @Get(':id')
    async findInput(@Param('id') id: number): Promise<ReturnInputDTO> {
        const input = await this.inputService.findInput(id);

        if (input) {
            return new ReturnInputDTO(input);
        }
    }
}
