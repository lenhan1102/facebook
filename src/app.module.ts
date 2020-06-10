import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthModule } from './components/auth/auth.module';
import { ProfileModule } from './components/profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'facebook',
      entities: [User],
      synchronize: false,
    }),
    AuthModule, 
    ProfileModule
  ],
})
export class AppModule {}
