import { Controller, Get, Query } from '@nestjs/common';
import { AmphuresService } from './amphures.service';

@Controller('amphures')
export class AmphuresController {

   constructor(
      private amphuresService: AmphuresService
   ) { }

   @Get()
   async getById(@Query('id') id: number) {
      return await this.amphuresService.findById(id)
   }
}
