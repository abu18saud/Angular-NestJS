import { Controller, Get, Post, Param, Body, Put, Delete, Patch } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';

@Controller('api/flights')
export class FlightsController {
    constructor(private readonly FlightsService: FlightsService) { }

    // CREATE
    @Post()
    async create(@Body() flight: Flights): Promise<Flights[]> {
        return this.FlightsService.create(flight);
    }

    // READ All
    @Get()
    findAll(): Promise<Flights[]> {
        return this.FlightsService.findAll();
    }

    @Get("cities/origins")
    getOrigins(): Promise<String[]> {
        return this.FlightsService.getFlightOrigins();
    }

    @Get("cities/destinations")
    getDestinations(): Promise<String[]> {
        return this.FlightsService.getFlightDestinations();
    }

    // QUERY
    @Get("query/:orig/:dest")
    async query(@Param() param): Promise<any> {
        return this.FlightsService.query(param.orig, param.dest);
    }

    // READ ONE
    @Get(":id")
    async findOne(@Param() param): Promise<Flights> {
        return this.FlightsService.findOne(param.id);
    }

    // UPDATE
    @Post(":id/update")
    async update(@Param('id') id, @Body() flight: Flights): Promise<any> {
        flight.id = Number(id);
        return this.FlightsService.update(flight);
        //Gal Good question, my first result in Google says: "When a client needs to replace an existing Resource entirely, they can use PUT. When they're doing a partial update, they can use HTTP PATCH."
    }


    // DELETE
    @Post(":id/delete")
    async delete(@Param('id') id): Promise<any> {
        return this.FlightsService.delete(id);
    }


    /*     @Get()
        findAll(): Promise<Flights[]> {
            return this.FlightsService.findAll();
        }
    
        @Get("/:id")
        findOne(@Param() param): Promise<Flights> {
            return this.FlightsService.findOne(param.id);
        } */

    /*     @Get("query/:orig/:dest")
        async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
            return this.FlightsService.query(orig, dest);
            //for more https://github.com/SoloLearn-Courses/nest_flights/tree/step2/src/flights
        } */
    //Query
    /*     @Get("/query/:orig/:dest")
        async query(@Param() params): Promise<any> 
        { return this.FlightsService.query(params.orig, params.dest); }
    
        //POST
        @Post()
        async create(@Body() flight: Flights): Promise<Flights>{
            return this.FlightsService.create(flight);
    
            //For more see here https://github.com/SoloLearn-Courses/nest_flights/blob/step3/src/flights/flights.controller.ts
        } */





}
