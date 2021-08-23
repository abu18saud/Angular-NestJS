import { Controller, Get, Req, Request } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    findAll(): {} {
        return [{ make: 'honda', model: 'accord' },
        { make: 'subaru', model: 'outback' },
        { make: 'fiat', model: '123 spider' }];
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
}
