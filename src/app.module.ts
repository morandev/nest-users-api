import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
//1. import nest js typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.entity';
//dirname / * * dentro de cualquier carpeta, / * . entity.ts hay un archivo .. vas a cargarlo
//__dirname + '/**/*'
@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'morandev',
      password: 'morandev',
      host: 'localhost',
      port: 3306,
      database: 'db_nest',
      entities: [User],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
