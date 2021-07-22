import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { MainService } from 'src/main/main.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private mainService: MainService,
    private jwtService: JwtService,
  ) { }

  async validate(userName: string, password: string) {
    const user = await this.userService.findByUserName(userName);
    if (user && this.mainService.compare(password, user.userPassword)) {
      return user;
    }
    return null;
  }

  async login(userName: string) {
    const payload = { sub: userName };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
