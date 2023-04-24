import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { NotificationService } from '../notification/notification.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() payload: CreateUserDTO) {
    return this.userService.create(payload);
  }

  @Get()
  index() {
    return this.userService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.userService.deleteById(id);
  }
  


  
}
