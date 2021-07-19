import { Module } from '@nestjs/common';
import { IncomeModule } from 'src/income/income.module';
import { MainController } from './main.controller';

@Module({
  imports: [IncomeModule],
  controllers: [MainController],
})
export class MainModule { }
