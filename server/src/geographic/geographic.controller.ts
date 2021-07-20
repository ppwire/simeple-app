import { Controller, Get, Param, Query } from '@nestjs/common';
import { GeographicDto } from 'src/dto/geographic.dto';
import { Geographic } from 'src/entity/geographic.entity';
import { GeographicService } from './geographic.service';

@Controller('geographic')
export class GeographicController {

   constructor(
      private geographicService: GeographicService
   ) { }

   @Get()
   async getById(@Query() geographicDto: GeographicDto): Promise<Geographic> {
      return await this.geographicService.findById(geographicDto)
   }
}