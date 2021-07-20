import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Geographic } from 'src/entity/geographic.entity';
import { Income } from 'src/entity/income.entity';
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

   create(userDto: UserDto): Promise<User> {
      const user = new User()
      user.userName = userDto.userName
      user.address = userDto.address
      user.gender = userDto.gender
      user.userPassword = userDto.userPassword
      user.profilePic = userDto.profilePic

      const income = new Income()
      income.id = userDto.incomeId
      const geographic = new Geographic()
      geographic.id = userDto.geographicId

      user.income = income
      user.geographic = geographic

      return this.userRepository.save(user)
   }
}
