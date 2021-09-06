import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  //https://docs.nestjs.com/security/cors
/*
Tyrhen Williams
You may be running into a Cross-origin resource sharing (CORS)
 problem. Essentially the communication between your nestJS port and
  Angular port are getting restricted. To get around this, go into 
  the 'main.ts' file in your NestJS app. inside the bootstrap function, 
  add this line 'app.enableCors();'. Here is a resource about from 
  the NestJS website -> https://docs.nestjs.com/security/cors
*/

}
bootstrap();