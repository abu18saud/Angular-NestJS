import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
//import {flights} from './flights/'
import { CarModule } from './cars/car.module';
import { FlightsController } from './flights/flights.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'transportation',
      entities: [Cars],
      synchronize: true,
    }),
    CarModule,
  ],
  controllers: [FlightsController],
})
export class AppModule {}
/* The app.module file in NestJS, just like in Angular, has some config properties that affect the entire application.
 */

