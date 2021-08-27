import { Controller, Get, Post, Req, Body, Request, Param} from '@nestjs/common';
import { CarService } from './car.service';
import { Cars } from './cars.entity';

@Controller('cars')
export class CarsController {
    /* GET /cars => gets a list of cars
    POST /cars => creates a new car based on the bundle of data you sent it
    GET /cars/:id => gets one car based on the id you sent it as a wildcard
    POST /cars/:id => updates a car based on a bundle of data to update a car
    POST /cars/:id/delete => deletes a car
    
    There are other HTTP verbs like PUT and DELETE, but since web pages only understand GET and POST, we are using these verbs for simplicity.

    1. Create a new car (Create)
    2. Retrieve all cars (Read)
    3. Retrieve one car (also Read)
    4. Update one car (Update)
    5. Delete a car (Destroy)

    Let's do it!
    */
    @Get()
    findAll(): Promise<Cars[]> {
      return this.CarService.findAll();
    }
  
    @Get("/:id")
    findOne(@Param() param): Promise<Cars[]> {
      return this.CarService.findOne(param.id);
    }



    @Get('showcase')
    showcase(): string {
        return 'عبدالله علي السالم';
    }

    @Get('/english/typescript')
    english(): string {
        return 'عبدالله علي السالم';
    }

    @Get('foods/vegan')
    veganfoods(@Req() request: Request): string {
        return 'this is the vegan foods route';
    }

  // GET  /cars  => gets a list of cars
  @Get('local')
  findAll_(@Req() request: Request): {} {
    return [{make: 'honda', model: 'accord'},
            {make: 'subaru', model: 'outback'},
            {make: 'fiat', model: '123 spider'}];
  }

  // POST /cars => creates a new car based on the bundle of data you sent it
  @Post()
  async create(@Body() carParams) {
    return `I got your post request ! 
    You want to create a ${carParams.make}`;
  }

  // GET /cars/:id => gets one car based on the id you sent it as a wildcard
  @Get(':id/local')
  findOne_(@Req() request: Request): {} {
    return {id: 25, make: 'tesla', model: 'model x'}
  }


  // POST /cars/:id => updates a car based on a bundle of data to update a car
  @Post(':id')
  async update(@Body() carParams, @Param() params) {
    return `I got your post request ! 
    You want to edit a ${carParams.make} belonging to
    ${params.id}`;
  }

  // POST /cars/:id/delete => deletes a car... all you need is an ID ! 
  // we only need an ID because that's all we need to send to the database
  // to identify the record to delete
  @Post(':id/delete')
  async delete(@Param() params) {
    return `planning to delete ${params.id}`;
  } 

}
