import { Module, forwardRef } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)], // Import UserModule to access the values of that instance 
  controllers: [NotificationController], // Controler
  providers: [NotificationService], //Provide the UserService, but create a new instance, so we cannot have access to the values
  // So we need to export the UserService in the UserModules // Service
  // new UserService().users = [{ }]
  exports: [NotificationService]
})
export class NotificationModule {}
