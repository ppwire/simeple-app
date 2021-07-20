import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

   constructor(
      private userService: UserService
   ) { }

   @Post()
   async create(@Body() userDto: UserDto): Promise<User> {
      return await this.userService.create(userDto)
   }
}
