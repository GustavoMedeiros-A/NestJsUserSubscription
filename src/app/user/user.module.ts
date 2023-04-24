import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { NotificationModule } from '../notification/notification.module';
import { UserRepository } from './user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [forwardRef(() => NotificationModule), MongooseModule.forFeature([ {
    name: "USER_MODEL",
    schema: UserSchema
  } ])],
  controllers: [UserController],
  providers: [UserRepository, UserService], // new UserService().users = [{ "name": mario, notified: false}]
  exports: [UserService] // Export to the notification.module
  
})
export class UserModule {}
