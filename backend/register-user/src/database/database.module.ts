import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DATABASE_HOST'),
                port: configService.get('DATABASE_PORT'),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_BD_NAME'),
                entities: [User],
                synchronize: true //só usar em ambiente de desenvolvimento 
            }),
            inject: [ConfigService],
        })
    ]
})

export class DatabaseModule {}
