import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, ){}

    async create(user: User): Promise<User>{
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async findById(id: number): Promise<User | null >{
        return this.userRepository.findOneBy({ id });
    }
}
