import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, ){}

    async create(user: User): Promise<any>{
        console.log("usuario criado");
        return this.userRepository.save(user);
    }
}
