import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from 'src/entity/income.entity';
import { IncomeService } from './income.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  providers: [IncomeService],
  exports: [IncomeService]
})
export class IncomeModule { }