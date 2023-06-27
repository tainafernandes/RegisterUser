import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
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

    async update(id: number, user: User,): Promise<User | null >{
        const userUpdate = this.findById(id);
        if(!userUpdate) {
            throw new NotFoundException('User do not exist', '404');
        }

        const newUser = new User();
        newUser.id = user.id;
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;
        
        return await this.userRepository.save(newUser);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id)
    }
}
