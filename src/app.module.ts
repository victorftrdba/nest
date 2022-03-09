import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonModule } from './person/person.module';
import { dbConfig } from './database/config';

@Module({
  imports: [
    SequelizeModule.forRoot(dbConfig),
    PersonModule
  ],
})
export class AppModule { }
