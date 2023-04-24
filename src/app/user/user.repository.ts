import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository {
    constructor(@InjectModel("USER_MODEL") private readonly userModel : Model<User>) {}

    findAll() {
        return this.userModel.find().select("-password -__v").exec(); // nao mostra a password e a versao do shema
    }

    findById(id : string) {
        return this.userModel.findOne({_id: id}).select("-password -__v").exec();
    } 

    create(data) { // Create do repository
        return this.userModel.create(data); //Create do mongoose
    }

    findByEmail(email) {
        return this.userModel.findOne({ email })
    }

    deleteById(id) {
        return this.userModel.deleteOne({_id: id});
    }
}