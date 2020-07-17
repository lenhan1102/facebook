import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException } from '@nestjs/common';
import { JWT } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: JWT.SECRET,
    });
  }

  async validate(payload: any) {
    console.log(payload);
    if (payload.exp < Date.now() / 1000) {
      throw new HttpException('', 403);
    }
    return payload;
  }
}