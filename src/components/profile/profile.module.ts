import { Module } from '@nestjs/common';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule,
    ],
    controllers: [ProfileController],
    providers: [JwtStrategy, ProfileService],
    exports: [],
})
export class ProfileModule { }