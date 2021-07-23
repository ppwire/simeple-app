import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class MainService {

   constructor(
      private authService: AuthService,
      private userService: UserService
   ) { }

   async signIn(userDto: UserDto) {
      const validate = await this.authService.validate(userDto.userName, userDto.userPassword)
      if (validate) {
         return this.authService.createJwtKey(validate.userName, validate.id)
      } else {
         throw new BadRequestException()
      }
   }

   async getData(id: number) {
      const userDto = new UserDto
      userDto.id = id
      return await this.userService.find(userDto)
   }
}
