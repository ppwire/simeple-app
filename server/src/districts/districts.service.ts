import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Districts } from 'src/entity/districts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictsService {
   constructor(
      @InjectRepository(Districts)
      private districtsRepository: Repository<Districts>
   ) { }

   findById(id: number): Promise<Districts[]> {
      return this.districtsRepository.find({
         where: {
            amphureId: id
         }
      })
   }
}
