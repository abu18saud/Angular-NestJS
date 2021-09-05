import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
import { Flights } from './flights/flights.entity';
import { CarModule } from './cars/car.module';
import { FlightsController } from './flights/flights.controller';
import { FlightsModule } from './flights/flights.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'transportation',
      entities: [Cars, Flights],
      synchronize: true,
    }),
    CarModule, FlightsModule,
  ],
})
export class AppModule {}
/* The app.module file in NestJS, just like in Angular, has some config properties that affect the entire application.
 */

