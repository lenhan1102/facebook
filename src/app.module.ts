import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthModule } from './components/auth/auth.module';
import { ProfileModule } from './components/profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'facebook',
      entities: [User],
      synchronize: false,
    }),
    AuthModule, 
    ProfileModule
  ],
})
export class AppModule {}
