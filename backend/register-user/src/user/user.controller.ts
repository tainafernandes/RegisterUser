import { User } from './user';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {};

    @Post()
    async create(@Body() user: User){
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.userService.findById(id);
    }
}
