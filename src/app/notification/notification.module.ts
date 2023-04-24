import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule], // Import UserModule to access the values of that instance
  controllers: [NotificationController],
  providers: [NotificationService], //Provide the UserService, but create a new instance, so we cannot have access to the values
  // So we need to export the UserService in the UserModules
  // new UserService().users = [{ }]
})
export class NotificationModule {}
