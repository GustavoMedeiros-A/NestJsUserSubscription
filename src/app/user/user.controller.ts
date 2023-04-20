import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() payload: User) {
    return this.userService.create(payload);
  }

  @Get()
  index() {
    return this.userService.findAll();
  }
}
