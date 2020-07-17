import { Module } from '@nestjs/common';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Post } from 'src/entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Post]),
        // PassportModule,
    ],
    controllers: [PostController],
    providers: [JwtStrategy, PostService],
    exports: [],
})
export class PostModule { }