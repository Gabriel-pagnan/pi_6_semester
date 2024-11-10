import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MESSAGE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['ampq://localhost:5672'],
          queue: 'ml_results_queue',
          queueOptions: { durable: true }
        }
      }
    ])
  ],
  providers: []
})
export class MessagingModule { }
