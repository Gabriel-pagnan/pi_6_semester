import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fraud } from '../fraud/entities/fruad.entity';
import { Input } from '../dataset/entities/input.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Fraud, Input]),
  ],
  providers: [ConsumerService],
  exports: [ConsumerService]
})
export class ConsumerModule {}
