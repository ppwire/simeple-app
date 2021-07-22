import { Body, Controller, Get, Post } from '@nestjs/common';
import { IncomeDto } from 'src/dto/income.dto';
import { IncomeService } from 'src/income/income.service';

@Controller('main')
export class MainController {

   @Post('/signup')
   signup() {
      
   }
}
