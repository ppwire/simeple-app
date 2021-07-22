import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Districts } from 'src/entity/districts.entity';
import { DistrictsController } from './districts.controller';
import { DistrictsService } from './districts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Districts])],
  controllers: [DistrictsController],
  providers: [DistrictsService]
})
export class DistrictsModule { }
