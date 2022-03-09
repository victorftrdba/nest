import { Person } from "src/person/entities/person.entity";

export const dbConfig: object = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'dev102030',
    database: 'nodejs',
    models: [Person],
}