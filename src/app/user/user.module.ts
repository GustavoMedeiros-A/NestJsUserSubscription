import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService], // new UserService().users = [{ "name": mario, notified: false}]
  exports: [UserService] // Export to the notification.module
})
export class UserModule {}
