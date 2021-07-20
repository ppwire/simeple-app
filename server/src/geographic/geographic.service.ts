import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GeographicDto } from 'src/dto/geographic.dto';
import { Geographic } from 'src/entity/geographic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeographicService {
   constructor(
      @InjectRepository(Geographic)
      private geographicRepository: Repository<Geographic>
   ) { }

   findById(geographicDto: GeographicDto): Promise<Geographic> {
      if (geographicDto.id) return this.geographicRepository.findOne(geographicDto.id)
      if (geographicDto.tambonId) return this.geographicRepository.findOne({
         where: {
            tambonID: geographicDto.tambonId
         }
      })
   }
}
