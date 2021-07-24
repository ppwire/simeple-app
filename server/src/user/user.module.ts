import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UtilModule } from '../util/util.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UtilModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
