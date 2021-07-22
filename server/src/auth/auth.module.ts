import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MainModule } from 'src/main/main.module';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
    }),
    UserModule, MainModule
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }
