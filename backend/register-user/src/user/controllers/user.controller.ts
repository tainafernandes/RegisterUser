import { User } from '../entities/user';
import { UserSchema } from '../schemas/user.schema';
import { UserService } from '../services/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {};

    @Post()
    async create(@Body() user: UserSchema){
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.userService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: UserSchema) {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async delete (@Param('id') id: number){
        return this.userService.delete(id);
    }
}
