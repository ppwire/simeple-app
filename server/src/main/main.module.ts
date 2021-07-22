import { Module } from '@nestjs/common';
import { IncomeModule } from 'src/income/income.module';
import { MainController } from './main.controller';
import { MainService } from './main.service';

@Module({
  controllers: [MainController],
  providers: [MainService],
  exports: [MainService],
})
export class MainModule {}
