import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './components/auth/auth.module';
import { ProfileModule } from './components/profile/profile.module';
import { PostModule } from './components/post/post.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig as any),
    AuthModule, 
    ProfileModule,
    PostModule
  ],
})
export class AppModule {}
