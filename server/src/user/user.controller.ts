import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto): Promise<User> {
    return this.userService.create(userDto);
  }

  @Get()
  async get(@Query() userDto: UserDto): Promise<User | User[]> {
    return await this.userService.find(userDto);
  }
}
