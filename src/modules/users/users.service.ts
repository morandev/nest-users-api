import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getUsers() {
    return this.userRepo.find();
  }

  createUser(user: CreateUserDto) {
    const _user = this.userRepo.create(user);
    return this.userRepo.save(_user);
  }
}
