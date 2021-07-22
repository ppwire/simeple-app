import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { System } from "./system.entity";


@Entity()
export class Geographic extends System {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   country: string

   @Column()
   city: string

   @Column()
   state: string
}