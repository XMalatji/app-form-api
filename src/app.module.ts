import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeepsController } from './people/people.controller';



@Module({
  imports: [],
  controllers: [AppController, PeepsController],
  providers: [AppService],
})
export class AppModule {}
