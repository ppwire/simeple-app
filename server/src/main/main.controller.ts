import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from 'src/dto/user.dto';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private mainService: MainService) { }

  @Post('signin')
  signin(@Body() userDto: UserDto) {
    return this.mainService.signIn(userDto)
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  getUserData() {
    return 1
  }
}
