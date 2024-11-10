import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Input } from './entities/input.entity';
import { Repository, Sequelize } from 'sequelize-typescript';
import { CreateInputDTO } from './dtos/create-input,dto';

@Injectable()
export class InputService {
    constructor(
        @InjectModel(Input)
        private readonly inputRepository: Repository<Input>,
        private readonly sequelize: Sequelize
    ) { }

    async create(data: CreateInputDTO): Promise<Input> {
        const transaction = await this.sequelize.transaction();
        try {
            if (!data) return;

            return await this.inputRepository.create(data as Partial<Input>)
        } catch (error) {
            await transaction.rollback();
            throw new InternalServerErrorException(error);
        }
    }

    async findAll(): Promise<Input[]> {
        try {
            const records = await this.inputRepository.findAll({
                raw: true
            });

            if (!records || !records.length) throw new NotFoundException('Input not found')

            return records;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async findInput(id: number): Promise<Input> {
        try {
            const input = await this.inputRepository.findOne({
                raw: true,
                where: { id }
            });

            if (!input) return;

            return input;
        } catch (error) {
            throw new NotFoundException('Input not found')
        }
    }
}
