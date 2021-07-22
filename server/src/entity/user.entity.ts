import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Income } from "./income.entity";
import { System } from "./system.entity";

@Entity()
export class User extends System {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   userName: string;

   @Column()
   userPassword: string;

   @Column()
   profilePic: string;

   @Column()
   address: string;

   @Column()
   gender: string;

   @OneToOne(() => Income)
   @JoinColumn()
   income: Income

}