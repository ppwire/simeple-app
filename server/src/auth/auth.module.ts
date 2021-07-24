import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { UtilModule } from '../util/util.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UserModule, UtilModule
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
