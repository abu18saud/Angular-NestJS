import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
import { CarModule } from './cars/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8080,
      username: 'postgres',
      password: 'root',
      database: 'transportation',
      entities: [Cars],
      synchronize: true,
    }),
    CarModule,
  ],
})
export class AppModule {}
/* The app.module file in NestJS, just like in Angular, has some config properties that affect the entire application.
 */

