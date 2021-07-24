import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UtilService } from '../util/util.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private utilService: UtilService
  ) { }

  async validate(userName: string, password: string) {
    const user = await this.userService.findByUserName(userName);
    if (user) {
      const compareResult = this.utilService.compare(password, user.userPassword)
      if (compareResult) {
        return user
      } else {
        return null
      }
    } else {
      return null
    }
  }

  createJwtKey(userName: string, userId: number) {
    const payload = { sub: userName, id: userId };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.SECRET_KEY,
        expiresIn: '1d'
      })
    };
  }
}
