import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Income } from "./income.entity";
import { System } from "./system.entity";

@Entity()
export class User extends System {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   Username: string;

   @Column()
   Userpassword: string;

   @Column()
   profilePic: string;

   @Column()
   remarkAddress: string;

   @OneToOne(() => Income)
   @JoinColumn()
   income: Income
}