import { User } from './user';
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {};

    @Post()
    async create(@Body() user: User){
        return this.userService.create(user);
    }

    @Get()
    findAll(): string {
        return 'this is a get method';
    }
}
