import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from './entities/person.entity';

@Module({
  imports: [SequelizeModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService]
})

export class PersonModule { }
