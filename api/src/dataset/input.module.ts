import { Module } from '@nestjs/common';
import { Input } from './entities/input.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { InputService } from './input.service';
import { InputController } from './input.controller';
import { ProducerModule } from '../producer/producer.module';

@Module({
    imports: [
        SequelizeModule.forFeature([Input]),
        ProducerModule
    ],
    providers: [InputService],
    controllers: [InputController],
    exports: [InputService],
})
export class InputModule { }
