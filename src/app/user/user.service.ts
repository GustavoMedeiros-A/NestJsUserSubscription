import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDocument } from './user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import * as  bcrypt from "bcryptjs"
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}
  
  async create(payload: CreateUserDTO) {

    const userExists = await this.userRepository.findByEmail(payload.email)
    if(userExists) {
      throw new BadRequestException("User already exists")
    }

    const encryptPassord = bcrypt.hashSync(payload.password, bcrypt.genSaltSync(14))

    return this.userRepository.create( {
      name: payload.name,
      email: payload.email,
      password: encryptPassord 
    })
  }

  findAll() : Promise <UserDocument []>  {
    return this.userRepository.findAll();
  }
  async findById(id: string)  : Promise<UserDocument>  {
    const user = await this.userRepository.findById(id);
    if(!user) {
      throw new NotFoundException("User not found")
    }
    return user
  }

  async deleteById(id: string) : Promise<void> {
    await this.findById(id)
    await this.userRepository.deleteById(id)
  }

}
