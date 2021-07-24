import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provinces } from '../entity/provinces.entity';
import { ProvincesController } from './provinces.controller';
import { ProvincesService } from './provinces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Provinces])],
  controllers: [ProvincesController],
  providers: [ProvincesService],
})
export class ProvincesModule {}
