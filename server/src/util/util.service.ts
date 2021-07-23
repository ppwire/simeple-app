import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UtilService {

   hash(userPassword: string): Promise<string> {
      const saltOrRounds = 10;
      const password = userPassword;
      const hash = bcrypt.hash(password, saltOrRounds);
      return hash;
   }

   compare(password: string, userPassword: string): Promise<Boolean> {
      const result = bcrypt.compare(password, userPassword);
      return result
   }

}
