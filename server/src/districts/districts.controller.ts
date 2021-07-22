import { Controller, Get, Query } from '@nestjs/common';
import { DistrictsService } from './districts.service';

@Controller('districts')
export class DistrictsController {
   constructor(
      private districtsService: DistrictsService
   ) { }

   @Get()
   async findById(@Query('id') id: number) {
      return await this.districtsService.findById(id)
   }
}
