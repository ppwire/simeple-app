import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../dto/user.dto';
import { Amphures } from '../entity/amphures.entity';
import { Districts } from '../entity/districts.entity';
import { Income } from '../entity/income.entity';
import { Provinces } from '../entity/provinces.entity';
import { User } from '../entity/user.entity';
import { UtilService } from '../util/util.service';
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
    else if (userDto.userName) {
      return this.userRepository.findOne({
        where: {
          isDeleted: 0,
          userName: userDto.userName,
        },
        relations: ['income', 'provinces', 'amphures', 'districts'],
      });
    }
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

    user.userPassword = userDto.userPassword

    await this.utilService.uploadImage(userDto.profilePic).then((res) => {
      user.profilePic = res;
    })

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
