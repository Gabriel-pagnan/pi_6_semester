import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreateMlDTO } from './dtos/create-ml.dto';

@Injectable()
export class ProducerService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['clustering://rabbitmq-i7vq.onrender.com:25672'],
                queue: 'ml_processing_queue',
                queueOptions: { durable: true },
            },
        });
    }

    async sendToML(data: CreateMlDTO) {
        try {
            if (!data) return;
            return await this.client.send('ml.process', data).toPromise();
        } catch (error) {
            new InternalServerErrorException(error);
        }
    }
}
