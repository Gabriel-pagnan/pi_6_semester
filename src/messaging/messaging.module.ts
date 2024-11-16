import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbitmq',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq-35yn.onrender.com:5672'],
          queue: 'ml_results_queue',
          queueOptions: { durable: true }
        }
      }
    ])
  ],
  providers: []
})
export class MessagingModule { }
