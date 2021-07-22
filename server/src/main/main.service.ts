import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class MainService {

   hash(userPassword: string): Promise<string> {
      const saltOrRounds = 10;
      const password = userPassword;
      const hash = bcrypt.hash(password, saltOrRounds);
      return hash;
   }

   compare(password: string, userPassword: string): Promise<Boolean> {
      return bcrypt.compare(password, userPassword);
   }
}
