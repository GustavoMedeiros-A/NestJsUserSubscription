import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';

@Controller('notification')
export class NotificationController {
  // constructor(private readonly notificationService: NotificationService) {}
  constructor(private readonly userService: UserService) {}

  // @Post()
  // notifyUser() {
  //   return this.notificationService.notifyUser();
  // }

  @Post()
  notifyUser() {
    const users = this.userService.findNotificationEnabled();

    for (const user of users) {
      console.log(`Hey ${user.name}, new content has been uploaded`)
    }
  }
}
