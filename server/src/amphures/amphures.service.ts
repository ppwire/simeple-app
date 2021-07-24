import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Amphures } from '../entity/amphures.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AmphuresService {
  constructor(
    @InjectRepository(Amphures)
    private amphuresRepository: Repository<Amphures>,
  ) {}

  findById(id: number): Promise<Amphures[]> {
    return this.amphuresRepository.find({
      where: {
        provinceId: id,
      },
    });
  }
}
