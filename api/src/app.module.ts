import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { InputModule } from './dataset/input.module';
import { Input } from './dataset/entities/input.entity';
import { Fraud } from './fraud/entities/fruad.entity';
import { FraudModule } from './fraud/fraud.module';
import { ProducerModule } from './producer/producer.module';

const models = [User, Input, Fraud];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: process.env.DATABASE_DB_NAME,
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_NAME,
      models,
      logging: false,
      autoLoadModels: Boolean(process.env.DATABASE_UPGRADE) || false,
      synchronize: Boolean(process.env.DATABASE_UPGRADE) || false,
    }),
    UserModule,
    JwtModule,
    AuthModule,
    InputModule,
    FraudModule,
    ProducerModule
  ],
  controllers: []
})
export class AppModule {}