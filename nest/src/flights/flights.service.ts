import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
    constructor(
        @InjectRepository(Flights)
        private readonly flightsRepository: Repository<Flights>,
    ) { }

    async findAll(): Promise<Flights[]> {
        return this.flightsRepository.find();
    }

    async findOne(id: number): Promise<Flights> {
        return this.flightsRepository.findOne(id);
    }

    async query(orig: string, dest: string): Promise<any> {
        return await this.flightsRepository.find({ origin: orig, destination: dest });
    }

    //Post
    async create(flight: Flights): Promise<any> {
        return await this.flightsRepository.save(flight);
    }

    async getFlightOrigins(): Promise<String[]> {
        return this.flightsRepository.query("Select DISTINCT origin from flights ORDER BY origin");
    }

    async getFlightDestinations(): Promise<String[]> {
        return this.flightsRepository.query("Select DISTINCT destination from flights ORDER BY destination");
    }

    async update(flight: Flights): Promise<UpdateResult> {
        return await this.flightsRepository.update(flight.id, flight);
    }


    async delete(id: number): Promise<any> {
        return this.flightsRepository.delete(id);
    }


}
