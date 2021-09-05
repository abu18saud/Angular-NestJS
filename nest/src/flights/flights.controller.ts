import { Controller, Get, Param } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';

@Controller('flights')
export class FlightsController {
    constructor(private readonly FlightsService: FlightsService) { }


    @Get()
    findAll(): Promise<Flights[]> {
        return this.FlightsService.findAll();
    }

    @Get("/:id")
    findOne(@Param() param): Promise<Flights> {
        return this.FlightsService.findOne(param.id);
    }



}
