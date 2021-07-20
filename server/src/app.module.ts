import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Income } from './entity/income.entity';
import { MainController } from './main/main.controller';
import { MainModule } from './main/main.module';
import { IncomeModule } from './income/income.module';
import { Geographic } from './entity/geographic.entity';
import { GeographicModule } from './geographic/geographic.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [User, Income, Geographic],
      synchronize: false,
    }), UserModule, MainModule, IncomeModule, GeographicModule],
  controllers: [MainController, AppController],
  providers: [AppService],
})
export class AppModule { }
