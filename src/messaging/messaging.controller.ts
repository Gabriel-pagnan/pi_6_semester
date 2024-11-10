import { Body, Controller, Inject, InternalServerErrorException, Post } from '@nestjs/common';
import { Channel } from 'amqp-connection-manager';

@Controller('messaging')
export class MessagingController {
    constructor(@Inject('RABBITMQ_CHANNEL') private readonly channel: Channel) { }

    @Post('publish')
    async publishToQueue(@Body() data: any) {
        try {
            this.channel.sendToQueue('ml_processing_queue', Buffer.from(JSON.stringify(data)));
            return { message: 'Mensagem enviada para RabbitMQ' };
        } catch (error) {
            new InternalServerErrorException(error);
        }
    }
}
