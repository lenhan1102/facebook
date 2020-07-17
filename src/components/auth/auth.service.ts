import { Injectable, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import { User } from "src/entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()

export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }
    async login(user: any): Promise<any> {
        const payload = { username: user.username, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(username: string, password: string, fullname: string): Promise<any> {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        try {
            await this.userRepository.insert({
                username, password: hash, fullname
            })
        } catch (error) {
            if (error.errno === 1062) {
                throw new BadRequestException({ asldjasldj: 1212 })
            }
            console.log(error);
            console.log(error.errno);

            throw error;
        }

    }
}
