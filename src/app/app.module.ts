import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/bancoteste1"),
    UserModule, 
    NotificationModule
  ],
})
export class AppModule {}
