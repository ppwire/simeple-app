import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Geographic } from 'src/entity/geographic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeographicService {
   constructor(
      @InjectRepository(Geographic)
      private geographicRepository: Repository<Geographic>

   ) { }
}