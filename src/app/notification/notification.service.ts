import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class NotificationService {
  constructor(private readonly userService: UserService){}

  notifyUser() {
    const users = this.userService.findAll();

    console.log(users);

    // for (const user of users) {
    //   console.log(user);
    // }
  }
}
