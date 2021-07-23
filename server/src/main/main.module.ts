import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { MainController } from './main.controller';
import { MainService } from './main.service';

@Module({
  imports: [AuthModule,UserModule],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule { }
