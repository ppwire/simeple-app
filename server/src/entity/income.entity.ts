import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { System } from "./system.entity";

@Entity()
export class Income extends System {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   IncomeName: string;

   @Column()
   incomeMin: number;

   @Column()
   incomeMax: number;
}