import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InputService } from './input.service';
import { CreateInputDTO } from './dtos/create-input,dto';
import { Input } from './entities/input.entity';
import { ReturnInputDTO } from '../fraud/dtos/return-input.dto';

@Controller('input')
export class InputController {
    constructor(
        private readonly inputService: InputService
    ) { };

    @Post()
    async create(@Body() data: CreateInputDTO): Promise<Input> {
        if (data) {
            return this.inputService.create(data);
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
