import { Person } from "src/person/entities/person.entity";

export const dbInit = () => {
    Person.sync();
}