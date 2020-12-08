import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreatePeepDto } from './peed.dto';
import Cors from 'cors'
import NextCors from 'nextjs-cors';
import { Observable, of } from 'rxjs';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/people', {useNewUrlParser: true, useUnifiedTopology: true});

const Person = mongoose.model('Person', { name: String , surname: String, idNo: String, email: String});



@Controller('peeps')
export class PeepsController {

  @Get()
  findAll(@Req() request: Request, res: Response): Observable<any[]> {
 
    let people = Person.find({});
    return of(people)
  }

  @Post()
  create(@Body() createPeep: CreatePeepDto) {
    const peep = new Person(createPeep);
    peep.save().then(() => console.log(peep));
    return 'Added a nuwe mense ' + createPeep.name;
  }

}