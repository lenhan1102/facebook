import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/entity";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
    }
    async getProfile(user) {
        const { password, ...result } = await this.usersRepository.findOne({ id: user.id })
        return result;
    }
}