import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
   ) { }

   find(userDto: UserDto): Promise<User[] | User> {
      if (userDto.id) return this.userRepository.findOne({
         where: {
            isDeleted: 0,
            id: userDto.id
         }
      })
      else return this.userRepository.find({
         where: {
            isDeleted: 0
         }
      })
   }

   
}
