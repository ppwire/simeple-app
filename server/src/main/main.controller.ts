import { Req } from '@nestjs/common';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from '../dto/user.dto';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private mainService: MainService) { }

  @Post('signin')
  signin(@Body() userDto: UserDto) {
    return this.mainService.signIn(userDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserData(@Req() req: any) {
    return this.mainService.getData(req.user.id)
  }
}