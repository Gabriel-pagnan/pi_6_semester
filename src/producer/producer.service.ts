import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMlDTO } from './dtos/create-ml.dto';
import { ServiceBusClient, ServiceBusMessage } from '@azure/service-bus';

@Injectable()
export class ProducerService {
    private serviceBusClient: ServiceBusClient;
    private sender: any;

    constructor() {
        this.serviceBusClient = new ServiceBusClient(process.env.CONNECTION_STRING);
        this.sender = this.serviceBusClient.createSender("ml_processing_hub");
    }
    async sendToML(data: CreateMlDTO) {
        try {
            if (!data) return;
            
            const message: ServiceBusMessage = {
                body: data,
                contentType: "application/json",
            };

            await this.sender.sendMessages(message);
            console.log("Message sent successfully.");
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async onModuleDestroy() {
        await this.serviceBusClient.close();
    }
}
