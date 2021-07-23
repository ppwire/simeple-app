import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class MainService {

   constructor(
      private authService: AuthService
   ) { }

   async signIn(userDto: UserDto) {
      const validate = await this.authService.validate(userDto.userName, userDto.userPassword)
      console.log(validate)
      if (validate) {
         return this.authService.createJwtKey(userDto.userName)
      } else {
         throw new BadRequestException()
      }
   }
}
