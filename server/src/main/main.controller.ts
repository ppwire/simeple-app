import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private mainService: MainService) {}

  @Post('signin')
  signin(@Body() userDto: UserDto) {}
}
