import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';
import { UserSchema } from '../schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, ){}

    async create(user: UserSchema): Promise<User>{
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async findById(id: number): Promise<User | null >{

        const user = await this.userRepository.findOneBy({ id });

        if(!user){
            throw new NotFoundException("User not found");
        }
        
        return user;
    }

    async update(id: number, user: UserSchema): Promise<User | null >{
        const userUpdate = await this.userRepository.findOneBy({ id });

        if(!userUpdate) {
            throw new NotFoundException('User do not exist', '404');
        }

        await this.userRepository.update(id, user)
        
        return await this.userRepository.findOneBy({id});
    }

    async delete(id: number): Promise<string> {
        await this.userRepository.delete(id)
        return `User deleted successfully`
    }
}
