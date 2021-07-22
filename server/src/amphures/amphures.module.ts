import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amphures } from 'src/entity/amphures.entity';
import { AmphuresController } from './amphures.controller';
import { AmphuresService } from './amphures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Amphures])],
  controllers: [AmphuresController],
  providers: [AmphuresService]
})
export class AmphuresModule { }
