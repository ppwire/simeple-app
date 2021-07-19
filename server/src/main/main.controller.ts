import { Body, Controller, Get, Post } from '@nestjs/common';
import { IncomeDto } from 'src/income/dto/incomeDto';
import { IncomeService } from 'src/income/income.service';

@Controller('main')
export class MainController {

   constructor(
      private incomeService: IncomeService
   ) { }

   @Get('income')
   async getAllIncome() {
      return await this.incomeService.findAll()
   }

   @Post('income')
   async createIncome(@Body() incomeDto: IncomeDto) {
      return await this.incomeService.create(incomeDto)
   }
}
