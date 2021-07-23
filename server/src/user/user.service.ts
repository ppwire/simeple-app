import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Amphures } from 'src/entity/amphures.entity';
import { Districts } from 'src/entity/districts.entity';
import { Income } from 'src/entity/income.entity';
import { Provinces } from 'src/entity/provinces.entity';
import { User } from 'src/entity/user.entity';
import { UtilService } from 'src/util/util.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private utilService: UtilService,
  ) { }

  find(userDto: UserDto): Promise<User[] | User> {
    if (userDto.id)
      return this.userRepository.findOne({
        where: {
          isDeleted: 0,
          id: userDto.id,
        },
        relations: ['income', 'provinces', 'amphures', 'districts'],
      });
    else
      return this.userRepository.find({
        where: {
          isDeleted: 0,
        },
        relations: ['income', 'provinces', 'amphures', 'districts'],
      });
  }

  findByUserName(userName: string) {
    return this.userRepository.findOne({
      where: {
        isDeleted: 0,
        userName: userName,
      },
    });
  }

  async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.userName = userDto.userName;
    user.address = userDto.address;
    user.gender = userDto.gender;

    await this.utilService.hash(userDto.userPassword).then((res) => {
      user.userPassword = res;
    });

    user.profilePic = userDto.profilePic;

    const income = new Income();
    income.id = userDto.incomeId;

    const provinces = new Provinces();
    provinces.id = userDto.provincesId;

    const amphures = new Amphures();
    amphures.id = userDto.amphuresId;

    const districts = new Districts();
    districts.id = userDto.districtsId;

    user.income = income;
    user.provinces = provinces;
    user.amphures = amphures;
    user.districts = districts;

    return this.userRepository.save(user);
  }
}
