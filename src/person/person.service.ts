import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person) private personModel: typeof Person) { }

  async create(createPersonDto: CreatePersonDto): Promise<object> {
    const response = await this.personModel.create(createPersonDto);

    return { success: response };
  }

  async findAll(): Promise<object> {
    const response = await this.personModel.findAll();

    return response;
  }

  async findOne(id: number): Promise<object> {
    const response = await this.personModel.findOne({
      where: {
        id
      }
    });

    return response;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<object> {
    const response = await this.personModel.update(updatePersonDto, {
      where: {
        id
      }
    });

    return response;
  }

  async remove(id: number): Promise<any> {
    const response = await this.personModel.destroy({
      where: {
        id
      }
    });

    return response;
  }
}
