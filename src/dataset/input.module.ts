import { Module } from '@nestjs/common';
import { Input } from './entities/input.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { InputService } from './input.service';
import { InputController } from './input.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([Input]),
    ],
    providers: [InputService],
    controllers: [InputController],
    exports: [InputService],
})
export class InputModule { }
