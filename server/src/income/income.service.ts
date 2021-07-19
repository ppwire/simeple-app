import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from 'src/entity/income.entity';
import { Repository } from 'typeorm';
import { IncomeDto } from './dto/incomeDto';

@Injectable()
export class IncomeService {
   constructor(
      @InjectRepository(Income)
      private incomeRepository: Repository<Income>
   ) { }

   findAll(): Promise<Income[]> {
      return this.incomeRepository.find()
   }

   async create(incomeDto: IncomeDto): Promise<Income> {
      const incomeEntity = this.incomeRepository.create({
         incomeName: incomeDto.incomeName,
         incomeMin: incomeDto.incomeMin,
         incomeMax: incomeDto.incomeMax,
         createBy: incomeDto.createBy,
         updateBy:incomeDto.createBy
      })
      return await this.incomeRepository.save(incomeEntity)
   }
}
