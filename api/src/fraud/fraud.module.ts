import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fraud } from './entities/fruad.entity';
import { FraudService } from './fraud.service';
import { FraudController } from './fraud.controller';
import { Input } from '../dataset/entities/input.entity';

@Module({
    imports: [
        SequelizeModule.forFeature([Fraud, Input]),
    ],
    providers: [FraudService],
    controllers: [FraudController],
    exports: [FraudService],
})
export class FraudModule {}
