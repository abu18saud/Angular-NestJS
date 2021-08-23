import { Controller, Get, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('q1')
  getCreds(@Req() request: Request): {} {
    return { uuid: '12x8s', auth: true, tokenize: false }
  }

  @Get('find_all')
  findAll(@Req() request: Request): {} {
    return [{ make: 'honda', model: 'accord' },
    { make: 'subaru', model: 'outback' },
    { make: 'fiat', model: '123 spider' }];
  }



}
