import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from 'src/entity/income.entity';
import { Repository } from 'typeorm';
import { IncomeDto } from '../dto/income.dto';

@Injectable()
export class IncomeService {
   constructor(
      @InjectRepository(Income)
      private incomeRepository: Repository<Income>
   ) { }

   find(incomeDto: IncomeDto): Promise<Income[] | Income> {
      if (incomeDto.id) return this.incomeRepository.findOne({
         where: {
            id: incomeDto.id,
            isDeleted: 0
         }
      })
      else return this.incomeRepository.find({
         where: {
            isDeleted: 0
         }
      })
   }

   create(incomeDto: IncomeDto): Promise<Income> {
      const incomeEntity = this.incomeRepository.create({
         incomeName: incomeDto.incomeName,
         incomeMin: incomeDto.incomeMin,
         incomeMax: incomeDto.incomeMax,
         incomeSeq: incomeDto.incomeSeq
      })
      return this.incomeRepository.save(incomeEntity)
   }
}
