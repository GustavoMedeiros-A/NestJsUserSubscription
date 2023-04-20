import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  notified: boolean;
}

@Injectable()
export class UserService {
  private users: User[] = [];

  create(payload: User) {
    this.users.push(payload);
    return payload;
  }

  findAll() {
    return this.users;
  }
}
