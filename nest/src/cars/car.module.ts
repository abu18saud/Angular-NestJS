import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cars])],
    providers: [CarService],
    controllers: [CarController],
})
export class CarModule { }