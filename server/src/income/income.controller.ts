import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { IncomeDto } from '../dto/income.dto';
import { IncomeService } from './income.service';

@Controller('income')
export class IncomeController {
  constructor(private incomeService: IncomeService) {}

  @Post()
  async create(@Body() incomeDto: IncomeDto) {
    return await this.incomeService.create(incomeDto);
  }

  @Get()
  async get(@Query() incomeDto: IncomeDto) {
    return await this.incomeService.find(incomeDto);
  }

  @Patch()
  async update(@Body() incomeDto: IncomeDto) {
    return await this.incomeService.update(incomeDto);
  }
}
