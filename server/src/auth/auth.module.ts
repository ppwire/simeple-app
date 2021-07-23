import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UtilModule } from 'src/util/util.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}),
    UserModule, UtilModule
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }
