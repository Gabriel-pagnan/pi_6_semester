import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Fraud } from '../fraud/entities/fruad.entity';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { CreateFraudDTO } from '../fraud/dtos/create-fraud-res.dto';
import { Input } from '../dataset/entities/input.entity';

@Injectable()
export class ConsumerService {
    constructor(
        @InjectModel(Fraud)
        private readonly fraudRepository: typeof Fraud,
        @InjectModel(Input)
        private readonly inputRepository: typeof Input,
    ) { }

    @EventPattern('ml.result')
    async handleMLResult(
        @Payload() data: CreateFraudDTO,
        @Ctx() context: RmqContext
    ) {
        if (!data) return;
        try {
            const channel = context.getChannelRef();
            const originalMessage = context.getMessage();

            const input = await this.inputRepository.findOne({
                raw: true,
                where: { id: data.input_id }
            });
            if (!input || !input.id) return;

            await this.fraudRepository.create(data as Partial<Fraud>);

            channel.ack(originalMessage);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}