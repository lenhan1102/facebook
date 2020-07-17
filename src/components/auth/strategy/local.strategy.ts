import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity';
import * as bcrypt from "bcryptjs";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('strategy')
    const user = await this.usersRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (bcrypt.compareSync(password, user.password)) { 
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}