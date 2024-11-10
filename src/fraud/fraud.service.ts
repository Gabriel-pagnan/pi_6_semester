import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Fraud } from './entities/fruad.entity';
import { Repository, Sequelize } from 'sequelize-typescript';
import { CreateFraudDTO } from './dtos/create-fraud-res.dto';
import { Input } from '../dataset/entities/input.entity';

@Injectable()
export class FraudService {
    constructor(
        @InjectModel(Fraud)
        private readonly fraudRepository: typeof Fraud,
        @InjectModel(Input)
        private readonly inputRepository: Repository<Input>,
        private readonly sequelize: Sequelize
    ) { }

    async insert(data: CreateFraudDTO): Promise<Fraud> {
        const transaction = await this.sequelize.transaction();
        try {
            const input = await this.findInput(data.input_id);

            if (!input) return;

            await this.fraudRepository.create(data as Partial<Fraud>);
            return
        } catch (error) {
            await transaction.rollback();
            throw new InternalServerErrorException(error);
        }
    }

    async findResponseInput(id: number): Promise<Fraud> {
        try {
            const input = await this.findInput(id);

            if (!input) throw new NotFoundException('Input response Not Found.');

            const isFraud = await this.fraudRepository.findOne({
                where: { input_id: input.id },
                raw: true
            });

            console.log(isFraud);
            if (!isFraud) throw new NotFoundException('Not Found.');

            return isFraud
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
