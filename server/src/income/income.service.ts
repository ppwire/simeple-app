import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from '../entity/income.entity';
import { Repository, UpdateResult } from 'typeorm';
import { IncomeDto } from '../dto/income.dto';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
  ) {}

  find(incomeDto: IncomeDto): Promise<Income[] | Income> {
    if (incomeDto.id)
      return this.incomeRepository.findOne({
        where: {
          id: incomeDto.id,
          isDeleted: 0,
        },
        order: {
          incomeSeq: 'ASC',
        },
      });
    else
      return this.incomeRepository.find({
        where: {
          isDeleted: 0,
        },
        order: {
          incomeSeq: 'ASC',
        },
      });
  }

  create(incomeDto: IncomeDto): Promise<Income> {
    const incomeEntity = this.incomeRepository.create({
      incomeName: incomeDto.incomeName,
      incomeMin: incomeDto.incomeMin,
      incomeMax: incomeDto.incomeMax,
      incomeSeq: incomeDto.incomeSeq,
    });
    return this.incomeRepository.save(incomeEntity);
  }

  update(incomeDto: IncomeDto): Promise<UpdateResult> {
    return this.incomeRepository.update(incomeDto.id, {
      incomeName: incomeDto.incomeName,
      incomeMin: incomeDto.incomeMin,
      incomeMax: incomeDto.incomeMax,
      incomeSeq: incomeDto.incomeSeq,
    });
  }
}
