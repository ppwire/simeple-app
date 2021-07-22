import { Controller, Get, Query } from '@nestjs/common';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private provincesService: ProvincesService) {}

  @Get()
  async get() {
    return await this.provincesService.find();
  }
}
