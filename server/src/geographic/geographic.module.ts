import { Module } from '@nestjs/common';
import { GeographicService } from './geographic.service';
import { GeographicController } from './geographic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geographic } from 'src/entity/geographic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Geographic])],
  providers: [GeographicService],
  exports: [GeographicService],
  controllers: [GeographicController]
})
export class GeographicModule { }
