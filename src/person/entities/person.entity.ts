import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'people',
    timestamps: true
})
export class Person extends Model<Person> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName: string;
}