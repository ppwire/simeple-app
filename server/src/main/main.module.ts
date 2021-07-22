import { Module } from '@nestjs/common';
import { IncomeModule } from 'src/income/income.module';
import { MainController } from './main.controller';
import { MainService } from './main.service';

@Module({
  imports: [IncomeModule],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule { }
