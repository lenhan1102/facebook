import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from './strategy/local.strategy';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity";
import { JwtModule } from '@nestjs/jwt';
import { JWT } from "src/constants";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: JWT.SECRET,
            signOptions: { expiresIn: JWT.EXPIRED_TIME },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule { }