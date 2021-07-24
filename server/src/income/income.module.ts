import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from '../entity/income.entity';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  providers: [IncomeService],
  exports: [IncomeService],
  controllers: [IncomeController],
})
export class IncomeModule {}
